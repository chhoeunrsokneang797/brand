import React from'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './page/About';
import Support from './page/Support';
import AllInOne from './page/AllInOne';
import Pricing from './page/Pricing';
import Footer from './page/Footer';

function App() {
  return (
     <>
     <Navbar/>
     <Hero/>
     <About/>
     <Support/>
     <AllInOne/>
     <Pricing/>
     <Footer/>
     </>
  );
}

export default App;
