import React, { useRef, useState } from 'react'
import './home-css/sectionone.css'
import imgOne from './Home-assets/img-1.png'

const SectionOne = () => {
  return (
    <div className='section-one-container'>
        <div className='section-one secOne-grid-system'>
          
          <img src={imgOne} draggable="false" />
          <div className='section-one-para'>
      
            <p className='one-headline'>Where<br/>healthcare<br/>happens<br/>24/7</p>
         
            <p className='one-subheadline'>The best way to protect your loved ones without<br/>worrying about wasting your time</p>
            <a className='one-button' href='#'>Sign up</a>
          </div>
        </div>
        
    </div>
  )
}

export default SectionOne


