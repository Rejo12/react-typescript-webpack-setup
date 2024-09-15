import ReactDOM from 'react-dom/client'
import { App } from './App'

const rootId: HTMLElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootId)
root.render(<App />)

// ReactDOM.render(<App />, document.getElementById("root"));
