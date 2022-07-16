import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Sections from './components/Sections';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Sections/>
      <Footer/>
    </div>
  );
}

export default App;
