import { Message, MessageType, OpenTabMessage } from "./types/messages";

chrome.runtime.onMessage.addListener(function(message: Message, sender, sendResponse) {
    switch (message.type) {
        case MessageType.OpenTab:
            const data = message as OpenTabMessage
            chrome.tabs.create({
                url: data.url,
                active: false
            })
    }
});