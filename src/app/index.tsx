import ReactDOM from 'react-dom/client'
import App from './App.js'
import '@zendeskgarden/css-bedrock'
import './index.css'
import { ClientProvider } from '@/providers/ClientProvider.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ClientProvider>
    <App />
  </ClientProvider>
)
