import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/hero';
import Promo from './components/Promo';
import Menu from './components/Menu';
import About from './components/About';
import Booking from './components/Booking';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <Promo/>
      <Menu/>
      <About/>
      <Booking/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
