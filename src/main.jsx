import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

Modal.setAppElement('#root');
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
