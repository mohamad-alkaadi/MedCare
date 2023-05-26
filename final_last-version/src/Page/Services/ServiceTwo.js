import React from 'react'
import syMap from './Services-assets/syria-map-big.png'
const ServiceTwo = () => {
  return (
    <div className='service-two-container'>
        <div className='service-two grid-system'>
            <div className="ser-two-text">
                <div className='ser-two-heading'>
                    Services
                </div>

            </div>
            <div className='ser-two-img'>
                <img className='ser-two-map' src={syMap} draggable="false"/>
            </div>
           

        </div>
    </div>
  )
}

export default ServiceTwo