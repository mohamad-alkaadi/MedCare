import React,{useEffect,useState,useRef} from 'react'
import {FaArrowRight,FaFacebookF,FaLinkedinIn,FaYoutube,FaInstagram,FaTwitter,FaHome,FaBuilding,FaPhone} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import './css/footer.css'

function useWindowSize(){
    const [size,setSize]=useState(window.innerWidth);
    useEffect(()=>{
      const handleResize = () => {
      setSize(window.innerWidth);
      };
      window.addEventListener('resize',handleResize);
    },[]);
    return size;
  }



const Footer = () => {

  const width = useWindowSize();

  return (
    <div>
        <div className='footer-container'>
            <div className='footer grid-system'>
                <div className='footer-logo'><p>MedCare</p></div>

                <div className='footer-company-links'>
                    <div className='footer-company-title'>Company</div>
                    <div className='footer-links'><a className='footer-link footer-company-one' href='/'>How it works</a></div>
                    <div className='footer-links'><a className='footer-link footer-company-two' href='/'>Our app</a></div>
                    <div className='footer-links'><a className='footer-link footer-company-three' href='/'>Our values</a></div>
                </div>

                <div className='footer-quick-links'>
                    <div className='footer-quick-title'>Quick links</div>
                    <div className='footer-links'><a className='footer-link footer-quick-one' href='/'>Pricing</a></div>
                    <div className='footer-links'><a className='footer-link footer-quick-two' href='/'>using the watch</a></div>
                    <div className='footer-links'><a className='footer-link footer-quick-three' href='/'>blank</a></div>
                </div>
                <div className='footer-contact-us'>
                    <div className='footer-contact-title'>Contact us</div>                    
                    <div className='footer-contact'><FaBuilding className='contact-icon'/><a>SY, Damascous</a></div>
                    <div className='footer-contact'><GrMail className='contact-icon'/><a href='mailto: medcareofficial@outlook.com'>medcareofficial@outlook.com</a></div>
                    <div className='footer-contact'><FaPhone className='contact-icon'/><a href='tel:+963112233444'>+963 11 22334444</a></div>
                </div>


                <div className='footer-copyright'>
                    © 2023 MedCare. All rights reserved
                </div>
                <div className='footer-social'>
                    <a className='social-icon footer-facebook' href='#'><FaFacebookF className='footer-social-icon'/></a>
                    <a className='social-icon footer-linkedin' href='#'><FaLinkedinIn className='footer-social-icon'/></a>
                    <a className='social-icon footer-twitter' href='#'><FaTwitter className='footer-social-icon'/></a>
                    <a className='social-icon footer-twitter' href='#'><FaYoutube className='footer-social-icon'/></a>
                    <a className='social-icon footer-twitter' href='#'><FaInstagram className='footer-social-icon'/></a>
               </div>
            </div>
        </div>
        </div>
  )
}

export default Footer



// import React from 'react'
// import {FaArrowRight,FaFacebookF,FaLinkedinIn,FaTwitter} from 'react-icons/fa'
// import './css/footer.css'
// const Footer = () => {
//   return (
    // <div>
        {/* <div className='footer-container'> */}
            {/* <div className='footer grid-system'> */}
                {/* <div className='footer-logo'>MedCare</div> */}
                {/* <div className='footer-company-links'> */}
                    {/* <div className='footer-links-title'>Company</div> */}
                    {/* <a className='footer-link' href='/'>How it works</a> */}
                    {/* <a className='footer-link' href='/'>Pricing</a> */}
                    {/* <a className='footer-link' href='/'>blank</a> */}
                {/* </div> */}
                {/* <div className='footer-quick-links'> */}
                    {/* <div className='footer-links-title'>Quick links</div> */}
                    {/* <a className='footer-link' href='/'>blank</a> */}
                    {/* <a className='footer-link' href='/'>blank</a> */}
                    {/* <a className='footer-link' href='/'>blank</a> */}
                {/* </div> */}
{/*  */}
                {/* <div className='footer-subscribe'> */}
                    {/* <div className='links-title'>Subscribe</div> */}
                    {/* <div className='subscribe-box'> */}
                    {/* <input type="text" className='subscribe-input' placeholder=' Get product updates'/> */}
                    {/* <button className='sub-button'><FaArrowRight/></button> */}
                    {/* </div> */}
                {/* </div> */}
{/*  */}
                {/* <div className='footer-copyright'> */}
                    {/* © 2023 MedCare. All rights reserved */}
                {/* </div> */}
                {/* <div className='footer-social'> */}
                    {/* <a className='social-icon footer-facebook' href='#'><FaFacebookF/></a> */}
                    {/* <a className='social-icon footer-linkedin' href='#'><FaLinkedinIn/></a> */}
                    {/* <a className='social-icon footer-twitter' href='#'><FaTwitter/></a> */}
               {/* </div> */}
            {/* </div> */}
        {/* </div> */}
    {/* </div> */}
//   )
// }
// 
// export default Footer