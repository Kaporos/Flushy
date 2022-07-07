import { MessageType, OpenTabMessage } from "./types/messages";


Object.values(MessageType).forEach((type) => {
    document.addEventListener(type, function(data) {
        //@ts-ignore
        chrome.runtime.sendMessage(data.detail as MessageType[type]);
    })
})
