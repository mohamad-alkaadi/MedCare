import React from 'react'
import './about-css/about-two.css'
import imgOne from './about-assets/aboutOne.png'
const AboutTwo = () => {
  return (
    <div className='about-two-container'>
      <div className='about-two grid-system'>
        <div className='about-two-img'>
          <img className='about-one-photo' src={imgOne}/>
        </div>
        <div className="about-two-text">
          <div className='about-two-title'>

          </div>
          <div className='about-two-para'>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutTwo