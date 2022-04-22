import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Home/Hero';
import Bag from './components/Home/Bag';
import MindMap from './components/Home/MindMap';
import PortableUsername from './components/Home/PortableUsername/PortableUsername';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App" tabIndex="-1" id="gatsby-focus-wrapper">
      <Navigation />
      <Hero />
      <Bag />
      <MindMap />
      {/* <PortableUsername />
      <GetInvolved />
      <Footer /> */}
    </div>
  );
}

export default App;
