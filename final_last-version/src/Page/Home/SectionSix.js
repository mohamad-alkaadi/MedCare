import React from 'react'
import './home-css/sectionsix.css'
const SectionSix = () => {
  return (
    <div className='section-six-container'>
        <div className='section-six grid-system'>
            <div className='sec-six-header'>Subscription plans</div>
            <div className='toggle-time'>
                <label>Annually</label>
                <div className='toggle-btn'>
                    <input type='checkbox' className='checkbox'/>
                    <label for="checkbox" className='sub'>
                        <div className='circle'></div>
                    </label>
                </div>

            </div>

            <div className='cards'>
                <div className='card-one'>
                    <div className='header'>Basic</div>
                    <div className='price'>$100</div>
                    <div className='benefits'>
                        pay less every month, but more when you need help
                    </div>
                </div>

                <div className='card-two'>
                    <div className='header'>Standard</div>
                    <div className='price'>$150</div>
                    <div className='benefits'>
                        pay a moderate amount every month, and a moderate amount when you need help

                    </div>
                </div>

                <div className='card-three'>
                    <div className='header'>Premium</div>
                    <div className='price'>$200</div>
                    <div className='benefits'>
                        pay more every month, but less or nothing when you need help
                    </div>
                        <button className='sec-six-btn'>Learn More</button>
                    </div>

            </div>
        </div>
        
    </div>
  )
}

export default SectionSix