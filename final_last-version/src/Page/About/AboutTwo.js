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
            Our Mission
          </div>
          <div className='about-two-para'>
            we provide advanced and compassionate care to elderly individuals. We strive to enhance their quality of life by ensuring their physical, emotional, and social needs are met. Our team of highly trained professionals work closely with families and loved ones to create personalized care plans that promote independence and dignity. We are committed to fostering a safe and comfortable environment that promotes overall well-being and happiness.          
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTwo