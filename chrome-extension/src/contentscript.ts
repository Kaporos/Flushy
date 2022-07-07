import { MessageType, OpenTabMessage } from "./types/messages";


document.addEventListener(MessageType.OpenTab, function(data) {
    console.log(data)
    //@ts-ignore
    let message = new OpenTabMessage(data.detail.url)
    console.log(message) 
    //@ts-ignore
    chrome.runtime.sendMessage(message);
})