import React from 'react'
// import PropTypes from 'prop-types'
// import {render as rtlRender} from '@testing-library/react' // rtl = react testing library
// import {ThemeProvider} from 'emotion-theming'
// import {render} from '../../../test/calculator-test-utils.js'
import {render} from 'calculator-test-utils' // imported as if it's a node_module
import {light} from '../../themes'
// import {dark} from '../../themes'
import CalculatorDisplay from '../calculator-display'

// NOW IN THE OTHER FILE
// function render(ui, options){
//   return rtlRender(ui, {wrapper: Wrapper, options}) //merger options with wrapper
// }

// function Wrapper({children}) {
//   return <ThemeProvider theme={dark}>{children}</ThemeProvider>
// }

// Wrapper.propTypes = {
//   children: PropTypes.node
// }

test('renders', () => {
  // use renderWithProviders instead of renders, now we don't need to worry about the Wrapper OR rename render to rtlRender then call our custom one render
  // Now, as far as the test is concerned, this is just a regular render. It manages wrapping this in all of the providers for our app.
  const {container} = render(<CalculatorDisplay value="0" />, {theme: light})
  // const {container} = render(
  //   <ThemeProvider theme={dark}>
  //     <CalculatorDisplay value="0" />
  //   </ThemeProvider>,
  // )

  // rerender(<CalculatorDisplay value="1" />) // snapshot will fail if we rerender
  //container is a DOM node
  //   console.log(container.innerHTML)
  // toMatchInlineSnapshot That will take the snapshot of the dominode and serialize it into well-formatted HTML.
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      color: #1c191c;
      background: white;
    }

    <div
      class="emotion-0 emotion-1"
    >
      <div
        class="autoScalingText"
        data-testid="total"
        style="transform: scale(1,1);"
      >
        0
      </div>
    </div>
  `)
})
