import React, { useRef, useState } from 'react' 
import watch from './Services-assets/smartwatch720p.mp4'
import {FaPlay} from 'react-icons/fa'
import './Services-css/srvicefour.css'
const ServiceFour = () => {
  const videoRef = useRef(null)
  const [videoClick,setVideoClick] = useState(1)
  const playVideo = () =>{
    {!videoClick?videoRef.current.play():videoRef.current.pause()}
    setVideoClick(!videoClick)
  }
  return (
    <div className='ser-four-container'>
      <div className='ser-four grid-system'>
          <div className='ser-four-title'>
          Your on-the-go helper
          </div>
          <div className='ser-four-video'>
            <video className='ser-watch-video' ref={videoRef} onClick={playVideo} src={watch} autoPlay loop preload muted/>
          </div>
          <div className='ser-four-subtext'>
          At our company, we believe that the new generation of healthcare is not
                limited by time or location. That's why we have developed a smartwatch that
                can monitor the vital signs of the elderly wherever they are. Our smartwatch
                can detect heart rate, blood pressure, oxygen saturation, and more. It can
                also alert the user and their caregivers in case of any abnormality or
                emergency. With our smartwatch, the elderly can enjoy their independence
                and peace of mind, while their loved ones can stay connected and informed.
                Our smartwatch is more than a device, it's a lifeline.
          </div>
      </div>
    </div>
  )
}

export default ServiceFour