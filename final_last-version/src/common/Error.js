import React from 'react'
import './css/error.css'
import errorBackground from './common-assets/error-vide.mp4'
const Error = () => {
  return (
    <div className='error-page-container'>
        <video className='error-fullScreen-video' src={errorBackground} autoPlay muted loop></video>

        <p className='error-text'>Erro sdjkshdrsda</p>
    </div>
  )
}

export default Error