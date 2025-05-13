// content.js
(function() {
  if (typeof ARIVE_TAGS === 'undefined' || ARIVE_TAGS.length === 0) {
    console.warn("ARIVE Helper: No tags found or tags.js not loaded. Extension will not run.");
    return;
  }

  let popup = null;
  let listElement = null;
  let activeInputElement = null;
  let isPopupVisible = false;
  let currentTriggerText = "";
  let lastDismissedViaEscapeOrClick = { text: "", input: null };
  let lastRightClickPosition = { x: 0, y: 0 };
  let selectedIndex = -1;
  let originalScrollPosition = { x: 0, y: 0 };
  let lastActiveElementBeforePopup = null; // To help with focus restoration

  const SUPPORTED_INPUT_TYPES = ["text", "search", "email", "url", "textarea"];

  function isEditable(element) {
    if (!element) return false;
    return (
      element.isContentEditable ||
      element.tagName === 'TEXTAREA' ||
      (element.tagName === 'INPUT' && SUPPORTED_INPUT_TYPES.includes(element.type.toLowerCase()) && element.type !== 'password')
    );
  }

  function createPopup() {
    if (popup) return;

    popup = document.createElement('div');
    popup.className = 'arive-helper-popup';
    popup.style.display = 'none';

    listElement = document.createElement('ul');
    listElement.className = 'arive-helper-list';

    popup.appendChild(listElement);
    document.body.appendChild(popup);

    listElement.addEventListener('click', handleListItemClick);
    listElement.addEventListener('mousedown', (event) => {
        // Prevent input blur when clicking on list item
        if (event.target.closest('.arive-helper-list-item')) {
            lastActiveElementBeforePopup = document.activeElement; // Store who had focus
            event.preventDefault();
        }
    });
  }

  function getCaretCoordinates(element) {
      const isContentEditable = element.isContentEditable;
      if (isContentEditable) {
          const selection = window.getSelection();
          if (selection.rangeCount > 0) {
              const range = selection.getRangeAt(0).cloneRange();
              range.collapse(true);
              const rects = range.getClientRects();
              if (rects.length > 0) return rects;
          }
          const elRect = element.getBoundingClientRect();
          const top = elRect.top + (element.scrollTop || 0);
          const left = elRect.left + (element.scrollLeft || 0);
          return { left: left, top: top, bottom: top + (elRect.height), height: elRect.height, x: left, y: top };
      } else {
          const theSizer = document.createElement('div');
          const style = window.getComputedStyle(element);
          ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'letterSpacing', 'textTransform', 'wordSpacing', 'paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidth', 'textIndent', 'lineHeight'].forEach(prop => {
              theSizer.style[prop] = style[prop];
          });
          theSizer.style.position = 'absolute';
          theSizer.style.visibility = 'hidden';
          theSizer.style.whiteSpace = 'pre';
          theSizer.style.top = '-9999px';
          theSizer.style.left = '-9999px';

          document.body.appendChild(theSizer);

          const textBeforeCaret = element.value.substring(0, element.selectionStart);
          theSizer.textContent = textBeforeCaret.replace(/\n/g, '\n ') || ' ';

          const elementRect = element.getBoundingClientRect();
          const sizerRect = theSizer.getBoundingClientRect();
          document.body.removeChild(theSizer);

          const caretX = elementRect.left + (textBeforeCaret.length > 0 ? sizerRect.width : 0) - (parseFloat(style.paddingLeft) || 0);

          const linesBefore = (element.value.substring(0, element.selectionStart).match(/\n/g) || []).length;
          const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.2; // Approx
          const caretYOffset = linesBefore * lineHeight;
          const caretTopInElement = (parseFloat(style.paddingTop) || 0) + caretYOffset;
          const caretBottomInElement = caretTopInElement + lineHeight;

          return {
              left: caretX,
              top: elementRect.top + caretTopInElement,
              bottom: elementRect.top + caretBottomInElement,
              height: lineHeight,
              x: caretX,
              y: elementRect.top + caretTopInElement
          };
      }
  }


  function positionPopup(triggerElement, triggerType = '{{') {
    if (!popup || !triggerElement) return;

    let rect;
    const defaultLineHeight = parseFloat(window.getComputedStyle(triggerElement).lineHeight) || parseFloat(window.getComputedStyle(triggerElement).fontSize) * 1.2 || 16;

    if (triggerType === 'context-menu') {
        rect = {
            left: lastRightClickPosition.x,
            top: lastRightClickPosition.y,
            bottom: lastRightClickPosition.y + defaultLineHeight,
            height: defaultLineHeight
        };
    } else {
        const caretRect = getCaretCoordinates(triggerElement);
        rect = {
            left: caretRect.left,
            top: caretRect.top,
            bottom: caretRect.bottom,
            height: caretRect.height || defaultLineHeight
        };
    }

    if (popup.style.display === 'none') {
        popup.style.display = 'flex';
    }

    const popupHeight = popup.offsetHeight;
    const popupWidth = popup.offsetWidth;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const vViewport = window.visualViewport || { offsetLeft: 0, offsetTop: 0, width: viewportWidth, height: viewportHeight };
    const scrollY = vViewport.offsetTop;
    const scrollX = vViewport.offsetLeft;
    const effectiveViewportHeight = vViewport.height;
    const effectiveViewportWidth = vViewport.width;


    let topPos = rect.bottom + 5;
    let leftPos = rect.left;

    popup.classList.remove('ah-above');

    if ((topPos + popupHeight > effectiveViewportHeight) && (rect.top - popupHeight - 5 > 0)) {
        topPos = rect.top - popupHeight - 5;
        popup.classList.add('ah-above');
    } else if (topPos + popupHeight > effectiveViewportHeight) {
        topPos = effectiveViewportHeight - popupHeight - 5;
        if (topPos < 5) topPos = 5;
    }


    if (leftPos + popupWidth > effectiveViewportWidth) {
        leftPos = effectiveViewportWidth - popupWidth - 5;
    }
    if (leftPos < 5) {
        leftPos = 5;
    }

    popup.style.top = `${topPos}px`;
    popup.style.left = `${leftPos}px`;

    requestAnimationFrame(() => {
      popup.classList.add('ah-visible');
    });
  }

  function showPopup(element, triggerTextValue = "", triggerType = '{{') {
    if (isPopupVisible && activeInputElement === element && currentTriggerText === triggerTextValue && triggerType !== 'context-menu') {
        positionPopup(element, triggerType);
        return;
    }
    // if (isPopupVisible) hidePopup(false); //This might be too aggressive, causing blips if called rapidly.
                                         // Let handleDocumentKeyUp manage explicit hiding based on its logic.

    activeInputElement = element;
    currentTriggerText = triggerTextValue;
    isPopupVisible = true;
    selectedIndex = -1;
    // originalScrollPosition = { x: window.scrollX, y: window.scrollY }; // Storing might be less relevant now

    let searchText = "";
    if (triggerType === '{{') {
      searchText = currentTriggerText.substring(2);
    }

    filterAndRenderList(searchText);
    positionPopup(element, triggerType);
  }

  function hidePopup(focusBackToInput = true, dismissedByType = "generic") {
    if (!isPopupVisible) return;

    if (dismissedByType === "escape" || dismissedByType === "click-outside") {
        lastDismissedViaEscapeOrClick = { text: currentTriggerText, input: activeInputElement };
    } else {
        // For other dismissals (selection, full-tag-match, no-trigger, etc.),
        // we don't want this specific dismissal to block future triggers if conditions are met again.
        lastDismissedViaEscapeOrClick = { text: "", input: null };
    }

    popup.classList.remove('ah-visible');
    popup.classList.remove('ah-above');

    // isPopupVisible should be set to false *before* the timeout,
    // so that rapid calls to showPopup don't find isPopupVisible true from a fading out popup.
    isPopupVisible = false;

    setTimeout(() => {
        // Only hide with display:none if it hasn't been re-shown in the meantime.
        if (!isPopupVisible && popup.style.display !== 'none') {
            popup.style.display = 'none';
        }
    }, 200); // Matches CSS transition

    if (focusBackToInput && activeInputElement && typeof activeInputElement.focus === 'function') {
        const elementToFocus = lastActiveElementBeforePopup || activeInputElement;
        if(document.activeElement !== elementToFocus && !popup.contains(document.activeElement)) {
            elementToFocus.focus();
        }
        lastActiveElementBeforePopup = null;
    }

    // listElement.innerHTML = ""; // Clear list only when popup is truly hidden or re-rendered
                                // This might cause flicker if cleared too early.
                                // filterAndRenderList will clear it.
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlightMatches(text, searchTerm) {
    if (!searchTerm) return text;
    try {
      const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
      return text.replace(regex, '<span class="arive-helper-highlight">$1</span>');
    } catch (e) {
      return text; // In case of invalid regex from searchTerm
    }
  }

  function filterAndRenderList(searchText) {
    listElement.innerHTML = ''; // Clear previous items
    selectedIndex = -1;

    const lowerSearchText = searchText.toLowerCase();
    let filteredTags;

    if (!ARIVE_TAGS || ARIVE_TAGS.length === 0) {
        const noTagsItem = document.createElement('div');
        noTagsItem.className = 'arive-helper-no-matches';
        noTagsItem.textContent = 'No tags defined in tags.js.';
        listElement.appendChild(noTagsItem);
        return;
    }

    // If popup is triggered by context menu (searchText is initially empty) or {{ with no filter, show all.
    if (lowerSearchText.length === 0) {
        filteredTags = ARIVE_TAGS;
    } else if (lowerSearchText.length === 1) { // FR3.2: 1 Character Search
        filteredTags = ARIVE_TAGS.filter(tag =>
            tag.tagString.toLowerCase().startsWith(lowerSearchText) ||
            tag.label.toLowerCase().startsWith(lowerSearchText)
        );
    } else { // FR3.2: 2+ Characters Search
        filteredTags = ARIVE_TAGS.filter(tag =>
            tag.tagString.toLowerCase().includes(lowerSearchText) ||
            tag.label.toLowerCase().includes(lowerSearchText)
        );
    }

    if (filteredTags.length === 0) {
      const noMatches = document.createElement('div');
      noMatches.className = 'arive-helper-no-matches';
      noMatches.textContent = 'No matches found.';
      listElement.appendChild(noMatches);
    } else {
      filteredTags.forEach((tag, index) => {
        const item = document.createElement('li');
        item.className = 'arive-helper-list-item';
        item.dataset.tagString = tag.tagString;
        item.dataset.index = index; // For keyboard navigation if needed

        const tagStringSpan = document.createElement('span');
        tagStringSpan.className = 'arive-helper-tag-string';
        tagStringSpan.innerHTML = highlightMatches(tag.tagString, searchText);

        const labelSpan = document.createElement('span');
        labelSpan.className = 'arive-helper-tag-label';
        labelSpan.innerHTML = highlightMatches(tag.label, searchText);

        item.appendChild(tagStringSpan);
        item.appendChild(labelSpan);
        listElement.appendChild(item);
      });
    }
    updateSelectionHighlight(); // Ensure selection (e.g. none) is visually correct
  }

  function getCaretPositionContentEditable(element) {
    let caretOffset = 0;
    const sel = window.getSelection();
    if (sel.rangeCount > 0) {
        const range = sel.getRangeAt(0);
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretOffset = preCaretRange.toString().length;
    }
    return caretOffset;
  }

  function findDomPosition(parentElement, charOffset) {
      const walker = document.createTreeWalker(parentElement, NodeFilter.SHOW_TEXT, null, false);
      let currentNode = walker.nextNode();
      let accumulatedOffset = 0;
      while (currentNode) {
          const nodeLength = currentNode.textContent.length;
          if (accumulatedOffset + nodeLength >= charOffset) {
              return { node: currentNode, offset: charOffset - accumulatedOffset };
          }
          accumulatedOffset += nodeLength;
          currentNode = walker.nextNode();
      }
      const children = parentElement.childNodes;
      if (children.length === 0) return { node: parentElement, offset: 0 };

      let lastTextNode = null;
      const lastNodeWalker = document.createTreeWalker(parentElement, NodeFilter.SHOW_TEXT, null, false);
      while(lastNodeWalker.nextNode()) lastTextNode = lastNodeWalker.currentNode;
      if (lastTextNode) return { node: lastTextNode, offset: lastTextNode.textContent.length };

      return { node: parentElement, offset: children.length };
  }


  function insertTag(tagString) {
    if (!activeInputElement) return;

    const el = activeInputElement;
    const isContentEditable = el.isContentEditable;
    // currentTriggerText holds the "{{text" that triggered the popup.
    // For context menu, currentTriggerText will be empty.
    const textToReplace = (currentTriggerText && currentTriggerText.startsWith("{{")) ? currentTriggerText : "";

    if (document.activeElement !== el) {
        el.focus(); // Ensure element has focus
    }

    if (isContentEditable) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            let range = selection.getRangeAt(0);

            if (textToReplace.length > 0) {
                const absTextContent = el.textContent;
                const absCursorPos = getCaretPositionContentEditable(el);
                // Find the start of the textToReplace, ending at the current cursor position
                const effectiveTextToReplaceStart = absTextContent.substring(0, absCursorPos).lastIndexOf(textToReplace);

                // Ensure the found textToReplace is indeed what's right before the cursor's end
                if (effectiveTextToReplaceStart !== -1 && (absCursorPos - effectiveTextToReplaceStart) === textToReplace.length) {
                    const startDomPos = findDomPosition(el, effectiveTextToReplaceStart);
                    const endDomPos = findDomPosition(el, absCursorPos);

                    if (startDomPos && endDomPos && startDomPos.node && endDomPos.node) {
                        try {
                            range.setStart(startDomPos.node, startDomPos.offset);
                            range.setEnd(endDomPos.node, endDomPos.offset);
                        } catch (e) {
                            console.warn("ARIVE Helper: Error setting range for replacement. Inserting at current selection.", e);
                            // range remains selection.getRangeAt(0)
                        }
                    } else {
                         // Fallback if DOM position finding fails
                    }
                } else {
                    // Trigger text not found immediately before cursor, insert at current collapsed selection
                    range.collapse(false); // Collapse to end of current selection or cursor
                }
            }
            // If textToReplace is empty (context menu), range is already at the desired cursor/selection.

            try {
                range.deleteContents(); // Delete the trigger text or current selection
                // Use execCommand for better integration with rich editors and undo stack
                if (document.queryCommandSupported('insertText') && document.queryCommandEnabled('insertText')) {
                    document.execCommand('insertText', false, tagString);
                } else {
                    const textNodeToInsert = document.createTextNode(tagString);
                    range.insertNode(textNodeToInsert);
                    range.setStartAfter(textNodeToInsert);
                    range.collapse(true);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            } catch (e) {
                 console.error("ARIVE Helper: Error during DOM manipulation (delete/insert):", e);
            }
        }
    } else { // Input or Textarea
        const val = el.value;
        let selStart = el.selectionStart;
        let selEnd = el.selectionEnd; // This is the original selection end

        let replacementStartPos = selStart; // Default to current cursor start

        if (textToReplace.length > 0) {
            const textBeforeCurrentSelectionEnd = val.substring(0, selEnd);
            const foundIdx = textBeforeCurrentSelectionEnd.lastIndexOf(textToReplace);
            // Ensure the found trigger text is exactly what ends at selEnd
            if (foundIdx !== -1 && (selEnd - foundIdx) === textToReplace.length) {
                replacementStartPos = foundIdx;
                // selEnd is already correct (it was the end of the trigger text)
            } else {
                // Trigger text not immediately before cursor end, or selection was different.
                // Insert at current cursor start (selStart), replacing current selection (selStart to selEnd)
                replacementStartPos = selStart;
            }
        } else { // Context menu or no specific trigger text to replace, use current selection
            replacementStartPos = selStart;
        }

        el.value = val.substring(0, replacementStartPos) + tagString + val.substring(selEnd);
        const newCursorPos = replacementStartPos + tagString.length;
        el.selectionStart = el.selectionEnd = newCursorPos;
    }

    activeInputElement.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
    activeInputElement.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));

    hidePopup(true, "selection");
    currentTriggerText = ""; // Clear after successful insertion
  }


  function updateSelectionHighlight() {
    const items = listElement.querySelectorAll('.arive-helper-list-item');
    items.forEach((item, idx) => {
      if (idx === selectedIndex) {
        item.classList.add('ah-selected');
        item.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      } else {
        item.classList.remove('ah-selected');
      }
    });
  }

  function handleDocumentKeyDown(event) {
    if (!isPopupVisible) return;
    // Only handle if focus is effectively within the input/popup interaction context
    if (document.activeElement !== activeInputElement && !popup.contains(document.activeElement)) return;


    const itemsCount = listElement.querySelectorAll('.arive-helper-list-item').length;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (itemsCount > 0) {
            selectedIndex = (selectedIndex + 1) % itemsCount;
            updateSelectionHighlight();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (itemsCount > 0) {
            selectedIndex = (selectedIndex - 1 + itemsCount) % itemsCount;
            updateSelectionHighlight();
        }
        break;
      case 'Enter':
        if (selectedIndex >= 0 && selectedIndex < itemsCount) {
          event.preventDefault();
          const selectedItem = listElement.children[selectedIndex];
          if (selectedItem && selectedItem.dataset.tagString) {
            insertTag(selectedItem.dataset.tagString);
          }
        } else {
            // If Enter is pressed but no item is selected, maybe let it propagate
            // or hide popup. For now, we only act if an item is selected.
        }
        break;
      case 'Tab': // FR6.1, FR6.2 - simplified: Tab from input will select if item highlighted, else hide.
        if (selectedIndex >= 0 && selectedIndex < itemsCount) {
          event.preventDefault();
          const selectedItem = listElement.children[selectedIndex];
          if (selectedItem && selectedItem.dataset.tagString) {
            insertTag(selectedItem.dataset.tagString);
          }
        } else {
            // If tabbing from input and no item selected, or tabbing from popup search,
            // hide popup (focus will move to next page element).
            hidePopup(false, "tab-away");
        }
        break;
      case 'Escape':
        event.preventDefault();
        hidePopup(true, "escape");
        break;
    }
  }

  function handleDocumentKeyUp(event) {
    const target = event.target;
    if (!isEditable(target) || ["Control", "Shift", "Alt", "Meta", "Escape", "ArrowUp", "ArrowDown", "Enter", "Tab"].includes(event.key)) {
      return;
    }

    const value = target.isContentEditable ? target.textContent : target.value;
    const cursorPos = target.isContentEditable ? getCaretPositionContentEditable(target) : target.selectionStart;
    const textUptoCursor = value.substring(0, cursorPos);

    const lastOpenBracePos = textUptoCursor.lastIndexOf("{{");

    if (lastOpenBracePos === -1) {
        // No '{{' before cursor. If popup was visible for a '{{' trigger from this input, hide it.
        if (isPopupVisible && currentTriggerText.startsWith("{{") && activeInputElement === target) {
            hidePopup(false, "no-trigger");
        }
        currentTriggerText = ""; // Reset any active '{{' trigger
        return;
    }

    // currentTypingSequence is the string from the last '{{' up to the cursor.
    // e.g., "{{", "{{foo", "{{foo}}", "{{foo}} bar"
    const currentTypingSequence = textUptoCursor.substring(lastOpenBracePos);

    // Condition 1: User is typing *after* a closing '}}'.
    // Example: currentTypingSequence is "{{tag}}abc" (cursor after 'c').
    // The '{{' at lastOpenBracePos is considered "passed" or "closed".
    const firstCloseBracePosInSequence = currentTypingSequence.indexOf("}}");
    if (firstCloseBracePosInSequence !== -1 && firstCloseBracePosInSequence < currentTypingSequence.length - 2) {
        if (isPopupVisible && activeInputElement === target && currentTriggerText.startsWith("{{")) {
            hidePopup(false, "typed-after-closed-braces");
        }
        currentTriggerText = ""; // This '{{' instance is no longer active for popup.
        return;
    }

    // Condition 2: The current sequence *is* a known tag string (e.g., "{{tag}}").
    // FR5: UI gets out of the way.
    if (ARIVE_TAGS.some(tag => tag.tagString === currentTypingSequence)) {
        if (isPopupVisible && activeInputElement === target) {
            hidePopup(false, "full-tag-match");
        }
        currentTriggerText = ""; // Tag is complete, not an active trigger.
        return;
    }

    // Condition 3: If it's a potential trigger (e.g., "{{", "{{a", "{{abc")
    // And not a full tag (handled by Condition 2), and not typed after "}}" (handled by Condition 1).
    if (currentTypingSequence.startsWith("{{") && currentTypingSequence.length >= 2) {
        // US14: If popup was dismissed for this exact trigger text (by Esc/click-out), don't reopen.
        if (lastDismissedViaEscapeOrClick.input === target &&
            lastDismissedViaEscapeOrClick.text === currentTypingSequence) {
            return;
        }

        const searchText = currentTypingSequence.substring(2);

        // Show new popup or update/re-show existing one.
        // Re-show if target changed, or if trigger text changed (e.g. backspace), or if not visible.
        if (!isPopupVisible || activeInputElement !== target || currentTriggerText !== currentTypingSequence) {
            showPopup(target, currentTypingSequence, '{{');
        } else { // Popup is visible, for the same target, and same trigger text.
                 // This implies user typed another char, so filter list and reposition.
            filterAndRenderList(searchText);
            positionPopup(target, '{{');
        }
        // currentTriggerText is set by showPopup.
    } else {
        // Sequence is not a valid start for a popup (e.g., just "{", or user deleted to this state from "{{").
        if (isPopupVisible && activeInputElement === target && currentTriggerText.startsWith("{{")) {
            hidePopup(false, "trigger-invalidated");
        }
        currentTriggerText = ""; // Trigger is no longer valid.
    }
  }


  function handleListItemClick(event) {
    const item = event.target.closest('.arive-helper-list-item');
    if (item && item.dataset.tagString) {
      // No need to refocus activeInputElement here, insertTag will handle focus.
      insertTag(item.dataset.tagString);
    }
  }

  function handleDocumentClick(event) {
    if (!isPopupVisible) return;
    // If click is outside popup AND outside the input that triggered it
    if (!popup.contains(event.target) && event.target !== activeInputElement) {
      hidePopup(false, "click-outside");
    }
    // If click is on the input itself, popup might stay or re-evaluate on next keyup/focus.
  }

  function handleDocumentFocusOut(event) {
    if (!isPopupVisible || !activeInputElement) return;

    // If the element losing focus is the one that triggered the popup,
    // and the new focused element is not part of our popup.
    if (event.target === activeInputElement && !popup.contains(event.relatedTarget)) {
      // Delay to allow click on popup item to process before hiding due to focus out.
      setTimeout(() => {
          // Check again, as a click on a list item might have already hidden the popup
          // or transferred focus back.
          if (isPopupVisible && document.activeElement !== activeInputElement && !popup.contains(document.activeElement)) {
             hidePopup(false, "focus-out");
          }
      }, 100); // A small delay
    }
  }

  function handleContextMenu(event) {
      // Store right-click position if the target is editable, for context menu trigger.
      if (isEditable(event.target)) {
        lastRightClickPosition = { x: event.clientX, y: event.clientY };
      }
  }

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "AH_triggerPopupFromContext") {
      let targetElement = document.activeElement; // Start with current active element

      // Attempt to find element from right-click if possible and editable
      const clickedElement = document.elementFromPoint(lastRightClickPosition.x, lastRightClickPosition.y);
      if (isEditable(clickedElement)) {
          targetElement = clickedElement;
      } else if (!isEditable(targetElement)) { // If current active is not editable, give up
          targetElement = null;
      }


      if (targetElement) {
          if (document.activeElement !== targetElement) {
              targetElement.focus(); // Focus the target
          }
          // For contentEditable, try to set cursor at right-click point.
          // For input/textarea, focus usually sets cursor at end or mouse click pos.
          if (targetElement.isContentEditable) {
            try {
                const selection = window.getSelection();
                // caretRangeFromPoint is non-standard but available in Blink
                if (document.caretRangeFromPoint) {
                    const range = document.caretRangeFromPoint(lastRightClickPosition.x, lastRightClickPosition.y);
                    if (range && selection) {
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                } else { // Fallback for older/other browsers if caretRangeFromPoint is not available
                    const range = document.createRange();
                    selection.removeAllRanges();
                    // A simple fallback: select the element and collapse to start/end might be needed
                    // Or rely on the focus() behavior.
                    // For simplicity, if caretRangeFromPoint isn't there, we rely on focus() + user click position.
                }
            } catch (e) { console.warn("ARIVE Helper: Error setting caret for context menu.", e); }
          }

          currentTriggerText = ""; // Context menu trigger doesn't have preceding {{text
          showPopup(targetElement, "", "context-menu"); // Show popup with empty search
          sendResponse({ status: "Popup triggered or attempted from context menu" });
      } else {
          sendResponse({ status: "No editable target found for context menu popup" });
      }
    }
    return true; // Indicates asynchronous response, if any.
  });

  // --- Initialization ---
  createPopup();
  // Use capture phase for keydown/keyup to potentially intercept before other listeners
  document.addEventListener('keyup', handleDocumentKeyUp, true);
  document.addEventListener('keydown', handleDocumentKeyDown, true);
  // Use capture for click and focusout to catch events early if needed, though bubble usually fine.
  document.addEventListener('click', handleDocumentClick, true);
  document.addEventListener('focusout', handleDocumentFocusOut, true);
  // contextmenu needs to be on document to get coordinates before Chrome's menu shows.
  document.addEventListener('contextmenu', handleContextMenu, false); // Bubble phase is fine

  console.log("ARIVE Helper Tag Inserter v1.1.0 (Logic Update) initialized.");

})();