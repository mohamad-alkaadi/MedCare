import React from 'react'
import imgTwo from './about-assets/aboutTwo.png'
import './about-css/about-three.css'
const AboutThree = () => {
  return (
    <div className='about-three-container'>
      <div className='about-three grid-system'>
        <div className="about-three-text">
          <div className='about-three-title'>
            Our Story
          </div>
          <div className='about-three-para'>
            At our company, we care about the well-being and happiness of the elderly. We know that they deserve to live with dignity, independence and peace of mind. That's why we offer a service that allows them to stay connected with their loved ones and their health professionals, wherever they are.
          </div>
        </div>
        <div className='about-three-img'>
          <img className='about-one-photo' src={imgTwo}/>
        </div>
      </div>

    </div>
  )
}

export default AboutThree