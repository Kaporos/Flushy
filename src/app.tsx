import { observer } from "mobx-react-lite";
import { createRef } from "preact";
import { useEffect } from "preact/hooks";
import HourComponent from "./components/hour";
import { styled } from "./stitches.config";
import backgroundImageStore from "./stores/backgroundImage";
import { localInfoStore } from "./stores/localInfosStore";


const BackgroundImage = styled("img", {
  position: "absolute",
  inset: 0,
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  zIndex: "-1"
})

const Grid = styled("div", {
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gridTemplateColumns: "1fr 1fr",
  height: "100vh",
  width: "100vw",
})



function App() {

  useEffect(() => {
    localInfoStore.startPolling()
    return () => {localInfoStore.stopPolling()}
  })

  return (
    <>

      <BackgroundImage src={backgroundImageStore.image} alt="" />
      <Grid>
        <div>Salut</div>
        <div>Toto</div>
        <div id="bottom-left">
          <HourComponent/>
        </div>
        <div>Popo</div>
      </Grid>
    </>

  )
}

export default observer(App)
