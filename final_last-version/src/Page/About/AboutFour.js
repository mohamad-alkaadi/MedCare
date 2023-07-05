import React from 'react'
import './about-css/about-four.css'
import imgThree from './about-assets/imgThree.png'
const AboutFour = () => {
  return (
    <div className='about-four-container'>
      <div className='about-four aboutFour-grid-system'>
        
        <div className="about-four-text">
          <div className='about-four-title'>
          Our Goal
          </div>
          <div className='about-four-para'>
          Our goal is to provide the best care for the elderly in a convenient and advanced way. We understand that seniors have different needs and preferences, and we respect their independence and dignity. That's why we offer a service that allows them to stay connected with their loved ones and health professionals wherever they are, using a device that is easy to use and discreet. Our service monitors their well-being and alerts them and their caregivers in case of any issues, so they can enjoy their life with peace of mind.
          </div>
        </div>
        <div className='about-four-img'>
          <img className='about-four-photo' src={imgThree}/>
        </div>
      </div>
    </div>
  )
}

export default AboutFour
