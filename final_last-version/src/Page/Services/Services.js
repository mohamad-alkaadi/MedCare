import React from 'react'
import ServiceOne from './ServiceOne'
import NavBar from '../../common/NavBar'
import ServiceTwo from './ServiceTwo'
import ServiceThree from './ServiceThree'

const Services = () => {
  return (
    <div>
        {/* <NavBar/> */}
        <ServiceOne/>
        <ServiceTwo/>
        <ServiceThree/>
    </div>
  )
}

export default Services