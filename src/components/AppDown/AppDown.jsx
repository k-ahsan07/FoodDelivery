import React from 'react'
import './AppDown.css'
import { assets } from '../../assets/assets'

const Appdown = () => {
  return (
    <div className='app-download' id='app-download'>
    <p>For Better Experience Download
        <br />TastyTracker
    </p>
    <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
    </div>
    </div>
  )
}

export default Appdown