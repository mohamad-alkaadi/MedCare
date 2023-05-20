import React from 'react'
import './home-css/sectiontwo.css'
import quality1 from './Home-assets/quality1.png'
import quality2 from './Home-assets/quality2.png'
import integrity from './Home-assets/integrity.png'
import experience1 from './Home-assets/Experience1.png'
import experience2 from './Home-assets/Experience2.png'
import {motion} from 'framer-motion'
import {useRef,useEffect,useState} from "react"

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





const SectionTwo = () => {
  const viewportWidth = useWindowSize();
  const[width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);


  return (
    <div className='section-two-container'>
        <div className='section-two grid-system'>
                 
          
            <p className='two-headline'>Our Mission</p>     
            <p className='two-subheadline'>At our company, we are committed to serving and enriching the holistic wellness of older adults. We do that {viewportWidth>1030 ? <br/>:null}by providing them with a wearable device that monitors their health and safety, and connects them with {viewportWidth>1030 ? <br/>:null}their loved ones and caregivers. Our mission is to erase boundaries and empower older adults to live life to {viewportWidth>1030 ? <br/>:null}the fullest.</p>

            {viewportWidth>1030 ? <br/>:null}

            <div className='mission-card card1'>
                <img className='card-img card-img-one' src={quality1}/>
                <p className='card-heading'>Quality</p>
                <p className='card-subheading'>We provide quality<br/>care for elderly people<br/>with innovative technology<br/>that monitors their<br/>health and safety<br/>24/7</p>
            </div>
            <div className='mission-card card2'>
                <img className='card-img card-img-two' src={integrity}/>
                <p className='card-heading'>Integrity</p>
                <p className='card-subheading'>We value integrity as the<br/>foundation of our service.<br/>We respect and protect<br/>the dignity and well<br/>being of our<br/> clients.</p>
            </div>
            <div className='mission-card card3'>
                <img className='card-img card-img-three' src={experience2}/>
                <p className='card-heading'>Experience</p>
                <p className='card-subheading'>We provide personalized<br/>care for elderly people<br/>using advanced<br/>technology that monitors<br/>their health and well<br/>being.</p>
            </div>
            {/* -----------------slider-------------- */}



            <motion.div ref={carousel} whileTap={{cursor:"grabbing"}} className='carousel'>
              <motion.div drag="x" dragConstraints={{right:0,left: -width}} className='inner-carousel'>
                <motion.div className='slide-mission-card card1 item'>
                    <img className='card-img card-img-one' src={quality1}/>
                    <p className='card-heading'>Quality</p>
                    <p className='card-subheading'>We provide quality<br/>care for elderly people<br/>with innovative technology<br/>that monitors their<br/>health and safety<br/>24/7</p>
                </motion.div>
                <motion.div className='slide-mission-card card2 item'>
                    <img className='card-img card-img-two' src={integrity}/>
                    <p className='card-heading'>Integrity</p>
                    <p className='card-subheading'>We value integrity as the<br/>foundation of our service.<br/>We respect and protect<br/>the dignity and well<br/>being of our<br/> clients.</p>
                </motion.div>
                <motion.div className='slide-mission-card card3 item'>
                    <img className='card-img card-img-three' src={experience2}/>
                    <p className='card-heading'>Experience</p>
                    <p className='card-subheading'>We provide personalized<br/>care for elderly people<br/>using advanced<br/>technology that monitors<br/>their health and well<br/>being.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        
        
    </div>
  )
}

export default SectionTwo