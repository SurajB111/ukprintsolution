import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import './App.css';
// import HeroSection from './components/HeroSection';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Navbar from './components/Navbar';
import AboutUsPage from "./components/AboutUsPage";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import MachineDetail from "./components/MachineDetail";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUsPage/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/machine/:id" element={<MachineDetail/>} />
      

      </Routes>
      <Footer/>
    
      
      </Router>
  );
}

export default App;
