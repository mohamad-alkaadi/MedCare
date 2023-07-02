import React from 'react'
import NavBar from '../../common/NavBar'
import './home-css/home.css'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSeven from './SectionSeven'
import SectionSix from './SectionSix'
import Footer from '../../common/Footer'
import SectionTwoNew from './SectionTwoNew'
import Hello from './Hello'
const Home = () => {
  return (
    <div className='home'>
        {/* <NavBar/> */}
        <SectionOne/>
        {/* <SectionTwo/> */}
        <SectionTwoNew/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
        {/* <Footer/> */}
        {/* <SectionOne/> */}
        {/* <Hello/> */}
    </div>
  )
}

export default Home