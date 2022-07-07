import { action, computed, makeObservable, observable } from "mobx"
import { WeatherInformations } from "../types/weatherInformation"




class LocalInfoStore {

    private $time = observable.box<string>("")
    private $weather = observable.box<WeatherInformations>({} as WeatherInformations)

    private $timeInterval: number = 0;
    private $weatherInterval: number = 0;

    constructor() {
        makeObservable(this)
    }


    startPolling() {
        this.updateTime()
        this.updateWeather()
        this.$timeInterval = setInterval(() => {
            this.updateTime()
        }, 1000)
        this.$weatherInterval = setInterval(() => {
            this.updateWeather()
        }, 1000 * 60 * 10)
    }

    stopPolling() {
        clearInterval(this.$timeInterval)
        clearInterval(this.$weatherInterval)
    }

    @action
    async updateWeather() {
        const result = await fetch("http://wttr.in?format=j1")
        const data = await result.json()
        this.$weather.set(data["current_condition"][0] as WeatherInformations)
    }

    @action
    async updateTime() {
        this.$time.set(new Date().toLocaleTimeString('default', {
            hour: '2-digit',
            minute: '2-digit',
        }))
    }

    @computed
    get time(): string {
        return this.$time.get()
    }

    @computed
    get weather(): WeatherInformations {
        return this.$weather.get()
    }
    

}

const localInfoStore = new LocalInfoStore()
export {localInfoStore}