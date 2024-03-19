import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NewsProvider from './context/NewsProvider.jsx'

import { BrowserRouter } from 'react-router-dom'; 
ReactDOM.createRoot(document.getElementById('root')).render(
  <NewsProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </NewsProvider>
)
