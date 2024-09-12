import React from 'react'
import {useEffect,useState} from "react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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




const SectionSevenNew = () => {
    const [timePeriod,setTimePeriod] = useState(false);
    const handleChange = () =>{
        setTimePeriod(!timePeriod);
    }

    const viewportWidth = useWindowSize();
  return (
    <div className='section-sevenNew-container'>
        <div className='section-seven-new secSeven-grid-system'>
            <div className='seven-new-header'>Subscription plans</div>
            <div className='seven-toggle-time'>
                    <label className='toggle-time'>Monthly</label>
                    <div className='seven-toggle-btn'>
                        <input type='checkbox' id='seven-checkbox' className='seven-checkbox' onChange={handleChange}/>
                        <label for="seven-checkbox" className='seven-sub'>
                            <div className='seven-circle'></div>
                        </label> 
                    </div>
                    <label className='toggle-time'>Annually</label>   
            </div>
        </div>
    </div>
  )
}

export default SectionSevenNew