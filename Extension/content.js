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
              if (rects.length > 0) return rects[0];
          }
          // Fallback for contentEditable: use element's bounding box if no range rect
          const elRect = element.getBoundingClientRect();
          // Adjust for scroll position if element itself is scrollable
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
          theSizer.style.top = '-9999px'; // Move way off screen
          theSizer.style.left = '-9999px';
          
          document.body.appendChild(theSizer);
          
          const textBeforeCaret = element.value.substring(0, element.selectionStart);
          theSizer.textContent = textBeforeCaret.replace(/\n/g, '\n ') || ' '; // Handle newlines better for height calculation
          
          const elementRect = element.getBoundingClientRect();
          const sizerRect = theSizer.getBoundingClientRect(); // This will be relative to viewport
          document.body.removeChild(theSizer);

          // Calculate caret position within the input field.
          // For x: element's left + sizer's width (text before caret)
          // For y: it's more complex with line wraps. We'll use element top + relative Y pos of caret.
          // A simpler approach for Y is just to use the line where the caret is.
          // For now, we'll primarily use elementRect.bottom for positioning below.
          const caretX = elementRect.left + (textBeforeCaret.length > 0 ? sizerRect.width : 0) - (parseFloat(style.paddingLeft) || 0);

          // Approximation for Y position of caret if multi-line.
          // This is still hard; we'll use the bottom of the input as the reference mostly.
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
    // Use visualViewport for more accuracy with mobile pinch-zoom etc.
    const vViewport = window.visualViewport || { offsetLeft: 0, offsetTop: 0, width: viewportWidth, height: viewportHeight };
    const scrollY = vViewport.offsetTop; 
    const scrollX = vViewport.offsetLeft;
    const effectiveViewportHeight = vViewport.height;
    const effectiveViewportWidth = vViewport.width;


    let topPos = rect.bottom + 5; // Relative to viewport for fixed positioning
    let leftPos = rect.left;    // Relative to viewport

    // If rect coordinates are from getBoundingClientRect (already viewport-relative)
    // and popup is fixed, we don't need to add scrollX/Y again.
    // If caretRect gives absolute document coords, we'd need to subtract scroll for fixed.
    // Assuming getCaretCoordinates gives viewport-relative or we adjust.
    // For simplicity, let's assume rect values are viewport-relative for fixed popup.

    popup.classList.remove('ah-above');

    if ((topPos + popupHeight > effectiveViewportHeight) && (rect.top - popupHeight - 5 > 0)) {
        topPos = rect.top - popupHeight - 5;
        popup.classList.add('ah-above');
    } else if (topPos + popupHeight > effectiveViewportHeight) { 
        topPos = effectiveViewportHeight - popupHeight - 5;
        if (topPos < 5) topPos = 5; // Don't go off top screen
    }


    if (leftPos + popupWidth > effectiveViewportWidth) {
        leftPos = effectiveViewportWidth - popupWidth - 5;
    }
    if (leftPos < 5) { // Allow some padding from left edge
        leftPos = 5;
    }
    
    // Final adjustment relative to document for fixed positioning
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
    if (isPopupVisible) hidePopup(false);

    activeInputElement = element;
    currentTriggerText = triggerTextValue; 
    isPopupVisible = true;
    selectedIndex = -1;
    originalScrollPosition = { x: window.scrollX, y: window.scrollY }; // Store document scroll

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
        lastDismissedViaEscapeOrClick = { text: "", input: null }; 
    }
    
    popup.classList.remove('ah-visible');
    popup.classList.remove('ah-above');

    setTimeout(() => {
        if (!isPopupVisible) { 
            popup.style.display = 'none';
        }
    }, 200);

    if (focusBackToInput && activeInputElement && typeof activeInputElement.focus === 'function') {
        // Try to focus the element that had focus *before* the popup item was mousedowned on
        const elementToFocus = lastActiveElementBeforePopup || activeInputElement;
        if(document.activeElement !== elementToFocus && !popup.contains(document.activeElement)) {
            elementToFocus.focus();
        }
        lastActiveElementBeforePopup = null; // Reset

        // if (window.scrollX !== originalScrollPosition.x || window.scrollY !== originalScrollPosition.y) {
        //     window.scrollTo(originalScrollPosition.x, originalScrollPosition.y);
        // } // This scrolling can be disruptive, remove for now unless specifically needed
    }
    
    isPopupVisible = false;
    listElement.innerHTML = "";
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
      return text;
    }
  }

  function filterAndRenderList(searchText) {
    listElement.innerHTML = '';
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
    
    if (lowerSearchText.length === 0 && !currentTriggerText.startsWith("{{")) { 
        filteredTags = ARIVE_TAGS;
    } else if (lowerSearchText.length === 0 && currentTriggerText.startsWith("{{")) { 
        filteredTags = ARIVE_TAGS; 
    }
     else if (lowerSearchText.length === 1) {
        filteredTags = ARIVE_TAGS.filter(tag =>
            tag.tagString.toLowerCase().startsWith(lowerSearchText) ||
            tag.label.toLowerCase().startsWith(lowerSearchText)
        );
    } else {
        filteredTags = ARIVE_TAGS.filter(tag =>
            tag.tagString.toLowerCase().includes(lowerSearchText) ||
            tag.label.toLowerCase().includes(lowerSearchText)
        );
    }

    if (filteredTags.length === 0 && (lowerSearchText.length > 0 || currentTriggerText.startsWith("{{")) ) { 
      const noMatches = document.createElement('div');
      noMatches.className = 'arive-helper-no-matches';
      noMatches.textContent = 'No matches found.';
      listElement.appendChild(noMatches);
    } else if (filteredTags.length > 0) { 
      filteredTags.forEach((tag, index) => {
        const item = document.createElement('li');
        item.className = 'arive-helper-list-item';
        item.dataset.tagString = tag.tagString;
        item.dataset.index = index;

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
    updateSelectionHighlight();
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
  
  // Helper to find DOM node and offset for an absolute character position within an element
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
      // Fallback if charOffset is beyond content or element is empty
      const children = parentElement.childNodes;
      if (children.length === 0) return { node: parentElement, offset: 0 }; // Empty element
      
      // If charOffset is at the very end
      let lastTextNode = null;
      const lastNodeWalker = document.createTreeWalker(parentElement, NodeFilter.SHOW_TEXT, null, false);
      while(lastNodeWalker.nextNode()) lastTextNode = lastNodeWalker.currentNode;
      if (lastTextNode) return { node: lastTextNode, offset: lastTextNode.textContent.length };
      
      // If no text nodes but has other children (e.g. <br>), point to end of parent
      return { node: parentElement, offset: children.length };
  }


  function insertTag(tagString) {
    if (!activeInputElement) return;

    const el = activeInputElement;
    const isContentEditable = el.isContentEditable;
    const textToReplace = (currentTriggerText && currentTriggerText.startsWith("{{")) ? currentTriggerText : "";

    // Ensure element is focused before manipulating selection/range
    if (document.activeElement !== el) {
        el.focus();
    }

    if (isContentEditable) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            let range = selection.getRangeAt(0);

            if (textToReplace.length > 0) {
                const absTextContent = el.textContent; 
                const absCursorPos = getCaretPositionContentEditable(el); 
                const effectiveTextToReplaceStart = (absTextContent.substring(0, absCursorPos)).lastIndexOf(textToReplace);

                if (effectiveTextToReplaceStart !== -1 && (absCursorPos - effectiveTextToReplaceStart) === textToReplace.length) {
                    const startDomPos = findDomPosition(el, effectiveTextToReplaceStart);
                    const endDomPos = findDomPosition(el, absCursorPos); 

                    if (startDomPos && endDomPos && startDomPos.node && endDomPos.node) {
                        try {
                            range.setStart(startDomPos.node, startDomPos.offset);
                            range.setEnd(endDomPos.node, endDomPos.offset);
                        } catch (e) {
                            console.error("ARIVE Helper: Error setting range for replacement. Will insert at current selection.", e);
                            range = selection.getRangeAt(0); 
                        }
                    } else {
                        console.warn("ARIVE Helper: Could not map textToReplace to DOM. Inserting at current selection.");
                        range = selection.getRangeAt(0); 
                    }
                } else {
                    range = selection.getRangeAt(0); 
                }
            }
            // If textToReplace is empty (context menu), range is already at the cursor.

            try {
                // Delete the selected content (either the trigger text or current selection)
                range.deleteContents();
                
                // For contentEditable, try inserting as HTML to better respect surrounding structure
                // Create a temporary element to hold the tag string, then insert its text content
                // to avoid inserting 'tagString' as literal HTML if it contained < or >.
                // However, if we want to *allow* tags to insert actual HTML like <br>, this would change.
                // PRD implies tags are Handlebars, so they are text.
                // The issue is more about how the browser *integrates* this new text node.
                
                // Option 1: Insert as Text Node (as before, but after more careful range setting)
                // const textNodeToInsert = document.createTextNode(tagString);
                // range.insertNode(textNodeToInsert);
                // range.setStartAfter(textNodeToInsert);
                // range.collapse(true);

                // Option 2: Try execCommand('insertText') or ('insertHTML' if tags could be HTML)
                // This often handles integration with rich editors better.
                // Since tagString is plain text, 'insertText' is safer.
                if (document.queryCommandSupported('insertText') && document.queryCommandEnabled('insertText')) {
                    document.execCommand('insertText', false, tagString);
                } else { // Fallback if insertText not supported (very unlikely for modern Chrome)
                    const textNodeToInsert = document.createTextNode(tagString);
                    range.insertNode(textNodeToInsert);
                    range.setStartAfter(textNodeToInsert);
                    range.collapse(true);
                }
                // After execCommand, the selection is usually correctly placed.
                // If we used range.insertNode, we'd need to update selection:
                // selection.removeAllRanges();
                // selection.addRange(range);

            } catch (e) {
                 console.error("ARIVE Helper: Error during DOM manipulation (delete/insert):", e);
            }
        }
    } else { // Input or Textarea
        const val = el.value;
        let selStart = el.selectionStart;
        let selEnd = el.selectionEnd;
        let replacementStartPos = selStart; 

        if (textToReplace.length > 0) {
            const textBeforeCursor = val.substring(0, selStart);
            const foundIdx = textBeforeCursor.lastIndexOf(textToReplace);
            // Ensure the found trigger is indeed what's right before the cursor
            if (foundIdx !== -1 && (selStart - foundIdx) === textToReplace.length) {
                replacementStartPos = foundIdx;
                // selEnd should be the original selStart to replace only the trigger
            } else { 
                // Trigger not found immediately before cursor, just insert at current cursor
                replacementStartPos = selStart; 
                selEnd = selStart; // Overwrite nothing, just insert
            }
        } else { 
            // No textToReplace (e.g. context menu), insert at current selection/cursor
            replacementStartPos = selStart; 
        }
        
        el.value = val.substring(0, replacementStartPos) + tagString + val.substring(selEnd);
        const newCursorPos = replacementStartPos + tagString.length;
        el.selectionStart = el.selectionEnd = newCursorPos;
    }
    
    // Dispatch events that frameworks/editors might listen to
    activeInputElement.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
    activeInputElement.dispatchEvent(new Event('change', { bubbles: true, cancelable: true })); // For some cases

    hidePopup(true, "selection");
    currentTriggerText = ""; 
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
    if (document.activeElement !== activeInputElement) return;

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
      case 'Tab': 
        if (selectedIndex >= 0 && selectedIndex < itemsCount) {
          event.preventDefault(); 
          const selectedItem = listElement.children[selectedIndex];
          if (selectedItem && selectedItem.dataset.tagString) {
            insertTag(selectedItem.dataset.tagString);
          }
        } else if (event.key === 'Tab') {
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
    // Ensure textImmediatelyBeforeCursor is not excessively long to improve performance of lastIndexOf
    const searchScope = Math.min(cursorPos, 200); // Look back up to 200 chars
    const textImmediatelyBeforeCursor = value.substring(cursorPos - searchScope, cursorPos);

    const triggerStartPosInSubstring = textImmediatelyBeforeCursor.lastIndexOf("{{");
    
    if (triggerStartPosInSubstring !== -1) {
        const potentialTrigger = textImmediatelyBeforeCursor.substring(triggerStartPosInSubstring); 
        const searchText = potentialTrigger.substring(2); 

        if (potentialTrigger.startsWith("{{") && potentialTrigger.length >= 2) { 
            if (lastDismissedViaEscapeOrClick.input === target && lastDismissedViaEscapeOrClick.text === potentialTrigger) {
                return; 
            }
            
            if (ARIVE_TAGS.some(tag => tag.tagString === potentialTrigger)) {
                if(isPopupVisible) hidePopup(false, "full-tag-match");
                currentTriggerText = ""; 
                return; 
            }

            if (potentialTrigger !== currentTriggerText || !isPopupVisible || activeInputElement !== target) {
                 showPopup(target, potentialTrigger, '{{');
            } else if (isPopupVisible) { 
                filterAndRenderList(searchText);
                positionPopup(target, '{{');
            }
             currentTriggerText = potentialTrigger; 
        } else { 
            if (isPopupVisible && activeInputElement === target) hidePopup(false);
        }
    } else { 
      if (isPopupVisible && activeInputElement === target && currentTriggerText.startsWith("{{")) {
        hidePopup(false);
      }
      currentTriggerText = ""; 
    }
  }

  function handleListItemClick(event) {
    const item = event.target.closest('.arive-helper-list-item');
    if (item && item.dataset.tagString) {
      if (activeInputElement) activeInputElement.focus(); // Re-focus input before inserting
      insertTag(item.dataset.tagString);
    }
  }

  function handleDocumentClick(event) {
    if (!isPopupVisible) return;
    if (!popup.contains(event.target) && event.target !== activeInputElement) {
      hidePopup(false, "click-outside");
    }
  }

  function handleDocumentFocusOut(event) {
    if (!isPopupVisible || !activeInputElement) return;
    if (event.target === activeInputElement && !popup.contains(event.relatedTarget)) {
      setTimeout(() => {
          if (document.activeElement !== activeInputElement && !popup.contains(document.activeElement)) { 
             hidePopup(false, "focus-out");
          }
      }, 100);
    }
  }
  
  function handleContextMenu(event) {
      if (isEditable(event.target)) {
        lastRightClickPosition = { x: event.clientX, y: event.clientY };
      }
  }

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "AH_triggerPopupFromContext") {
      let targetElement = null;
      // Try to get element from right-click position first
      const clickedElement = document.elementFromPoint(lastRightClickPosition.x, lastRightClickPosition.y);
      if (isEditable(clickedElement)) {
          targetElement = clickedElement;
      } else if (isEditable(document.activeElement)) { // Fallback to currently active editable element
          targetElement = document.activeElement;
      }

      if (targetElement) {
          if (document.activeElement !== targetElement) {
              targetElement.focus();
              if (targetElement.isContentEditable) {
                try { // Try to set cursor at right-click point for contenteditables
                    const selection = window.getSelection();
                    const range = document.caretRangeFromPoint(lastRightClickPosition.x, lastRightClickPosition.y);
                    if (range && selection) {
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                } catch (e) { /* caretRangeFromPoint might not exist or fail */ }
              }
          }
          currentTriggerText = ""; 
          showPopup(targetElement, "", "context-menu");
      }
      sendResponse({ status: "Popup triggered or attempted from context menu" });
    }
    return true;
  });

  // --- Initialization ---
  createPopup(); 
  document.addEventListener('keyup', handleDocumentKeyUp, true); 
  document.addEventListener('keydown', handleDocumentKeyDown, true); 
  document.addEventListener('click', handleDocumentClick, true); 
  document.addEventListener('focusout', handleDocumentFocusOut, true); 
  document.addEventListener('contextmenu', handleContextMenu, true); 

  console.log("ARIVE Helper Tag Inserter v1.1.0 (Updated with execCommand) initialized.");

})();