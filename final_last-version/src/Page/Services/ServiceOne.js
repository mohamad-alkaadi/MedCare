import React,{useState,useEffect} from 'react'
import logo from './Services-assets/servicelogo.png'
// import watch from './Services-assets/last-edit-black.png'
// import dod from './Services-assets/dodo.png'
import './Services-css/serviceone.css'

const ServiceOne = () => {

  return (
    <div className='service-one-container'>
        <div className='service-one serviceOne-grid-system'>
            <div className="ser-one-text">
                <div className='ser-one-stitle'>
                    Services
                </div>
                <div className='ser-one-btitle'>
                    Healthcare, without the headaches
                </div>
            </div>
            <div className='ser-one-img'>
                <img className='ser-one-watch' src={logo} draggable="false"/>
            </div>
           

        </div>
    </div>
  )
}

export default ServiceOne