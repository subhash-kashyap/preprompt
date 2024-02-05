// popup/popup.js

const options = [
  "You are an agent and I am a CEO...",
  "Another option text...",
];

function handleOptionClick(selectedText) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    const message = { action: "insertText", text: selectedText };
    chrome.tabs.sendMessage(activeTab.id, message);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  options.forEach(function (text) {
    const button = document.createElement("button");
    button.textContent = text;
    button.className = "button";
    button.addEventListener("click", function () {
      handleOptionClick(text);
    });
    app?.appendChild(button);
  });
});
