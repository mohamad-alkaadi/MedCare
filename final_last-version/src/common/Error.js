import React, {useEffect} from 'react'
import './css/error.css'
import {Link} from 'react-router-dom'
import errorBackground from './common-assets/error-vide.mp4'
import errorLogo from './common-assets/medcare-icon.png'

const Error = ({hasError, setHasError,appViewportWidth}) => {
  
  useEffect(() => {
    setHasError(true)

    return () => {
      setHasError(false)
    }
  }, [setHasError]) 


  return (
    <div className='error-page-container'>
        {appViewportWidth>915?<video className='error-fullScreen-video' src={errorBackground} autoPlay muted loop></video>:null}
        <div className='error-page error-grid-system'>
          {appViewportWidth>915?<div className='error-logo'><Link className='error-logoLink' to='/MedCare'><p className='error-logoText'>MedCare</p></Link></div>:null}
          {appViewportWidth>915?<div className='error-content'>error 404</div>: <div className='error-content'>404</div>}
          {appViewportWidth>915?<div className='error-paraOne'>The page seems to be missing.</div>: <div className='error-paraOne'>The page seems to be missing</div>}
            
          {appViewportWidth>915?<div className='error-paraTwo'>Perhaps it's time to go back <Link className='error-paraTwo-link' to='/MedCare'><span className='error-paraTwo-linkText'>home</span></Link>?</div>:
          <div className='error-paraTwo'><Link className='error-paraTwo-link' to='/MedCare'><span className='error-paraTwo-linkText'>Back to home</span></Link></div>}
          {appViewportWidth<915?<div className='error-logo'><Link className='error-logoLink' to='/MedCare'><p className='error-logoText'>MedCare</p></Link></div>:null}
        </div>
        </div>
       
  )
}

export default Error







// import React, {useEffect} from 'react'
// import './css/error.css'
// import {Link} from 'react-router-dom'
// import errorBackground from './common-assets/error-vide.mp4'

// const Error = ({hasError, setHasError}) => {
//   useEffect(() => {
//     setHasError(true)

//     return () => {
//       setHasError(false)
//     }
//   }, [setHasError]) 


//   return (
//     <div className='error-page-container'>
//         <video className='error-fullScreen-video' src={errorBackground} autoPlay muted loop></video>
//         <div className='error-SecOne'>
//         <div className='error-page error-grid-system'>
//           <div className='error-logo'><Link className='error-logoLink' to='/MedCare'><p className='error-logoText'>MedCare</p></Link></div>
//         </div>
//         <div className='error-SecTwo'>
//           <div className='error-page error-grid-system'>
//             <div className='error-content'>error 404</div>
//             <div className='error-paraOne'>The page seems to be missing.</div>
//             <div className='error-paraTwo'>Perhaps it's time to go back <Link to='/MedCare'>home</Link>?</div>
//           </div>
//         </div>
//         </div>
       
//     </div>
//   )
// }

// export default Error