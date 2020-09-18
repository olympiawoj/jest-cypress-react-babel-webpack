import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import AutoScalingText from './auto-scaling-text'
import {getFormattedValue} from './utils'

const DisplayContainer = styled.div(
  {
    position: 'relative',
    lineHeight: '130px',
    fontSize: '6em',
    flex: '1',
  },
  // determines the color based on the theme - now users can change the theme/way the calculator looks and thats great, however our tests need to change, bc the Calculator display is being rendered in total isolation, which is what we want, except it's being rendered in solation from the ThemeProvider which is required so with these changes, if I run npm t, we get a failed snapshot.
  ({theme}) => ({
    color: theme.displayTextColor,
    background: theme.displayBackgroundColor,
  }),
)

function CalculatorDisplay({value, ...props}) {
  const formattedValue = getFormattedValue(
    value,
    typeof window === 'undefined' ? 'en-US' : window.navigator.language,
  )

  return (
    <DisplayContainer {...props}>
      <AutoScalingText>{formattedValue}</AutoScalingText>
    </DisplayContainer>
  )
}

CalculatorDisplay.propTypes = {
  value: PropTypes.string.isRequired,
}

export default CalculatorDisplay
