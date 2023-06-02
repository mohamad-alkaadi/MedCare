import React from 'react'
import './Services-css/servicesix.css'
import styled from 'styled-components'
import {CheckCircle} from '@styled-icons/bootstrap/CheckCircle'
import {XCircle} from '@styled-icons/bootstrap/XCircle'


// import {FcCheckmark} from 'react-icons/fc'

const ServiceSix = () => {
  return (
    <div className='service-six-container'>
      <div className='service-six grid-system'>
          <div className='ser-six-title'>
          The MedCare experience goes above and beyond your typical
          primary care practice

          </div>
          <div className='ser-six-table'>
            <table>
              <thead>
                <tr className='ser-six-head'>
                  <td className='ser-six-empty'></td>
                  <td className='ser-six-headdata'>MedCare</td>
                  <td className='ser-six-headdata'>Other healthcare providers</td>
                </tr>
              </thead>
              <tbody>
                <tr className='ser-six-row'>
                  <td className='ser-six-body ser-six-bodytitle'>Same/next-day appointments</td>
                  <td className='ser-six-body ser-six-bodydata'><CheckCircle size="1.2rem" className='ser-six-icon'/></td>
                  <td className='ser-six-body ser-six-bodydata'>Not likely</td>
                </tr>
                <tr className='ser-six-row'>
                  <td className='ser-six-body ser-six-bodytitle'>24/7 virtual care</td>
                  <td className='ser-six-body ser-six-bodydata'><CheckCircle size="1.2rem" className='ser-six-icon'/></td>
                  <td className='ser-six-body ser-six-bodydata'><XCircle size="1.2rem" className='ser-six-icon'/></td>
                </tr>
                <tr className='ser-six-row'>
                  <td className='ser-six-body ser-six-bodytitle'>Provide on-site care for patients</td>
                  <td className='ser-six-body ser-six-bodydata'><CheckCircle size="1.2rem" className='ser-six-icon'/></td>
                  <td className='ser-six-body ser-six-bodydata'><XCircle size="1.2rem" className='ser-six-icon'/></td>
                </tr>
                <tr className='ser-six-row'>
                  <td className='ser-six-body ser-six-bodytitle'>Appointments start on time</td>
                  <td className='ser-six-body ser-six-bodydata'><CheckCircle size="1.2rem" className='ser-six-icon'/></td>
                  <td className='ser-six-body ser-six-bodydata'>Not likely</td>
                </tr>
                <tr className='ser-six-row'>
                  <td className='ser-six-body ser-six-bodytitle'>treating patents with respect and care</td>
                  <td className='ser-six-body ser-six-bodydata'><CheckCircle size="1.2rem" className='ser-six-icon'/></td>
                  <td className='ser-six-body ser-six-bodydata'>Not likely</td>
                </tr>
                <tr className='ser-six-row'>
                  <td className='ser-six-body ser-six-bodytitle'>Same/next-day appointments</td>
                  <td className='ser-six-body ser-six-bodydata'><CheckCircle size="1.2rem" className='ser-six-icon'/></td>
                  <td className='ser-six-body ser-six-bodydata'>Not likely</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
</div>
  )
}

export default ServiceSix