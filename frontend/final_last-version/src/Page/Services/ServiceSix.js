import React, {useState,useEffect} from 'react'
import './Services-css/servicesix.css'
import styled from 'styled-components'
import {CheckCircle} from '@styled-icons/bootstrap/CheckCircle'
import {XCircle} from '@styled-icons/bootstrap/XCircle'


// import {FcCheckmark} from 'react-icons/fc'

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



const ServiceSix = () => {
  const width = useWindowSize();
  return (
    <div className='service-six-container'>
      <div className='service-six serviceSix-grid-system'>
          <div className='ser-six-title'>
          {width>=700? 
          `The MedCare experience goes above and beyond your typical
          primary care practice`:null}
          
          {width<700? `MedCare compared to other plans`:null}
          </div>
          <div className='ser-six-table'>
            <table>
              <thead>
                <tr className='ser-six-head'>
                  <td className='ser-six-empty'></td>
                  <td className='ser-six-headdata ser-six-columnTwo'>MedCare</td>
                  <td className='ser-six-headdata ser-six-columnThree'>Other healthcare<br/>providers</td>
                </tr>
              </thead>
              <tbody>
                <tr className='ser-six-row'>
                  <td className='ser-six-body ser-six-bodytitle ser-six-columnOne'>Same/next-day appointments</td>
                  <td className='ser-six-body ser-six-bodydata ser-six-columnTwo'><CheckCircle size="1.3rem" className='ser-six-icon'/></td>
                  <td className='ser-six-body ser-six-bodydata ser-six-columnThree'>Not likely</td>
                </tr>
                <tr className='ser-six-row'>
                  <td className='ser-six-body ser-six-bodytitle ser-six-columnOne'>24/7 virtual care</td>
                  <td className='ser-six-body ser-six-bodydata ser-six-columnTwo'><CheckCircle size="1.3rem" className='ser-six-icon'/></td>
                  <td className='ser-six-body ser-six-bodydata ser-six-columnThree'><XCircle size="1.3rem" className='ser-six-icon'/></td>
                </tr>
                <tr className='ser-six-row'>
                  <td className='ser-six-body ser-six-bodytitle ser-six-columnOne'>Provide on-site care for patients</td>
                  <td className='ser-six-body ser-six-bodydata ser-six-columnTwo'><CheckCircle size="1.3rem" className='ser-six-icon'/></td>
                  <td className='ser-six-body ser-six-bodydata ser-six-columnThree'><XCircle size="1.3rem" className='ser-six-icon'/></td>
                </tr>
                <tr className='ser-six-row'>
                  <td className='ser-six-body ser-six-bodytitle ser-six-columnOne'>Appointments start on time</td>
                  <td className='ser-six-body ser-six-bodydata ser-six-columnTwo'><CheckCircle size="1.3rem" className='ser-six-icon'/></td>
                  <td className='ser-six-body ser-six-bodydata ser-six-columnThree'>Not likely</td>
                </tr>
                <tr className='ser-six-row'>
                  <td className='ser-six-body ser-six-bodytitle ser-six-columnOne'>treating patents with respect and care</td>
                  <td className='ser-six-body ser-six-bodydata ser-six-columnTwo'><CheckCircle size="1.3rem" className='ser-six-icon'/></td>
                  <td className='ser-six-body ser-six-bodydata ser-six-columnThree'>Not likely</td>
                </tr>
                <tr className='ser-six-row'>
                  <td className='ser-six-body ser-six-bodytitle ser-six-columnOne'>Same/next-day appointments</td>
                  <td className='ser-six-body ser-six-bodydata ser-six-columnTwo'><CheckCircle size="1.3rem" className='ser-six-icon'/></td>
                  <td className='ser-six-body ser-six-bodydata ser-six-columnThree'>Not likely</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
</div>
  )
}

export default ServiceSix