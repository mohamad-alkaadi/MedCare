import React,{useState,useEffect} from 'react'
import "./css/navbar.css"
import {links } from './Data/navbar_data'
import { Link, useMatch, useResolvedPath } from "react-router-dom"



function NavBar(props) { 
  const {hamMenuActive, hamClicked, closeNavBar} = props;

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)
  const changeBackground = ()=>{
      console.log(window.scrollY);
      if(window.scrollY>=75){
          setNavbar(true);
      }else{
          setNavbar(false);
      }
  }

  useEffect(()=>{
      changeBackground();
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
  },[])



    return (
       <>
       <div className='nav-container'>
        <div className='navigation navBar-grid-system'>
                    <Link to="/MedCare" className='headerlogo'>MedCare</Link>
                    <nav className='nav-sec'>
                        {links.map((link) => {
                        const {url,text} = link;
                        return <CustomLink className="navbar-custom-link" to={url}>{text}</CustomLink>
                        })}
                        {/* <a href='#' className='s-up-button'>Sign up</a> */}
                        <CustomLink to='/MedCare/signin' id='s-in-button'>Sign in</CustomLink>      
                    </nav>
                    

                    {/*----------------------------  */}

                    <nav className="mob-nav-sec">
                         
                            <input className="nav-checkbox" onClick={hamClicked} type="checkbox" name="" id=""/>
                            <div className="hamburger-lines">
                              <span className="line line1"></span>
                              <span className="line line2"></span>
                              <span className="line line3"></span>
                            </div>  
                          
                          <div className="menu-items">
                              <CustomLink to='/MedCare' id='menu-item' className='mob-headerlogo' onClick={closeNavBar} >MedCare</CustomLink>
                              <CustomLink to='/MedCare' id='menu-item' className="mobMenu-item-nav" onClick={closeNavBar}>Home</CustomLink>
                              <CustomLink to='/MedCare/about' id='menu-item' className="mobMenu-item-nav" onClick={closeNavBar}>About</CustomLink>
                              <CustomLink to='/MedCare/services' id='menu-item' className="mobMenu-item-nav" onClick={closeNavBar}>Services</CustomLink>
                              {/* <a id='menu-item' href="#">Sign in</a> */}
                              <CustomLink to='/MedCare/signin' id='menu-item' className="mobMenu-item-nav" onClick={closeNavBar}>Sign in</CustomLink>
                          </div>
                    </nav>
                    {/* <p className='mob-headerlogo'>MedCare</p> */}
 
        </div>
       </div>
       </>
     )
   }

   function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
        <Link to={to} {...props}>
          {children}
        </Link>
    )
  }
  
export default NavBar