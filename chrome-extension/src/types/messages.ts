
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

export class GoToMainMessage extends FlushyMessage {
    type = MessageType.GoToMainMessage
    constructor() {
        super()
    }
}

export enum MessageType {
    OpenTab = "flushy:open",
    GoToMainMessage = "flushy:main",
}
export type Message = OpenTabMessage | GoToMainMessage