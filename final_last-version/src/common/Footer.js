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



const Footer = (props) => {

  const width = useWindowSize();
  const {hamActive} = props;
  const {appViewportWidth} = props
  return (
    <>
    {hamActive || appViewportWidth>800?
    <div>
        <div className='footer-container'>
            <div className='footer footer-grid-system'>
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
        :null}
      </>
  )
}

export default Footer

