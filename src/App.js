import React from 'react';
/* import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; */
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Boarding from './components/Boarding/Boarding';
import Gallery from './components/Gallery/Gallery';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Boarding />
      <Gallery />
      <Footer />
    </div>
    
  );
}

export default App;