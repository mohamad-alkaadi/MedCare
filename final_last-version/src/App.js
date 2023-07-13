import './App.css';
import Home from './Page/Home/Home';
import Services from './Page/Services/Services';
import Footer from './common/Footer';
import NavBar from './common/NavBar';
import Register from './Page/Register';
import About from './Page/About/About';
import SignIn from './Page/Signin/SignIn';
import Error from './common/Error';
import SectionTwoNew from './Page/Home/SectionTwoNew';
// import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom';
import { Route, Routes, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react';


function useAppWindowSize(){
  const [size,setSize]=useState(window.innerWidth);

  useEffect(()=>{
    const handleResize = () => {
    setSize(window.innerWidth);
    };
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    };
  },[]);
  return size;
}



function App() {
  const appViewportWidth = useAppWindowSize();

  const location = useLocation();
  const [hamMenuActive,setHamMenuActive] = useState(true)
  const [hasError, setHasError] = useState(false)

  const hamClicked = () => {
    setHamMenuActive(!hamMenuActive)
    console.log(hamMenuActive)
  };


  const closeNavBar = () =>{
    document.querySelector('.nav-checkbox').checked = false
    setHamMenuActive(!hamMenuActive)
  }

  return (
    <div className="App">
      {location.pathname !== "/MedCare/signin" && !hasError && <NavBar hamMenuActive={hamMenuActive} hamClicked={hamClicked} closeNavBar={closeNavBar}/>}
      <Routes>
         <Route path='/MedCare' element={<Home hamActive={hamMenuActive} appViewportWidth={appViewportWidth}/>}/>
         <Route path='/' element={<Home hamActive={hamMenuActive} appViewportWidth={appViewportWidth}/>}/>
         <Route path='/MedCare/services' element={<Services hamActive={hamMenuActive} appViewportWidth={appViewportWidth}/>}/>
         <Route path='/MedCare/about' element={<About hamActive={hamMenuActive} appViewportWidth={appViewportWidth}/>}/>
         <Route path='/MedCare/signin' element={<SignIn/>}/>
         <Route path='*' element={<Error hasError={hasError} setHasError={setHasError}/>}/>
      </Routes>
      {location.pathname !== "/MedCare/signin" && !hasError && <Footer hamActive={hamMenuActive} appViewportWidth={appViewportWidth}/>}
    </div>

  );
}

export default App;


