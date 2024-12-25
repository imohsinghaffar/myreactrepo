import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './app2.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
        <App2/>
        </BrowserRouter>
        <App/>

        {/* <UserContext>   
            <App2 />
        </UserContext> */}
    </>
)
