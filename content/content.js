// content/content.js

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "insertText") {
    const textarea = document.getElementById("prompt-textarea");
    if (textarea) {
      textarea.value = message.text;
    }
  }
});
