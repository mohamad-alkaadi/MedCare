import React from 'react'
import './home-css/sectionfive.css'
const SectionFive = () => {
  return (
    <div className='sec-five-container'>
        <div className='header'>
        <h1>Our Pricing</h1>
        <div className='toggle'>
            <label>Annually</label>
            <div className='toggle-btn'>
                <input type='checkbox' id='checkbox' className='checkbox'/>
                <label for='checkbox' className='sub' id='suv'>
                    <div className='circle'></div>
                </label>
            </div>
            <label>Monthly</label>
        </div>
        </div>
        {/* cards */}
        <div className='cards'>
        <div className='card shadow'>
            <ul>
                <li className='pack'></li>
                <li id='basic' className='price bottom-bar'>
                    &dollar; 199.99
                </li>
                <li className='bottom-bar'>5600 GB Storage</li>
                <li className='bottom-bar'>2 Users Allowed</li>
                <li className='bottom-bar'>Send up to 3GB</li>
                <li>
                    <button className='btn'>Learn More</button> 
                </li>
            </ul>
        </div>
        <div className='card active'>
            <ul>
                <li className='pack'>Professional</li>
                <li id='basic' className='price bottom-bar'>
                    &dollar; 249.99
                </li>
                <li className='bottom-bar'>1TB Storage</li>
                <li className='bottom-bar'>5 Users Allowed</li>
                <li className='bottom-bar'>Send up to 10GB</li>
                <li>
                    <button className='btn'>Learn More</button> 
                </li>
                
            </ul>
        </div>
        <div className='card shadow'>
            <ul>
                <li className='pack'>Master</li>
                <li id='basic' className='price bottom-bar'>
                    &dollar; 349.99
                </li>
                <li className='bottom-bar'>2TB Storage</li>
                <li className='bottom-bar'>10 Users Allowed</li>
                <li className='bottom-bar'>Send up to 20GB</li>
                <li>
                    <button className='btn action-btn'>Learn More</button> 
                </li>
            </ul>
        </div>
    </div>
    </div>

  )
}

export default SectionFive