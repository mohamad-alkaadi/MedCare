import React, { useState,useRef,useEffect } from 'react'
import './home-css/sectionseven.css'
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';
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


const SectionSeven = () => {
    const viewportWidth = useWindowSize();

    const [timePeriod,setTimePeriod] = useState(false);
    const handleChange = () =>{
        setTimePeriod(!timePeriod);
    }
    
  return (
    <div className='section-seven-container'>
        <div className='section-seven secSeven-grid-system'>
        <div className='seven-header'>Subscription plans</div>
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
            {viewportWidth>1401?
            
            <div className='section-seven secSeven-grid-system'>
            <div className='seven-cards'>
                <div className='seven-normal seven-card seven-card-one'>
                    <div className='seven-card-content seven-card-header'>Basic</div>
                    <div className='seven-card-content seven-card-price'>
                        {!timePeriod?<>200.000SYP</>:<>2.200.000SYP</>}
                    </div>
                    <div className='seven-card-content seven-card-benefits'>
                        pay less every month, but more when you need help
                    </div>
                    <button className='sec-seven-btn'>Learn More</button>
                </div>

                <div className='seven-normal seven-card seven-card-two'>
                    <div className='seven-card-content seven-card-header'>Standard</div>
                    <div className='seven-card-content seven-card-price'>
                    {!timePeriod?<>250.000SYP</>:<>2.700.000SYP</>}
                    </div>
                    <div className='seven-card-content seven-card-benefits'>
                        pay a moderate amount every month, and a moderate amount when you need help
                    </div>
                    <button className='sec-seven-btn'>Learn More</button>
                </div>

                <div className='seven-normal seven-card seven-card-three'>
                    <div className='seven-card-content seven-card-header'>Premium</div>
                    <div className='seven-card-content seven-card-price'>
                    {!timePeriod?<>300.000SYP</>:<>3.000.000SYP</>}

                    </div>
                    <div className='seven-card-content seven-card-benefits'>
                        pay more every month, but less or nothing when you need help
                    </div>
                    <button className='sec-seven-btn'>Learn More</button>
                    </div></div></div>:null}

                    {/*------------------------- slider --------------------------------*/}


            {viewportWidth<=1401?
            
        
            <Swiper
            className='swiper-secSeven'
            modules={[Navigation, FreeMode, Pagination, Scrollbar, A11y]}
            spaceBetween={500}
            slidesPerView={3}
            grabCursor={true}
            // centeredSlides={true}
            // freeMode={true}
            breakpoints={{
                1: { slidesPerView: 1, spaceBetween: 1 },
                886: { slidesPerView: 2, spaceBetween: 1 },
                1350: { slidesPerView: 3, spaceBetween: 1 },
              }}   
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
          <SwiperSlide>
          <div className='seven-normal seven-card seven-card-one'>
                    <div className='seven-card-content seven-card-header'>Basic</div>
                    <div className='seven-card-content seven-card-price'>
                        {!timePeriod?<>200.000SYP</>:<>2.200.000SYP</>}
                    </div>
                    <div className='seven-card-content seven-card-benefits'>
                        pay less every month, but more when you need help
                    </div>
                    <button className='sec-seven-btn'>Learn More</button>
                </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='seven-normal seven-card seven-card-two'>
                    <div className='seven-card-content seven-card-header'>Standard</div>
                    <div className='seven-card-content seven-card-price'>
                    {!timePeriod?<>250.000SYP</>:<>2.700.000SYP</>}
                    </div>
                    <div className='seven-card-content seven-card-benefits'>
                        pay a moderate amount every month, and a moderate amount when you need help
                    </div>
                    <button className='sec-seven-btn'>Learn More</button>
                </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='seven-normal seven-card seven-card-three'>
                    <div className='seven-card-content seven-card-header'>Premium</div>
                    <div className='seven-card-content seven-card-price'>
                    {!timePeriod?<>300.000SYP</>:<>3.000.000SYP</>}

                    </div>
                    <div className='seven-card-content seven-card-benefits'>
                        pay more every month, but less or nothing when you need help
                    </div>
                    <button className='sec-seven-btn'>Learn More</button>
                    </div>
          </SwiperSlide>
          
        </Swiper>:null}
            </div>
        
  )
}

export default SectionSeven