import React, { useState,useRef,useEffect } from 'react'
import './home-css/sectionthree.css'
import secThee from './Home-assets/sec3.jpg'
import {MdClose} from 'react-icons/md'
const img = ()=>{
  return <img src={secThee} draggable="false" />;
}





const hellobe = (buttonValue,buttonActive) =>{
  console.log(buttonValue,buttonActive);
}

const SectionThree = () => {
  const [hello,setHello] =useState({value:0});

  const buttonOne = () =>{
    setHello({...hello,value:1});
    return hello.value;
  }
  const buttonTwo = () =>{
    setHello({...hello,value:2});

    return hello.value;
  }
  
  const buttonThree = () =>{
    setHello({...hello,value:3});
    return hello.value;
  }
  
  const buttonFour = () =>{
    setHello({...hello,value:4});
    return hello.value;
  }
  
  const buttonFive = () =>{
    setHello({...hello,value:5});
    return hello.value;
  }
  
  const buttonSix = () =>{
    setHello({...hello,value:6});
    return hello.value;
  }
  const backClick = () =>{
    setHello({...hello,value:0});
  }

  const secTwo = (value) => {
  
    switch (value) {
      case 0:
        return <img src={secThee} draggable="false" />
        break;
      case 1:
        return(<div className='hidden-content-one hidden-content'>
                <button onClick={backClick} className='back-button'><MdClose/></button>
                <div className='hidden-para'>
                  <p className='hidden-title'>Monitor patients continuously and remotely</p>
                  <p className='hidden-para'>One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                    This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
                </p>
               </div>
               </div>)
        break;
      case 2:
        return(
                <div className='hidden-content-two hidden-content'>
                  <button onClick={backClick} className='back-button'><MdClose/></button>
                  <div className='hidden-para'>

                    <p className='hidden-title'>Easy booking of same or next day appointments</p>
                    <p className='hidden-para'> 
                    One of the greatest challenges of caring for an elderly loved one is ensuring their safety and well-being when you are not around. You want to respect their independence and privacy, but you also worry about their health and comfort. That’s why our company offers a unique service that monitors the vital signs of our clients 24/7, using a discreet and comfortable device that they wear on their wrist. This way, you can have peace of mind knowing that they are always under professional supervision, and that you will be alerted immediately if there is any sign of trouble.
                     </p>
                </div>
               </div>)
        break;
      case 3:
        return(<div className='hidden-content-three hidden-content'>
                  <button onClick={backClick} className='back-button'><MdClose/></button>
                  <div className='hidden-para'>
                   <p className='hidden-title'>Peace of mind for family members</p>
                     <p p className='hidden-para'>Our company offers a service that helps elderly people stay healthy and independent at home. With our service, they get a wearable device that measures their vital signs and sends the data to a cloud platform. This allows their family members or health care professionals to access the data and monitor their health status. The device also detects any abnormalities and alerts the nearest hospital in case of an emergency. Our service connects the elderly to their loved ones and health care team, while enabling them to live comfortably at home. It also lowers the risk of complications and hospitalizations. </p>
                </div>
               </div>)
        break;
      case 4:
        return(<div className='hidden-content-four hidden-content'>
                <button onClick={backClick} className='back-button'><MdClose/></button>
                  <div className='hidden-para'>
                   <p className='hidden-title'>Easier access to patient data remotely</p>
                     <p p className='hidden-para'>
                        One of the benefits of our service is that it allows easier access to patient data remotely. This means that doctors can view the vital signs and medical history of their elderly patients anytime and anywhere, without having to visit them in person. This can save time, reduce costs, and improve the quality of care. By having a comprehensive and up-to-date picture of the patient's health, doctors can make better decisions and intervene promptly if needed.
                      </p>
                </div>
               </div>)
        break;
      case 5:
        return(<div className='hidden-content-five hidden-content'>
               <button onClick={backClick} className='back-button'><MdClose/></button>
                  <div className='hidden-para'>
                   <p className='hidden-title'>Personalized and flexible services</p>
                     <p p className='hidden-para'>
                     Our company offers personalized and flexible services for elderly care, based on monitoring their vital signs and connecting them to the nearest hospital that is contracted with us. We have three plans to suit different needs and budgets: basic, standard and premium. The basic plan has a low monthly subscription fee, but a higher cost when you need help. The standard plan has a moderate monthly fee and a moderate cost when you need help. The premium plan has a high monthly fee, but a low or no cost when you need help. You can choose the plan that best fits your situation and preferences. </p>
                </div>
               </div>)
        break;
      case 6:
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
          
          {hellobe(hello.value)}
          {secTwo(hello.value)}
        </div>
        
    </div>
  )
}

export default SectionThree