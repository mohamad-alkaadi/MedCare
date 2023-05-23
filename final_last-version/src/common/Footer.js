import React,{useEffect,useState,useRef} from 'react'
import {FaArrowRight,FaFacebookF,FaLinkedinIn,FaYoutube,FaInstagram,FaTwitter} from 'react-icons/fa'
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
                <div className='footer-logo'>MedCare</div>

                <div className='footer-company-links'>
                    <div className='footer-company-title'>Company</div>
                    <div className='footer-links'><a className='footer-link footer-company-one' href='/'>How it works</a></div>
                    <div className='footer-links'><a className='footer-link footer-company-two' href='/'>Pricing</a></div>
                    <div className='footer-links'><a className='footer-link footer-company-three' href='/'>blank</a></div>
                </div>

                <div className='footer-quick-links'>
                    <div className='footer-quick-title'>Quick links</div>
                    <div className='footer-links'><a className='footer-link footer-quick-one' href='/'>blank</a></div>
                    <div className='footer-links'><a className='footer-link footer-quick-two' href='/'>blank</a></div>
                    <div className='footer-links'><a className='footer-link footer-quick-three' href='/'>blank</a></div>
                </div>
            {width>1581? 
                    <div className='footer-subscribe'>
                        <div className='subscribe-title'>Subscribe</div>
                        <div className='footer-subscribe-box'>
                            <input type="text" className='footer-subscribe-input' placeholder='Get product updates'/>
                            <button className='footer-sub-button'><FaArrowRight className='footer-arrow'/></button>
                        </div>
                    </div>
                :
                    <div className='footer-subscribe'>
                        <div class="sub-hidden field">
                            <input type="input" className="sub-hidden-input" placeholder="Subscribe" name="subscribe" id='subscribe'/>
                            <label for="subscribe" className="sub-hidden-label">Subscribe</label>
                            <button className='sub-hid-button'><FaArrowRight className='footer-arrow'/></button>
                        </div>

                    </div>}

                




                {/* <div className='footer-subscribe'>
                    <div className='subscribe-title'>Subscribe</div>
                    <div className='footer-subscribe-box'>
                        <input type="text" className='footer-subscribe-input' placeholder='Get product updates'/>
                        <button className='footer-sub-button'><FaArrowRight className='footer-arrow'/></button>
                    </div>
                </div> */}

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