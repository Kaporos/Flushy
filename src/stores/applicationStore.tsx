import { action, computed, makeObservable, observable } from "mobx"
import { Application } from "../types/application"

class ApplicationStore {


    private $applications = observable.array<Application>([
        //TODO: Applications from somewhere else
        new Application("Netflix","https://netflix.com","https://turbologo.com/articles/wp-content/uploads/2019/08/netflix-new-logo.png.webp"),
        new Application("Deezer","https://deezer.com","https://pic.clubic.com/v1/images/1712941/raw?fit=smartCrop&height=675&width=1200&hash=f5ca9334dfc7ff12d269658746a3bc9a49591351")

    ])

    constructor() {
        makeObservable(this)
    }

    @computed
    get applications() {
        return Array.from(this.$applications)
    }

    @action
    registerApplication(application: Application) {
        this.$applications.push(application)
    }

}


const applicationStore = new ApplicationStore()
export {applicationStore}