import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greet from './index.jsx'
// const reactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com/',
//         target:'_blank'
//     },
//     children:'click me to open google'
// }
// let createAnotherElem = (
//     <h1>This is just a try to check it works or not</h1>
// )


let createReactElement = React.createElement('p',
    {key:1},
    "This is react Original Element"
)
createRoot(document.getElementById('root')).render(

    createReactElement
)

