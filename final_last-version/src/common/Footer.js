import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='footer-container'>
            <div className='footer grid-system'>
                <div className='logo'>MedCare</div>
                <div className='Company-links'>
                    <div className='links-title'>Company</div>
                    <a className='footer-link' href='/'>How it works</a>
                    <a className='footer-link' href='/'>Pricing</a>
                    <a className='footer-link' href='/'>blank</a>
                </div>
                <div className='quick-links'>
                    <div className='links-title'>Quick links</div>
                    <a className='footer-link' href='/'>blank</a>
                    <a className='footer-link' href='/'>blank</a>
                    <a className='footer-link' href='/'>blank</a>
                </div>
                <div className='subscribe'>
                    <div className='links-title'>Subscribe</div>
                    <div className='subscribe-box'>
                    <input type="text" className='subscribe-input' placeholder=' Get product updates'/>
                    <button className='sub-button'>{'-->'}</button>
                    </div>
                </div>
                <div className='footer-copyright'>
                    © 2023 MedCare. All rights reserved
                </div>
                <div className='footer-social'>
                    <a className='social-icon footer-facebook' href='#'><FaFacebookF/></a>
                    <a className='social-icon footer-linkedin' href='#'><FaLinkedinIn/></a>
                    <a className='social-icon footer-twitter' href='#'><FaTwitter/></a>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Footer