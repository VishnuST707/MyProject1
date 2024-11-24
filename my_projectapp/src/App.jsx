import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PlacesTogether from './components/PlacesTogether';
import TravelSection from './components/TravelSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PlacesTogether />
      <TravelSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
