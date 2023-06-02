import React from 'react'
import './Services-css/serviceeight.css'
import {Check2} from '@styled-icons/bootstrap/Check2'

const ServiceEight = () => {
  return (
    <div className='service-eight-container'>
      <div className='service-eight grid-system'>
          <div className='ser-eight-title'>
          Compare Plans & Features
          </div>
          <div className='ser-eight-table'>
            <table>
              <thead>
                <tr className='ser-eight-head'>
                  <td className='ser-eight-empty'></td>
                  <td className='ser-eight-headdata'>Basic</td>
                  <td className='ser-eight-headdata'>Standerd</td>
                  <td className='ser-eight-headdata'>Premium</td>
                </tr>
              </thead>
              <tbody>
                <tr className='ser-eight-oddrow'>
                  <td className='ser-eight-body ser-eight-bodytitle'>Comes with a smartwatch</td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
                <tr className='ser-eight-evenrow'>
                  <td className='ser-eight-body ser-eight-bodytitle'>Emergency call button</td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
                <tr className='ser-eight-oddrow'>
                  <td className='ser-eight-body ser-eight-bodytitle'>Reminders for medication, appointments and activities</td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
                <tr className='ser-eight-evenrow'>
                  <td className='ser-eight-body ser-eight-bodytitle'>Medical history and records access</td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
                <tr className='ser-eight-oddrow'>
                  <td className='ser-eight-body ser-eight-bodytitle'>Activity and sleep tracking</td>
                  <td className='ser-eight-body ser-eight-bodydata'></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
                <tr className='ser-eight-evenrow'>
                  <td className='ser-eight-body ser-eight-bodytitle'>Wellness tips and advice</td>
                  <td className='ser-eight-body ser-eight-bodydata'></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
                <tr className='ser-eight-oddrow'>
                  <td className='ser-eight-body ser-eight-bodytitle'>Personalized feedback and coaching</td>
                  <td className='ser-eight-body ser-eight-bodydata'></td>
                  <td className='ser-eight-body ser-eight-bodydata'></td>
                  <td className='ser-eight-body ser-eight-bodydata'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
</div>
  )
}

export default ServiceEight