import './App.css';
import Home from './Page/Home/Home';
import Services from './Page/Services/Services';
import Footer from './common/Footer';
import NavBar from './common/NavBar';
import Register from './Page/Register';
import About from './Page/About/About';
import SignIn from './Page/Signin/SignIn';
import SectionTwoNew from './Page/Home/SectionTwoNew';
// import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom';
import { Route, Routes, useLocation } from "react-router-dom"

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname !== "/signin" && <NavBar />}
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/signin' element={<SignIn/>}/>
      </Routes>
      {/* {location.pathname !== "/signin" && <Footer />} */}
    </div>

  );
}

export default App;

