// content.js

if (chrome.runtime) {
  // Add event listener for beforeunload
  window.addEventListener('beforeunload', function (event) {
    if (event.target.opener) {
      event.preventDefault();
      event.returnValue = '';  // Required for some browsers
    }
  });

  // Add event listener for unload
  window.addEventListener('unload', function (event) {
    if (event.target.opener) {
      event.preventDefault();
    }
  });

  // Send a log message to the background script
  chrome.runtime.sendMessage({ type: 'log', message: 'Content script loaded' });
} else {
  console.error('chrome.runtime is undefined. Extension might not be loaded correctly.');
}
