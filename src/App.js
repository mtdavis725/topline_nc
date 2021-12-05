import React from 'react';
/* import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; */
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Lessons from './components/Lessons/Lessons';
import Boarding from './components/Boarding/Boarding';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Lessons />
      <Boarding />
      <Gallery />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;