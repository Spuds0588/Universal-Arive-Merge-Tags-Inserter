// background.js
const CONTEXT_MENU_ID = "ARIVE_HELPER_INSERT_TAG";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: CONTEXT_MENU_ID,
    title: "Insert ARIVE Info Tag",
    contexts: ["editable"] // Show for editable elements
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === CONTEXT_MENU_ID && tab) {
    // Send a message to the content script in the active tab
    chrome.tabs.sendMessage(tab.id, {
      action: "AH_triggerPopupFromContext",
      x: info.menuItemIntId, // This isn't directly available, we'll use mouse pos from content script.
                            // For now, this signals the content script to use its stored right-click pos.
    });
  }
});

// Listen for a request from content script to get click coordinates
// This is a common pattern if the content script needs info from the background
// related to a context menu click, but usually, the content script can
// determine click position itself when it receives the message.
// In this case, the content script will have its own right-click event listener
// to store the coordinates for when this message comes.