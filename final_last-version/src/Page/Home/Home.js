import React from 'react'
import NavBar from '../../common/NavBar'
import './home-css/home.css'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'

const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionOne/>
    </div>
  )
}

export default Home