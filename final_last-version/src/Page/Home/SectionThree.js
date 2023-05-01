import React, { useState } from 'react'
import './home-css/sectionthree.css'
import secThee from './Home-assets/sec3.jpg'


const img = ()=>{
  return <img src={secThee} draggable="false" />;
}

const secTwo = (value,active) => {
  if(active){
  switch (value) {
    case value = 0:
      return <img src={secThee} draggable="false" />
      break;
    case value = 1:
      return(<div className='hidden-content-one hidden-content'>
              
              <p className='hidden-title'>Monitor patients continuously and remotely</p>
              <p className='hidden-para'>One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
             </p>
             </div>)
      break;
    case value = 2:
      return(
              <div className='hidden-content-two hidden-content'>
              <p className='hidden-title'>Easy booking of same or next day appointments</p>
             <p className='hidden-para'> 
             We offer a service to book medical appointments for the elderly. You can find and book a nearby doctor for same or next day visits using our online platform, phone line, or app. We have a network of trusted GPs, specialists, and urgent care providers. Our service is fast, easy, and respectful of the elderly’s choice. They can make their own appointments using our simple interface and get reminders and confirmations via smartwatch. Our service helps you and your elderly loved ones get the care you need.
              </p>
              
             </div>)
      break;
    case value = 3:
      return(<div className='hidden-content-three hidden-content'>
              <p>3One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
             </div>)
      break;
    case value = 4:
      return(<div className='hidden-content-four hidden-content'>
              <p>4One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
             </div>)
      break;
    case value = 5:
      return(<div className='hidden-content-five hidden-content'>
              
              <p>5One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
             </div>)
      break;
    case value = 6:
      return(<div className='hidden-content-six hidden-content'>
              <p>6One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
             </div>)
      break;
    default:
      return <img src={secThee} draggable="false" />
      break;
  }
  }else{
    return <img src={secThee} draggable="false" />
  }
}
  



const hellobe = (buttonValue,buttonActive) =>{
  console.log(buttonValue,buttonActive);
}

const SectionThree = () => {
  const [hello,setHello] =useState({value:0,active:false});

  const buttonOne = () =>{
    setHello({...hello,value:1,active:!hello.active});
    return hello.value,hello.active;
  }
  const buttonTwo = () =>{
    setHello({...hello,value:2,active:!hello.active});

    return hello.value,hello.active;
  }
  
  const buttonThree = () =>{
    setHello({...hello,value:3,active:!hello.active});
    return hello.value,hello.active;
  }
  
  const buttonFour = () =>{
    setHello({...hello,value:4,active:!hello.active});
    return hello.value,hello.active;
  }
  
  const buttonFive = () =>{
    setHello({...hello,value:5,active:!hello.active});
    return hello.value,hello.active;
  }
  
  const buttonSix = () =>{
    setHello({...hello,value:6,active:!hello.active});
    return hello.value,hello.active;
  }




  return (
    <div className='section-three-container'>
        <div className='section-three grid-system'>
  
          <div className='benefits-text'>
            <p className='ben-title'>Membership benefits<br/>you'll enjoy</p>
            <div className='sub-benefits'>
            <div className='sub-ben text-one'>
                  
                  <button onClick={buttonOne} className='sub-ben-text'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                    Monitor patients continuously and remotely
                  </button>
                </div>

                <div className='sub-ben text-two'>
                  <button onClick={buttonTwo} className='sub-ben-text'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Easy booking of same or next day appointments
                  </button>
                </div>

                <div className='sub-ben text-three'>
                  
                  <button onClick={buttonThree} className='sub-ben-text'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Peace of mind for family members
                  </button>
                </div>
                <div className='sub-ben text-four'>
                 
                  <button onClick={buttonFour} className='sub-ben-text'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Easier access to patient data remotely
                  </button>
                </div>

                <div className='sub-ben text-five'>
                  <button onClick={buttonFive} className='sub-ben-text'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Personalized and flexible services
                  </button>
                </div>
                
                <div className='sub-ben text-six'>
                  
              
                  <button onClick={buttonSix} className='sub-ben-text'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Provide remote care and guidance to patients
                  </button>
                  
                </div>
            </div>
          </div>
          {/* {img()} */}
          {/* <img src={secThee} draggable="false" /> */}
          {hellobe(hello.value,hello.active)}
          {secTwo(hello.value,hello.active)}
        </div>
        
    </div>
  )
}

export default SectionThree