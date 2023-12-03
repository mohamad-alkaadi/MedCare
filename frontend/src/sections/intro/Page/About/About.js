import React,{useEffect} from 'react'
import { useLocation } from "react-router-dom"
import AboutOne from './AboutOne'
import AboutTwo from './AboutTwo'
import AboutThree from './AboutThree'
import AboutFour from './AboutFour'
import AboutNew from './AboutNew'
import BackToTop from '../../common/BackToTop'

const About = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const {hamActive} = props
  const {appViewportWidth} = props

  return (
    <>
    {hamActive || appViewportWidth>800?
      <div>
        <AboutNew/>
        {/* <AboutOne/> */}
        <AboutTwo/>
        <AboutThree/>
        <AboutFour/>
        <BackToTop/>
      </div>
      :null}
    </>
  )
}

export default About