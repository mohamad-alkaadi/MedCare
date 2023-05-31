import React from 'react'
import ServiceOne from './ServiceOne'
import NavBar from '../../common/NavBar'
import ServiceTwo from './ServiceTwo'
import ServiceThree from './ServiceThree'
import ServiceFour from './ServiceFour'
import ServiceFive from './ServiceFive'

const Services = () => {
  return (
    <div>
        {/* <NavBar/> */}
        <ServiceOne/>
        <ServiceTwo/>
        <ServiceThree/>
        <ServiceFour/>
        <ServiceFive/>
    </div>
  )
}

export default Services