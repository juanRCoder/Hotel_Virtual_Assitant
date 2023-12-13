import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Dashboard from './components/Dashboard.jsx'
import Header from './components/Header/Header.jsx'
import Main from './components/Body/Body.jsx'
import Layout from './Layout/Layout.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Layout/>
   </BrowserRouter>
  </React.StrictMode>,
)
