import React from 'react'
import './Services-css/servicefive.css'
import access from './Services-assets/access.png'
import coverage from './Services-assets/coverage.png'
import doctor from './Services-assets/doctor.png'
import reminder from './Services-assets/reminder.png'
import status from './Services-assets/status.png'
import visit from './Services-assets/visit.png'
const ServiceFive = () => {
  return (
    <div className='ser-five-container'>
      <div className='ser-five grid-system'>
          <div className='ser-five-title'>
              Why MedCare is right for you
          </div>

          <div className='ser-five-right five-right-pone'>
            <div className='five-right five-right-one'>
                <div className='five-right-img'>
                    <img src={access}/>
                </div>
                <div className='five-right-title'>
                    24/7 access to patient record
                </div>
                <div className='five-right-para'>
                View health data anytime with our secure online platform.                
                </div>
            </div>

            <div className='five-right five-right-two'>
                <div className='five-right-img'>
                    <img src={status}/>
                </div>
                <div className='five-right-title'>
                    24/7 online patent status view
                </div>
                <div className='five-right-para'>
                View your patent status anytime on our website with real-time data.                </div>
            </div>

            <div className='five-right five-right-three'>
                <div className='five-right-img'>
                    <img src={visit}/>
                </div>
                <div className='five-right-title'>
                    easily book appointments with our partners                
                </div>
                <div className='five-right-para'>
                    Our service lets you schedule visits with health experts in a few clicks.                </div>
            </div>
            </div>

          <div className='ser-five-right five-right-ptwo'>
            <div className='five-right five-right-four'>
                <div className='five-right-img'>
                    <img src={coverage}/>
                </div>
                <div className='five-right-title'>
                coverage when you need it                
                 </div>
                <div className='five-right-para'>
                our medical team is on call 24/7 via phone, email, and our app so you can leave the after-hour calls to us
                </div>
            </div>

            <div className='five-right five-right-five'>
                <div className='five-right-img'>
                    <img src={doctor}/>
                </div>
                <div className='five-right-title'>
                    doctor on your hand
                </div>
                <div className='five-right-para'>
                we monitor your health and provide medical advice based on your symptoms and data.
                </div>
            </div>

            <div className='five-right five-right-six'>
                <div className='five-right-img'>
                    <img src={reminder}/>
                </div>
                <div className='five-right-title'>
                    appointment and medicine reminder
                </div>
                <div className='five-right-para'>
                    We Help you stay on track with appointments and medications using our smartwatch
                </div>
            </div>
            </div>
          </div>
      </div>
  )
}

export default ServiceFive