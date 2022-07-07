import { action, computed, makeObservable, observable, reaction } from "mobx";
import { generateRandom } from "../utils/random";

class BackgroundImageStore {
    private _imgUrl = observable.box<string>()
    private _keyword = observable.box<string>("landscape")


    constructor() {
        makeObservable(this)
        this.updateImgUrl()
    }

    @action
    updateKeyord(keyword: string) {
        this._keyword.set(keyword)
        this.updateImgUrl()
    } 


    @computed
    get keyword(): string{
        return this._keyword.get()
    }

    @computed
    get image(): string {
        return this._imgUrl.get() || ""
    }

    @action
    async updateImgUrl() {
        // TODO Found 4K images source
        //let result = await fetch(`https://api.pexels.com/v1/search?size=large&query=${this.keyword}`)
        //let data = await result.json()
        //let photos = data["photos"]
        //this._imgUrl.set( photos[generateRandom(0, photos.length-1)]["src"]["large2x"]);
        this._imgUrl.set("https://i.pinimg.com/originals/27/1d/18/271d1863de5a7e0a88b5c8023c61dc01.jpg")
    }
    
}

const backgroundImageStore = new BackgroundImageStore()
export default backgroundImageStore;