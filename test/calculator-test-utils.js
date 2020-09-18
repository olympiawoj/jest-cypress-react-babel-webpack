import React from 'react'
import PropTypes from 'prop-types'
import {render as rtlRender} from '@testing-library/react' // rtl = react testing library
import {ThemeProvider} from 'emotion-theming'
import * as themes from '../src/themes'

function render(ui, {theme = themes.dark, ...options} = {}){ // spread in rest of options and pluck off theme, default to dark
  function Wrapper({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider> // now people can specify a custom theme if they want to
  }
  
  Wrapper.propTypes = {
    children: PropTypes.node
  }
  
  return rtlRender(ui, {wrapper: Wrapper, ...options}) //merger options with wrapper
}


export * from '@testing-library/react' // people can use calculator-test-utils.js use like testing-library react, but the render they're going to get is one that automatically wraps all of the Providers that our app typically provides. 
// override the built-in render with our own
export {render}