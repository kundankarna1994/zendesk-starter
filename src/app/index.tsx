import ReactDOM from 'react-dom/client'
import App from './App.js'
import { ClientProvider } from './contexts/ClientProvider.js'
import '@zendeskgarden/css-bedrock'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ClientProvider>
        <App />
    </ClientProvider>
)
