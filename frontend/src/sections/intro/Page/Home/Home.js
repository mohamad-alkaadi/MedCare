import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import NavBar from "../../common/NavBar"
import "./home-css/home.css"
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionThree from "./SectionThree"
import SectionFour from "./SectionFour"
import SectionFive from "./SectionFive"
import SectionSeven from "./SectionSeven"
import SectionSix from "./SectionSix"
import Footer from "../../common/Footer"
import SectionTwoNew from "./SectionTwoNew"
import Hello from "./Hello"
import BackToTop from "../../common/BackToTop"

const Home = (props) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const { hamActive } = props
  const { appViewportWidth } = props

  return (
    <>
      {hamActive || appViewportWidth > 800 ? (
        <div className="home">
          <SectionOne />
          {/* <SectionTwoNew /> */}
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          {/* <SectionSeven /> */}
          <BackToTop />
        </div>
      ) : null}
    </>
  )
}

export default Home
