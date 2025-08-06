import React from 'react';
import '../src/app.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Products from './components/Products';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Products />
      <Footer />
     

    </div>
  )
}

export default App
