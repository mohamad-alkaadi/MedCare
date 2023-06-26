import React from 'react'
import './about-css/about-one.css'
import logo from './about-assets/helthlogo.png'
const AboutOne = () => {
  return (
    <div className='about-one-container'>
    <div className='about-one grid-system'>
        <div className="abo-one-text">
            <div className='abo-one-stitle'>
                About us
            </div>
            <div className='abo-one-btitle'>
                Healthcare, without the headaches
            </div>
        </div>
        <div className='abo-one-img'>
            <img className='abo-one-watch' src={logo} draggable="false"/>
        </div>
       

    </div>
</div>
  )
}

export default AboutOne