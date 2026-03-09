'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Composants critiques (immédiatement visibles)
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Loader from './components/Loader';

// Imports dynamiques pour les sections lourdes et le modal de vente
const SaleModal = dynamic(() => import('./components/SaleModal'), { ssr: false });
const About = dynamic(() => import('./components/About'), { loading: () => <div className="h-96" /> });
const Equipement = dynamic(() => import('./components/Equipement'), { ssr: false });
const Service = dynamic(() => import('./components/Service'));
const Tarif = dynamic(() => import('./components/Tarif'));
const Testimony = dynamic(() => import('./components/Testimony'));
const ContactUs = dynamic(() => import('./components/ContactUs'));
const Blog = dynamic(() => import('./components/Blog'));
const Program = dynamic(() => import('./components/Program'));
const Footer = dynamic(() => import('./components/Footer'));

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [loading, setLoading] = useState(true);

  // Simulation de chargement initial
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer pour la Navbar active
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -70% 0px" } // Optimisé pour le scroll
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <main className="relative bg-bg-dark overflow-x-hidden">
      {/* 1. Annonce de vente tout en haut */}
      
      {/* 2. Navigation (Le SalesHeader décale naturellement la Navbar si elle n'est pas en fixed inset-0) */}
      <Navbar activeSection={activeSection} />
      
      {/* 3. Hero Section */}
      <Banner />

      {/* 4. Sections de contenu */}
      <div className="relative z-10">
        <About />
        <Equipement />
        <Service />
        <Program />
        <Tarif />
        <Blog />
        <Testimony />
        <ContactUs />
      </div>

      {/* 5. Footer & Outils de conversion */}
      <Footer />
      <SaleModal />
    </main>
  );
}