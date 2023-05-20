import React, { useState,useRef,useEffect } from 'react'
import './home-css/sectionseven.css'
import {motion} from 'framer-motion'






const SectionSeven = () => {
    const [timePeriod,setTimePeriod] = useState(false);
    const handleChange = () =>{
        setTimePeriod(!timePeriod);
    }
    
    const[width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);


  return (
    <div className='section-seven-container'>
        <div className='section-seven grid-system'>
        <div className='seven-header'>Subscription plans</div>
            <div className='seven-toggle-time'>
                    <label className='toggle-time'>Monthly</label>
                    <div className='seven-toggle-btn'>
                        <input type='checkbox' id='seven-checkbox' className='seven-checkbox' onChange={handleChange}/>
                        <label for="seven-checkbox" className='seven-sub'>
                            <div className='seven-circle'></div>
                        </label> 
                    </div>
                    <label className='toggle-time'>Annually</label>   
            </div>

            <div className='seven-cards'>
                <div className='seven-normal seven-card seven-card-one'>
                    <div className='seven-card-content seven-card-header'>Basic</div>
                    <div className='seven-card-content seven-card-price'>
                        {!timePeriod?<>200.000SYP</>:<>2.200.000SYP</>}
                    </div>
                    <div className='seven-card-content seven-card-benefits'>
                        pay less every month, but more when you need help
                    </div>
                    <button className='sec-seven-btn'>Learn More</button>
                </div>

                <div className='seven-normal seven-card seven-card-two'>
                    <div className='seven-card-content seven-card-header'>Standard</div>
                    <div className='seven-card-content seven-card-price'>
                    {!timePeriod?<>250.000SYP</>:<>2.700.000SYP</>}
                    </div>
                    <div className='seven-card-content seven-card-benefits'>
                        pay a moderate amount every month, and a moderate amount when you need help
                    </div>
                    <button className='sec-seven-btn'>Learn More</button>
                </div>

                <div className='seven-normal seven-card seven-card-three'>
                    <div className='seven-card-content seven-card-header'>Premium</div>
                    <div className='seven-card-content seven-card-price'>
                    {!timePeriod?<>300.000SYP</>:<>3.000.000SYP</>}

                    </div>
                    <div className='seven-card-content seven-card-benefits'>
                        pay more every month, but less or nothing when you need help
                    </div>
                    <button className='sec-seven-btn'>Learn More</button>
                    </div>
                    {/*------------------------- slider --------------------------------*/}


            <motion.div ref={carousel} whileTap={{cursor:"grabbing"}} className='seven-carousel'>
              <motion.div drag="x" dragConstraints={{right:0,left: -width}} className='seven-inner-carousel'>
                <motion.div className='seven-slide seven-item seven-card seven-card-one'>
                    <div className='seven-card-content seven-card-header'>Basic</div>
                    <div className='seven-card-content seven-card-price'>
                        {!timePeriod?<>200.000SYP</>:<>2.200.000SYP</>}
                    </div>
                    <div className='seven-card-content seven-card-benefits'>
                        pay less every month, but more when you need help
                    </div>
                    <button className='sec-seven-btn'>Learn More</button>
                </motion.div>


                <motion.div className='seven-slide seven-item seven-card seven-card-two'>
                    <div className='seven-card-content seven-card-header'>Standard</div>
                    <div className='seven-card-content seven-card-price'>
                    {!timePeriod?<>250.000SYP</>:<>2.700.000SYP</>}
                    </div>
                    <div className='seven-card-content seven-card-benefits'>
                        pay a moderate amount every month, and a moderate amount when you need help
                    </div>
                    <button className='sec-seven-btn'>Learn More</button>
                </motion.div>
                <motion.div className='seven-slide seven-item seven-card seven-card-three'>
                <div className='seven-card-content seven-card-header'>Premium</div>
                    <div className='seven-card-content seven-card-price'>
                    {!timePeriod?<>300.000SYP</>:<>3.000.000SYP</>}

                    </div>
                    <div className='seven-card-content seven-card-benefits'>
                        pay more every month, but less or nothing when you need help
                    </div>
                    <button className='sec-seven-btn'>Learn More</button>
                </motion.div>
              </motion.div>
            </motion.div>


            </div>
        </div>
        
    </div>
  )
}

export default SectionSeven