import React from 'react'
import imgTwo from './about-assets/aboutTwo.png'
import './about-css/about-three.css'
const AboutThree = () => {
  return (
    <div className='about-three-container'>
      <div className='about-three grid-system'>
        <div className="about-three-text">
          <div className='about-three-title'>
            Our Mission
          </div>
          <div className='about-three-para'>
            we provide advanced and compassionate care to elderly individuals. We strive to enhance their quality of life by ensuring their physical, emotional, and social needs are met. Our team of highly trained professionals work closely with families and loved ones to create personalized care plans that promote independence and dignity. We are committed to fostering a safe and comfortable environment that promotes overall well-being and happiness.          
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