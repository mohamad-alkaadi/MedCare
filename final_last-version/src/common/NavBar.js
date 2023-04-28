
import React from 'react'
import "./css/navbar.css"
import {links} from './Data/navbar_data'

function NavBar() { 
    return (
       <>
       <div className='nav-container'>
        <div className='navigation grid-system'>
                    <p className='headerlogo'>MedCare</p>
                    <nav className='nav-sec'>
                        {links.map((link) => {
                        const {url,text} = link;
                        return <a href={url}>{text}</a>
                        })}
                        <a href='#' className='s-in-button'>Sign in</a>
                        <a href='#' id='s-up-button'>Sign up</a>      
                    </nav>
                    {/*----------------------------  */}

                    <nav className="mob-nav-sec">
                         
                            <input className="checkbox" type="checkbox" name="" id="" />
                            <div className="hamburger-lines">
                              <span className="line line1"></span>
                              <span className="line line2"></span>
                              <span className="line line3"></span>
                            </div>  
                            
                          <div className="menu-items">
                              <a id='menu-item' className='mob-headerlogo' href="#">MedCare</a>
                              <a id='menu-item' href="#">Home</a>
                              <a id='menu-item' href="#">About</a>
                              <a id='menu-item' href="#">Services</a>
                              <a id='menu-item' href="#">Sign in</a>
                              <a id='menu-item' href="#">Sign up</a>
                          </div>                        
                    </nav>
                    {/* <p className='mob-headerlogo'>MedCare</p> */}
 
        </div>
       </div>
       </>
     )
   }

export default NavBar