// 1) Import what we are testing
import {getFormattedValue} from '../utils'

// 2) Describe what we are testing
test('formats the value', ()=>{
    // 3) Assertion
    expect(getFormattedValue('1234.0')).toBe('1,234.0')
})


// console.log(window)

