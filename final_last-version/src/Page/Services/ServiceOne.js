import React,{useState,useEffect} from 'react'
import watch from './Services-assets/smartwatch.png'
import './Services-css/serviceone.css'
const ServiceOne = () => {

  return (
    <div className='service-one-container'>
        <div className='service-one grid-system'>
            <div className="ser-one-text">
                <div className='ser-one-stitle'>
                    Services
                </div>
                <div className='ser-one-btitle'>
                    Healthcare, without the headaches
                </div>
            </div>
            <div className='ser-one-img'>
                <img className='ser-one-watch' src={watch} draggable="false"/>
            </div>
           

        </div>
    </div>
  )
}

export default ServiceOne