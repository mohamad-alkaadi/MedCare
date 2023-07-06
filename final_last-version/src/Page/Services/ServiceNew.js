import React from 'react'
import './Services-css/servicenew.css'
import doctor from './Services-assets/doctor-img.png'
const ServiceNew = () => {
  return (
    <div className='service-new-container'>
    <div className='service-new serviceNew-grid-system'>
      
      <img src={doctor} draggable="false" />
      <div className='service-new-para'>
  
      <div className='ser-new-stitle'>Services us</div>
      <div className='ser-new-btitle'>                    
        Healthcare, without the headaches
        </div>
    </div>
        </div>
    </div>
  )
}

export default ServiceNew