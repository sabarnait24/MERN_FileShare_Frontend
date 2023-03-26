import React from 'react'
import spin from './spin.gif'

function Spinner() {
  return (
    <div>
      <img src={spin} alt='loading...'></img>
    </div>
  )
}

export default Spinner
