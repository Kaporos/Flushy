document.addEventListener("flushy", function(data) {
    chrome.runtime.sendMessage(data);
})