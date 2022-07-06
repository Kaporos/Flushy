import { observer } from 'mobx-react-lite'
import { render } from 'preact'
import App from './app'
import './index.css'


const AppObserved = observer(() => {
    return <App/>
})

render( <AppObserved/>, document.getElementById('app')!)
