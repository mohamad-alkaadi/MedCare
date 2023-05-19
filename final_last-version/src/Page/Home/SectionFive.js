import React from 'react'
import './home-css/sectionfive.css'
import secFive from './Home-assets/sec5.png'

const SectionFive = () => {
  return (
    <div className='sec-five-container'>
        <div className='section-five grid-system'>
            <div className='sec-five-text'>
                <div className='five-title'>
                    About us
                </div>
                <div className='five-para'>
                We are a company that provides care for elderly people who want to live independently and safely. We offer personalized services and support to meet their needs and preferences. We believe that every senior deserves dignity, respect and quality of life. Our mission is to help them stay connected, healthy and happy.
                </div>
                <button className='sec-five-button'>LEARN MORE</button>

            </div>
            <div className='sec-five-img'>
                <img className='five-img' src={secFive} draggable="false" />
            </div>
        </div>
    </div>

  )
}

export default SectionFive