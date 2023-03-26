import React from 'react'
import spin from './spin.gif'

function Spinner() {
  return (
    <div>
      <img src={spin} style={{height:"100px",width:"100px"}} alt='loading...'></img>
    </div>
  )
}

export default Spinner
