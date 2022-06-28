import React from 'react'
import './slider.css'
import './thumb.css'

function Slider({songs}) {

  return (
    <div className='slider-container'>
      <div
        className='progress-bar-cover'
      ></div>
      <div
        className='thumb'
        
      ></div>
      <input
        type='range'
        className='range'
      />
    </div>
  )
}

export default Slider
