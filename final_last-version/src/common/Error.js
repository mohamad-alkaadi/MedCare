import React, {useEffect} from 'react'
import './css/error.css'
import {Link} from 'react-router-dom'
import errorBackground from './common-assets/error-vide.mp4'

const Error = ({hasError, setHasError}) => {
  useEffect(() => {
    setHasError(true)

    return () => {
      setHasError(false)
    }
  }, [setHasError]) 


  return (
    <div className='error-page-container'>
        <video className='error-fullScreen-video' src={errorBackground} autoPlay muted loop></video>
        <div className='error-page error-grid-system'>
          <div className='error-logo'>MedCare</div>
          <div className='error-content'>error 404</div>
          <div className='error-paraOne'>The page seems to be missing.</div>
          <div className='error-paraTwo'>Perhaps it's time to go back <Link to='/MedCare'>home</Link>?</div>
        </div>
       
    </div>
  )
}

export default Error