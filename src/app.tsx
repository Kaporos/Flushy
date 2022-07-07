import { observer } from "mobx-react-lite";
import { useEffect } from "preact/hooks";
import { ApplicationButton } from "./components/applicationButton";
import HourComponent from "./components/hour";
import { styled } from "./stitches.config";
import { applicationStore } from "./stores/applicationStore";
import { localInfoStore } from "./stores/localInfosStore";


const FlexBox = styled("div", {
  display: "flex"
})

function App() {

  useEffect(() => {
    localInfoStore.startPolling()
    return () => {localInfoStore.stopPolling()}
  })

  return (
    <>
      <HourComponent/>
      <h1>Apps</h1>
      <FlexBox>
      {applicationStore.applications.map(app => <ApplicationButton application={app}/>)}

      </FlexBox>
    </>

  )
}

export default observer(App)
