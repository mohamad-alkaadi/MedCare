import './App.css';
import Home from './Page/Home/Home';
import Services from './Page/Services/Services';
import Footer from './common/Footer';
import NavBar from './common/NavBar';
import Register from './Page/Register';
import About from './Page/About/About';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home/> */}
      {/* <Register/> */}
      {/* <Services/> */}
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
