'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About from './components/About';
import Equipement from './components/Equipement';
import Service from './components/Service';
import Tarif from './components/Tarif';
import Testimony from './components/Testimony';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import Loader from './components/Loader';
import Program from './components/Program'

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [loading, setLoading] = useState(true);

  // Références des sections
  const aboutRef = useRef(null);
  const equipementRef = useRef(null);
  const serviceRef = useRef(null);
  const tarifRef = useRef(null);
  const blogRef = useRef(null);
  const testimonyRef = useRef(null);
  const contactUsRef = useRef(null);

  // Mémoriser les références des sections
  const sectionRefs = useMemo(() => ({
    about: aboutRef,
    equipement: equipementRef,
    service: serviceRef,
    tarif: tarifRef,
    blog: blogRef,
    testimony: testimonyRef,
    contactUs: contactUsRef,
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  useEffect(() => {
    // Simule un délai de chargement (par exemple pour charger des données)
    const timer = setTimeout(() => {
      setLoading(false); // Cache le loader après 2 secondes
    }, 2000);

    // Cleanup pour éviter les fuites de mémoire
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Affiche le loader si le site est en cours de chargement
  }

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <Banner />
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={equipementRef} id="equipement">
        <Equipement />
      </div>
      <div ref={serviceRef} id="service">
        <Service />
      </div>
      <div ref={tarifRef} id="tarif">
        <Tarif />
      </div>
      <div ref={blogRef} id="blog">
        <Blog />
      </div>
      <div ref={testimonyRef} id="testimony">
        <Testimony />
      </div>
      <div ref={contactUsRef} id="contactUs">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
