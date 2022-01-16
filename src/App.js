import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Lessons from './components/Lessons/Lessons';
import Boarding from './components/Boarding/Boarding';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';

import './styles/App.scss';
//import './TEST.css';

function App() {
  return (
    <div>
      <Header />
        <Container fluid="xl">
          <Routes>
            {/* If the current URL is /about, this route is rendered
                while the rest are ignored */}
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/lessons" element={<Lessons/>} />
            <Route path="/boarding" element={<Boarding/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/contact" element={<Contact />} />    
          </Routes>
        </Container>
      <Footer />
    </div>
    
  );
}

export default App;