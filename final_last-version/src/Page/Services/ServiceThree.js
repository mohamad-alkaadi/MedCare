import React from 'react'
import './Services-css/servicethree.css'
import watch from './Services-assets/smartwatch.png'
const ServiceThree = () => {
  return (
    <div className='ser-three-container'>
    <div className='service-three grid-system'>
        <div className='service-three-text'>
            <div className='ser-three-title'>
                About us
            </div>
            <div className='ser-three-para'>
            We are a company that provides care for elderly people who want to live independently and safely. We offer personalized services and support to meet their needs and preferences. We believe that every senior deserves dignity, respect and quality of life. Our mission is to help them stay connected, healthy and happy.
            </div>
            <button className='ser-three-button'>LEARN MORE</button>

        </div>
        <div className='service-three-img'>
            <img className='ser-three-img' src={watch} draggable="false" />
        </div>
    </div>
</div>
  )
}

export default ServiceThree