import React from 'react'
import ReactDOMServer from 'react-dom/server'
import AutoScalingText from '../auto-scaling-text'

test('renders', ()=>{
    ReactDOMServer.renderToString(<AutoScalingText/>)
})

// console.log(window) // throws A Reference because window is not defined - this proves it's running in a browser-free environment