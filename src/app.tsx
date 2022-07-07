import { observer } from "mobx-react-lite";
import { useEffect } from "preact/hooks";
import { ApplicationButton } from "./components/applicationButton";
import HourComponent from "./components/hour";
import { applicationStore } from "./stores/applicationStore";
import { localInfoStore } from "./stores/localInfosStore";

function App() {

  useEffect(() => {
    localInfoStore.startPolling()
    return () => {localInfoStore.stopPolling()}
  })

  return (
    <>
      <HourComponent/>
      <h1>Apps</h1>
      {applicationStore.applications.map(app => <ApplicationButton application={app}/>)}
    </>

  )
}

export default observer(App)
