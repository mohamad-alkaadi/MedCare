import './App.css';
import Home from './Page/Home/Home';
import Services from './Page/Services/Services';
import Footer from './common/Footer';
import NavBar from './common/NavBar';
import Register from './Page/Register';
import About from './Page/About/About';
import SignIn from './Page/Signin/SignIn';
import SectionTwoNew from './Page/Home/SectionTwoNew';
function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home/> */}
      {/* <Register/> */}
      <Services/>
      {/* <About/> */}
      {/* <SignIn/> */}
      {/* <SectionTwoNew/> */}
      <Footer/>
      {/* <Hello/> */}
    </div>
  );
}

export default App;
