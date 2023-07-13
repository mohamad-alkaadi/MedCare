import React, {useRef,useEffect} from 'react'
import imgTwo from './about-assets/aboutTwo.png'
import './about-css/about-three.css'
const AboutThree = () => {
  const aboutThreeTitleRef = useRef(null);
  const aboutThreeParaRef = useRef(null);
  const aboutThreePhotoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showAboutThree");
        } else {
          entry.target.classList.remove("showAboutThree");
        }
      });
    });

    observer.observe(aboutThreeTitleRef.current);
    observer.observe(aboutThreeParaRef.current);
    observer.observe(aboutThreePhotoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []); 

  return (
    <div className='about-three-container'>
      <div className='about-three aboutThree-grid-system'>
        <div className='about-three-img'>
          <img className='about-one-photo hiddenAboutThree' src={imgTwo} ref={aboutThreePhotoRef} loading='lazy'/>
        </div>
        <div className="about-three-text">
          <div className='about-three-title hiddenAboutThree' ref={aboutThreeTitleRef}>
            Our Story
          </div>
          <div className='about-three-para hiddenAboutThree' ref={aboutThreeParaRef}>
            At our company, we care about the well-being and happiness of the elderly. We know that they deserve to live with dignity, independence and peace of mind. That's why we offer a service that allows them to stay connected with their loved ones and their health professionals, wherever they are.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutThree


