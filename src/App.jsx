import React, { useState } from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Masters from './components/Masters';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import salonData from './salonData';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedMaster, setSelectedMaster] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services onSelectService={setSelectedService} />
      <Masters />
      <Booking
        selectedService={selectedService}
        selectedMaster={selectedMaster}
        salonPhone={salonData.phone}
      />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
