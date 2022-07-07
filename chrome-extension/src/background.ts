import { Message, MessageType, OpenTabMessage } from "./types/messages";

chrome.runtime.onMessage.addListener(function(message: Message, sender, sendResponse) {
    switch (message.type) {
        case MessageType.OpenTab:
            const data = message as OpenTabMessage
            openTab(data.url)
    }
});


function openTab(url: string) {
    chrome.tabs.create({
        url,
        active: false
    }).then((tab) => {
        const changeInterval = setInterval(async () => {
            if (!tab.id) {
                return
            }
            const updatedTab = await chrome.tabs.get(tab.id)
            console.log(updatedTab)
            if (updatedTab.status == "complete") {
                chrome.tabs.highlight({
                    tabs: [tab.index]
                })
                clearInterval(changeInterval)
            }
        }, 500)
    })
}