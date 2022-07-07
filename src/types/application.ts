import { OpenTabMessage } from "./messages"

export class Application {
    public name: string
    public url: string
    public image: string
    constructor(name: string, url: string, image: string) {
        this.name = name
        this.url = url
        this.image = image
    }

    open() {
        const message = new OpenTabMessage(this.url)
        message.send()
    }
}