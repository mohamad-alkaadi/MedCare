import React from 'react'
import NavBar from '../../common/NavBar'
import './home-css/home.css'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import SectionSeven from './SectionSeven'

const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSeven/>
        <SectionSix/>
        <SectionOne/>
        
    </div>
  )
}

export default Home