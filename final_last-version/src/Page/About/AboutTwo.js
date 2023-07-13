
import React, {useRef,useEffect} from 'react'
import './about-css/about-two.css'
import imgOne from './about-assets/aboutOne.png'

const AboutTwo = () => {
  const aboutTwoTitleRef = useRef(null);
  const aboutTwoParaRef = useRef(null);
  const aboutTwoPhotoRef = useRef(null);

  // Use useEffect to run the observer logic after the component mounts
  useEffect(() => {
    // Create a new observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showAboutTwo");
        } else {
          entry.target.classList.remove("showAboutTwo");
        }
      });
    });

    // Observe each element using its reference
    observer.observe(aboutTwoTitleRef.current);
    observer.observe(aboutTwoParaRef.current);
    observer.observe(aboutTwoPhotoRef.current);

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); // Run only once
  return (
    <div className='about-two-container'>
      <div className='about-two aboutTwo-grid-system'>
        
        <div className="about-two-text">
          <div className='about-two-title hiddenAboutTwo' ref={aboutTwoTitleRef}>
            Our Mission
          </div>
          <div className='about-two-para hiddenAboutTwo' ref={aboutTwoParaRef}>
          Our company is dedicated to improving the quality of life for the elderly by providing advanced care solutions that enable them to live independently. We leverage cutting-edge technology to monitor our clients' health and wellbeing, ensuring that they receive the attention they need whenever they need it. Our mission is to empower seniors to age with dignity and grace, knowing that they are always connected to the care and support they require to thrive.      
          </div>
        </div>
        <div className='about-two-img'>
          <img className='about-two-photo hiddenAboutTwo' src={imgOne} ref={aboutTwoPhotoRef} loading='lazy'/>
        </div>
      </div>
    </div>
  )
}

export default AboutTwo


