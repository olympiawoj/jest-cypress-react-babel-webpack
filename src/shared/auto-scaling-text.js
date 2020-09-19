import React from 'react'
import PropTypes from 'prop-types'
import styles from './auto-scaling-text.module.css'

console.log(styles)

function getScale(node) {
  debugger
  console.log(node)
  if (!node) {
  console.log('in here')
    return 1
  }
  console.log('not in there')

  const parentNode = node.parentNode

  const availableWidth = parentNode.offsetWidth
  const actualWidth = node.offsetWidth
  const actualScale = availableWidth / actualWidth

  if (actualScale < 1) {
    return actualScale * 0.9
  }
  return 1
}

function AutoScalingText({children}) {
  const nodeRef = React.useRef()
  const scale = getScale(nodeRef.current)
  return (
    <div
      className={styles.autoScalingText} // className is undefined bc there's no styles, but what if we had some way to get auto scaling text to appear as className even tho at build time webpack is going to generate some generated className.
      style={{transform: `scale(${scale},${scale})`}}
      ref={nodeRef}
      data-testid="total"
    >
      {children}
    </div>
  )
}
AutoScalingText.propTypes = {
  children: PropTypes.node,
}

export default AutoScalingText
