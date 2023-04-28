import React, { useState } from 'react'
import './home-css/sectionthree.css'
import secThee from './Home-assets/sec3.jpg'
const img = ()=>{
  return <img src={secThee} draggable="false" />;
}

const secTwo = (value) => {
  switch (value) {
    case value = 0:
      return <img src={secThee} draggable="false" />
      break;
    case value = 1:
      return(<div className='hidden-content-two'>
              <p className='hidden-title'>Monitor patients continuously and remotely</p>
              <p className='hidden-para'>One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
             </p>
             </div>)
      break;
    case value = 2:
      return(<div className='hidden-content-three'>
              <p>2One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
             </div>)
      break;
    case value = 3:
      return(<div className='hidden-content-four'>
              <p>3One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
             </div>)
      break;
    case value = 4:
      return(<div className='hidden-content-five'>
              <p>4One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
             </div>)
      break;
    case value = 5:
      return(<div className='hidden-content-six'>
              
              <p>5One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
             </div>)
      break;
    case value = 6:
      return(<div className='hidden-content-one'>
              <p>6One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
             </div>)
      break;
    default:
      break;
  }
}



const hellobe = (buttonValue) =>{
  console.log(buttonValue);
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
          {hellobe(hello.value)}
          {secTwo(hello.value)}
          {/* <div className='hidden-content'>
            
            <div className='hidden-content-two'>
              <p>One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
            </div>
            <div className='hidden-content-three'>
              <p>One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
            </div>
            <div className='hidden-content-four'>
              <p>One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
            </div>
            <div className='hidden-content-five'>
              <p>One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
            </div>
            <div className='hidden-content-six'>
              <p>One of the challenges in healthcare is to monitor patients continuously and remotely without compromising their comfort and mobility. A possible solution is to use a watch that can measure vital signs such as heart rate, blood pressure, oxygen saturation, and temperature, and transmit the data to a cloud-based platform where doctors can access it anytime and anywhere. 
                 This way, patients can enjoy their daily activities while being under medical supervision, and doctors can intervene promptly if any abnormality is detected.
              </p>
            </div>
          </div> */}
        </div>
        
    </div>
  )
}

export default SectionThree