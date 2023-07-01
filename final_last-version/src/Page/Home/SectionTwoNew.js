import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './home-css/sectiontwonew.css'
import quality1 from './Home-assets/quality1.png'
import integrity from './Home-assets/integrity.png'
import experience2 from './Home-assets/Experience2.png'
import {useEffect,useState} from "react"

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

  
const SectionTwoNew = () => {
    const viewportWidth = useWindowSize();
  return (
    <div className='section-two-containerNew'>
        <div className='section-twoNew secTwoNew-grid-system'>
          <p className='two-headlineNew'>Our Mission</p>     
          <p className='two-subheadlineNew'>At our company, we are committed to serving and enriching the holistic wellness of older adults. We do that {viewportWidth>1030 ? <br/>:null}by providing them with a wearable device that monitors their health and safety, and connects them with {viewportWidth>1030 ? <br/>:null}their loved ones and caregivers. Our mission is to erase boundaries and empower older adults to live life to {viewportWidth>1030 ? <br/>:null}the fullest.</p>
        </div>

        {viewportWidth>975?
        <div className='section-twoNew secTwoNew-grid-system'>
        <div className='mission-cardNew card1New'>
                <img className='card-imgNew card-img-oneNew' src={quality1}/>
                <p className='card-headingNew'>Quality</p>
                <p className='card-subheadingNew'>We provide quality<br/>care for elderly people<br/>with innovative technology<br/>that monitors their<br/>health and safety<br/>24/7</p>
            </div>
            <div className='mission-cardNew card2New'>
                <img className='card-imgNew card-img-twoNew' src={integrity}/>
                <p className='card-headingNew'>Integrity</p>
                <p className='card-subheadingNew'>We value integrity as the<br/>foundation of our service.<br/>We respect and protect<br/>the dignity and well<br/>being of our<br/> clients.</p>
            </div>
            <div className='mission-cardNew card3New'>
                <img className='card-imgNew card-img-threeNew' src={experience2}/>
                <p className='card-headingNew'>Experience</p>
                <p className='card-subheadingNew'>We provide personalized<br/>care for elderly people<br/>using advanced<br/>technology that monitors<br/>their health and well<br/>being.</p>
            </div>
        </div>:null}

        {viewportWidth<975?
        
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={2}
          breakpoints={{
            1: { slidesPerView: 1, spaceBetween: 1 },
            555: { slidesPerView: 2, spaceBetween: 1 },
            880: { slidesPerView: 3, spaceBetween: 1 },

          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
            >
          <SwiperSlide>
          <div className='mission-cardNew card1New'>
                    <img className='card-imgNew card-img-oneNew' src={quality1}/>
                    <p className='card-headingNew'>Quality</p>
                    <p className='card-subheadingNew'>We provide quality<br/>care for elderly people<br/>with innovative technology<br/>that monitors their<br/>health and safety<br/>24/7</p>
                </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='mission-cardNew card2New'>
                    <img className='card-imgNew card-img-twoNew' src={integrity}/>
                    <p className='card-headingNew'>Integrity</p>
                    <p className='card-subheadingNew'>We value integrity as the<br/>foundation of our service.<br/>We respect and protect<br/>the dignity and well<br/>being of our<br/> clients.</p>
                </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='mission-cardNew card3New'>
                    <img className='card-imgNew card-img-threeNew' src={experience2}/>
                    <p className='card-headingNew'>Experience</p>
                    <p className='card-subheadingNew'>We provide personalized<br/>care for elderly people<br/>using advanced<br/>technology that monitors<br/>their health and well<br/>being.</p>
                </div>
          </SwiperSlide>
          
        </Swiper>:null}
        </div>
  )
}

export default SectionTwoNew






