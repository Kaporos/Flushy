let active = false;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    chrome.tabs.create({
        url:"https://google.com",
        active: false
    })
});