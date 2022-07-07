import { Component } from "preact"
import { GoToMainMessage, OpenTabMessage  } from "./messages"

export class Application {
    public name: string
    public url: string
    public image: string
    public transitionComponent: Component | undefined
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