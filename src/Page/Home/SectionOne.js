import React, { useRef, useState } from 'react'
import './home-css/sectionone.css'
import imgOne from './Home-assets/img-1.png'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const SectionOne = () => {
  return (
    <div className='section-one-container'>
        <div className='section-one secOne-grid-system'>
          
          <img src={imgOne} draggable="false" loading='lazy'/>
          <div className='section-one-para'>
      
            <p className='one-headline'>Where<br/>healthcare<br/>happens<br/>24/7</p>
         
            <p className='one-subheadline'>The best way to protect your loved ones without<br/>worrying about wasting your time</p>
            <Link className='one-button' to='/MedCare/signin'>Sign in</Link>
          </div>
        </div>
        
    </div>
  )
}

export default SectionOne


