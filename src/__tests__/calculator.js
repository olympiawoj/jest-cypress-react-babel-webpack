// import * as jestDOM from '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect' // does expect.extend(jestDOM) below for us - but dont want to import this in every file either
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Calculator from '../calculator'

// expect.extend(jestDOM) // jestDOM object is a bunch of jest extensions, adds new assertions for us

test('the clear button switches from AC to C when there is an entry', ()=>{
    const {getByText} = render(<Calculator/>)
    const clearButton = getByText('AC')

    fireEvent.click(getByText(/3/))
    expect(clearButton).toHaveTextContent('C')
    fireEvent.click(clearButton)
    expect(clearButton).toHaveTextContent('AC')
})


