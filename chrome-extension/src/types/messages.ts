
class FlushyMessage {
    //@ts-ignore
    type: MessageType

    send() {
        let event = new CustomEvent(this.type, {detail: this})
        document.dispatchEvent(event)
    }
}


export class OpenTabMessage extends FlushyMessage {
    url: string
    type = MessageType.OpenTab
    constructor(url: string) {
        super()
        this.url = url
    }
}

export enum MessageType {
    OpenTab = "flushy:open",
    CloseTab = "flushy:close",
}
export type Message = OpenTabMessage