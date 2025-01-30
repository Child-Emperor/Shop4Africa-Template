import React from 'react'

function CircleButton({children}) {
  return (
    <a href='#' className="text-decoration-none rounded-circle" style={{height:'46px',width:'46px'}}>{children}</a>
  )
}

export default CircleButton