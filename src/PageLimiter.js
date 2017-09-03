import React from 'react'

const PageLimiter = props => (
  <div
    {...props}
    style={{
      width: '96%',
      margin: '0 auto',
      maxWidth: '960px',
      ...props.style
    }}
  >
    {props.children}
  </div>
)

export default PageLimiter
