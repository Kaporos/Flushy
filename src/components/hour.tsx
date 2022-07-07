import { styled, theme } from "../stitches.config"
import {useEffect, useState} from "preact/hooks"
import { localInfoStore } from "../stores/localInfosStore"
import { observer } from "mobx-react-lite"
const HourH1 = styled("h1", {
    fontFamily: theme.fonts.general,
    fontSize: "2vw",
    color: "black",
    fontWeight: "500"
})
 function HourComponent() {


    return <>
    
        <HourH1>{localInfoStore.time} - {localInfoStore.weather.FeelsLikeC}°</HourH1>
    
    </>
}

export default observer(HourComponent)