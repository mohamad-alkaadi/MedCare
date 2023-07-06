import React,{useEffect, useRef} from 'react'
import { useLocation } from "react-router-dom"
import ServiceOne from './ServiceOne'
import ServiceTwo from './ServiceTwo'
import ServiceThree from './ServiceThree'
import ServiceFour from './ServiceFour'
import ServiceFive from './ServiceFive'
import ServiceSix from './ServiceSix'
import ServiceSeven from './ServiceSeven'
import ServiceEight from './ServiceEight'
import BackToTop from '../../common/BackToTop'
import ServiceNew from './ServiceNew'

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div>
        {/* <ServiceOne id="service1"/> */}
        <ServiceNew/>
        <ServiceTwo id="service2"/>
        <ServiceThree id="service3"/>
        <ServiceFour id="service4"/>
        <ServiceFive id="service5"/>
        <ServiceSix id="service6"/>
        <ServiceSeven id="service7"/>
        <ServiceEight id="service8"/>
        <BackToTop/>

    </div>
  )
}

export default Services