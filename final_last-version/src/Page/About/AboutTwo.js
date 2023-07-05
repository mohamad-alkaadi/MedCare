import React from 'react'
import './about-css/about-two.css'
import imgOne from './about-assets/aboutOne.png'
const AboutTwo = () => {
  return (
    <div className='about-two-container'>
      <div className='about-two aboutTwo-grid-system'>
        
        <div className="about-two-text">
          <div className='about-two-title'>
            Our Mission
          </div>
          <div className='about-two-para'>
          Our company is dedicated to improving the quality of life for the elderly by providing advanced care solutions that enable them to live independently. We leverage cutting-edge technology to monitor our clients' health and wellbeing, ensuring that they receive the attention they need whenever they need it. Our mission is to empower seniors to age with dignity and grace, knowing that they are always connected to the care and support they require to thrive.      
          </div>
        </div>
        <div className='about-two-img'>
          <img className='about-two-photo' src={imgOne}/>
        </div>
      </div>
    </div>
  )
}

export default AboutTwo


