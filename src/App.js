import React from 'react';
/* import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; */
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Gallery />
      <Footer />
    </div>
    
  );
}

export default App;