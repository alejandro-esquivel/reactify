import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MediaContextProvider } from './providers/mediaContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MediaContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </MediaContextProvider>
)
