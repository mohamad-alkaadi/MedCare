import React,{useEffect} from 'react'
import { useLocation } from "react-router-dom"
import AboutOne from './AboutOne'
import AboutTwo from './AboutTwo'
import AboutThree from './AboutThree'
import AboutFour from './AboutFour'
import AboutNew from './AboutNew'
import BackToTop from '../../common/BackToTop'

const About = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <AboutNew/>
      {/* <AboutOne/> */}
      <AboutTwo/>
      <AboutThree/>
      <AboutFour/>
      <BackToTop/>
    </div>
  )
}

export default About