// background.js

chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  if (details.openerTabId !== undefined) {
    // A popup is being opened
    console.log('Popup blocked:', details.url);
    chrome.tabs.remove(details.tabId);
  }
});
