import './App.scss';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './components/Pages/About'
import Home from './components/Pages/Home'
import Resume from './components/Pages/Resume'
import Services from './components/Pages/Services'
import Portfolio from './components/Pages/Portfolio'
import Contact from './components/Pages/Contact'
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={ <Resume />} />
        <Route path="/services" element={ <Services />} />
        <Route path="/portfolio" element={ <Portfolio />} />
        <Route path="/contact" element={ <Contact />} />
        <Route exact path="/" element={ <Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
