import React from 'react'
import AboutGirl from './about-assets/AboutUsGirl.png'
import aboutGirlGray from './about-assets/AboutUsGirlGray.png'
import './about-css/about-new.css'
function AboutNew() {
  return (
    <div className='about-new-container'>
    <div className='about-new aboutNew-grid-system'>
      
      <img src={aboutGirlGray} draggable="false" />
      <div className='section-one-para'>
  
      <div className='abo-new-stitle'>About us</div>
      <div className='abo-new-btitle'>Changing Healthcare for Good</div>
      </div>
    </div>
    
</div>







  )
}

export default AboutNew