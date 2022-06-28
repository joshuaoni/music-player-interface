import React from 'react'
import './control-panel.css'

function ControlPanel({ play, isPlaying, duration  }) {

  return (
    <div className='control-panel'>
      <div className='timer'>00m 00s</div>
      <div className='btn-container'>
        <div 
          onClick={()=>{
            if (duration!=='') {
              play()
            }
          }}
          className={isPlaying ? 'btn-stop' : 'btn-play'}
        ></div>
      </div>
      <div className='pimer'>{duration === '' ? '--:--' : duration}</div>
    </div>
  )
}
export default ControlPanel
