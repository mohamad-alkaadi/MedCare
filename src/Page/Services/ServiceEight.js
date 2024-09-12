import React from 'react'
import './Services-css/serviceeight.css'
import {Check2} from '@styled-icons/bootstrap/Check2'

const ServiceEight = () => {
  return (
    <div className='service-eight-container'>
      <div className='service-eight serviceEight-grid-system'>
          <div className='ser-eight-title'>
          Compare Plans & Features
          </div>
          <div className='ser-eight-table'>
            <table>
              <thead>
                <tr className='ser-eight-head'>
                  <td className='ser-eight-empty'></td>
                  <td className='ser-eight-headdata ser-eight-columnTwo'>Basic</td>
                  <td className='ser-eight-headdata ser-eight-columnThree'>Standard</td>
                  <td className='ser-eight-headdata ser-eight-columnFour'>Premium</td>
                </tr>
              </thead>
              <tbody>
                <tr className='ser-eight-oddrow'>
                  <td className='ser-eight-body ser-eight-bodytitle ser-eight-columnOne'>Comes with a smartwatch</td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnTwo'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnThree'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnFour'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
                <tr className='ser-eight-evenrow'>
                  <td className='ser-eight-body ser-eight-bodytitle ser-eight-columnOne'>Emergency call button</td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnTwo'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnThree'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnFour'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
                <tr className='ser-eight-oddrow'>
                  <td className='ser-eight-body ser-eight-bodytitle ser-eight-columnOne'>Reminders for medication, appointments and activities</td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnTwo'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnThree'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnFour'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
                <tr className='ser-eight-evenrow'>
                  <td className='ser-eight-body ser-eight-bodytitle ser-eight-columnOne'>Medical history and records access</td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnTwo'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnThree'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnFour'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
                <tr className='ser-eight-oddrow'>
                  <td className='ser-eight-body ser-eight-bodytitle ser-eight-columnOne'>Activity and sleep tracking</td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnTwo'></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnThree'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnFour'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
                <tr className='ser-eight-evenrow'>
                  <td className='ser-eight-body ser-eight-bodytitle ser-eight-columnOne'>Wellness tips and advice</td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnTwo'></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnThree'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnFour'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
                <tr className='ser-eight-oddrow'>
                  <td className='ser-eight-body ser-eight-bodytitle ser-eight-columnOne'>Personalized feedback and coaching</td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnTwo'></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnThree'></td>
                  <td className='ser-eight-body ser-eight-bodydata ser-eight-columnFour'><Check2 size="1.8rem" className='ser-eight-icon'/></td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
</div>
  )
}

export default ServiceEight