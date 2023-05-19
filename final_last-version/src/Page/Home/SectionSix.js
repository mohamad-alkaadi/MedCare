import React, { useState } from 'react'
import './home-css/sectionsix.css'
const SectionSix = () => {
    const [timePeriod,setTimePeriod] = useState(false);
    const handleChange = () =>{
        setTimePeriod(!timePeriod);
    }
  return (
    <div className='section-six-container'>
        <div className='section-six grid-system'>
        <div className='six-header'>Subscription plans</div>
            <div className='six-toggle-time'>
                    <label className='toggle-time'>Monthly</label>
                    <div className='six-toggle-btn'>
                        <input type='checkbox' id='six-checkbox' className='six-checkbox' onChange={handleChange}/>
                        <label for="six-checkbox" className='six-sub'>
                            <div className='six-circle'></div>
                        </label> 
                    </div>
                    <label className='toggle-time'>Annually</label>   
            </div>

            <div className='six-cards'>
                <div className='six-card six-card-one'>
                    <div className='six-card-content six-card-header'>Basic</div>
                    <div className='six-card-content six-card-price'>
                        {!timePeriod?<>200.000SYP</>:<>2.200.000SYP</>}
                    </div>
                    <div className='six-card-content six-card-benefits'>
                        pay less every month, but more when you need help
                    </div>
                    <button className='sec-six-btn'>Learn More</button>
                </div>

                <div className='six-card six-card-two'>
                    <div className='six-card-content six-card-header'>Standard</div>
                    <div className='six-card-content six-card-price'>
                    {!timePeriod?<>250.000SYP</>:<>2.700.000SYP</>}
                    </div>
                    <div className='six-card-content six-card-benefits'>
                        pay a moderate amount every month, and a moderate amount when you need help
                    </div>
                    <button className='sec-six-btn'>Learn More</button>
                </div>

                <div className='six-card six-card-three'>
                    <div className='six-card-content six-card-header'>Premium</div>
                    <div className='six-card-content six-card-price'>
                    {!timePeriod?<>300.000SYP</>:<>3.000.000SYP</>}

                    </div>
                    <div className='six-card-content six-card-benefits'>
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