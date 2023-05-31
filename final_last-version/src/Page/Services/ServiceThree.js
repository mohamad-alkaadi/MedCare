import React from 'react'
import './Services-css/servicethree.css'
import watch from './Services-assets/last-edit-black.png'
const ServiceThree = () => {
  return (
    <div className='ser-three-container'>
        <div className='ser-three grid-system'>
            <div className='sec-three-text'>
                <div className='ser-three-title'>
                The ultimate solution for your health needs
                </div>
                <div className='ser-three-para'>
                At our company, we believe that the new generation of healthcare is not
                limited by time or location. That's why we have developed a smartwatch that
                can monitor the vital signs of the elderly wherever they are. Our smartwatch
                can detect heart rate, blood pressure, oxygen saturation, and more. It can
                also alert the user and their caregivers in case of any abnormality or
                emergency. With our smartwatch, the elderly can enjoy their independence
                and peace of mind, while their loved ones can stay connected and informed.
                Our smartwatch is more than a device, it's a lifeline.
                </div>
            </div>
            <div className='service-three-img'>
                <img className='ser-three-img' src={watch} draggable="false" />
            </div>
        </div>
    </div>
  )
}

export default ServiceThree