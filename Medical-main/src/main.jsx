import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './header/Header.jsx'
import Footer from './header/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <App />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
)
