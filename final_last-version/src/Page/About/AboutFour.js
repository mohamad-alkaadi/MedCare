import React from 'react'
import './about-css/about-four.css'
import imgThree from './about-assets/imgThree.png'
const AboutFour = () => {
  return (
    <div className='about-four-container'>
      <div className='about-four grid-system'>
        <div className='about-four-img'>
          <img className='about-one-photo' src={imgThree}/>
        </div>
        <div className="about-four-text">
          <div className='about-four-title'>
            Our Goal
          </div>
          <div className='about-four-para'>
            we provide advanced and compassionate care to elderly individuals. We strive to enhance their quality of life by ensuring their physical, emotional, and social needs are met. Our team of highly trained professionals work closely with families and loved ones to create personalized care plans that promote independence and dignity. We are committed to fostering a safe and comfortable environment that promotes overall well-being and happiness.          
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFour