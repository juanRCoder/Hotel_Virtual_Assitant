import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import Dashboard from './components/Dashboard.jsx'
import Header from './components/Header/Header.jsx'
import Main from './components/Body/Body.jsx'
import Layout from './Layout/Layout.jsx'
=======
import App from './App'
>>>>>>> frontend
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <App/>
   </BrowserRouter>
  </React.StrictMode>,
)
