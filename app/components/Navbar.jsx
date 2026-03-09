'use client'

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

function Navbar({ activeSection }) {
  const [isWantOpen, setIsWantOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isWantOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isWantOpen]);

  const navLinks = [
    { id: 'about', label: 'ABOUT' },
    { id: 'service', label: 'SERVICE' },
    { id: 'tarif', label: 'TARIF' },
    { id: 'contactUs', label: 'CONTACT' },
  ];

  const NavItem = ({ link, mobile = false }) => {
    const commonClass = mobile 
      ? `text-4xl font-black tracking-tighter transition-all hover:text-primary ${activeSection === link.id ? "text-primary italic" : "text-white"}`
      : `cursor-pointer text-[11px] font-black tracking-[0.2em] transition-all duration-300 hover:text-primary ${activeSection === link.id ? "text-primary" : "text-gray-400"}`;

    if (isHomePage) {
      return (
        <ScrollLink
          to={link.id}
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          onClick={() => setIsWantOpen(false)}
          className={commonClass}
        >
          {link.label}
        </ScrollLink>
      );
    }

    return (
      <Link href={`/#${link.id}`} className={commonClass} onClick={() => setIsWantOpen(false)}>
        {link.label}
      </Link>
    );
  };

  return (
    <>
      {/* Correction Z-INDEX avec crochets [1000] */}
      <nav className="sticky top-0 left-0 right-0 z-[1000] bg-bg-dark/90 backdrop-blur-xl border-b border-white/5 px-6 lg:px-12 py-4 flex justify-between items-center">
        
        {/* LOGO - Z-Index plus haut que l'overlay */}
        <Link href="/" className="relative z-[1010] transition-transform hover:scale-105 active:scale-95">
          <Logo className="text-xl md:text-2xl" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}><NavItem link={link} /></li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/blog" className={`text-[10px] font-black px-6 py-2.5 rounded-full border border-white/10 transition-all tracking-widest ${pathname.includes('/blog') ? 'bg-primary border-primary text-white' : 'text-white hover:bg-white/5'}`}>
            BLOG
          </Link>
          <Link href={isHomePage ? "#contactUs" : "/#contactUs"} className="bg-white text-bg-dark text-[10px] font-black px-6 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all tracking-widest">
            REJOINDRE
          </Link>
        </div>

        {/* Mobile Toggle Button - Z-INDEX LE PLUS HAUT [1010] */}
        <button 
          onClick={() => setIsWantOpen(!isWantOpen)}
          className="lg:hidden relative z-[1010] text-white text-3xl w-12 h-12 flex items-center justify-center transition-all duration-300"
          aria-label="Menu"
        >
          <FontAwesomeIcon 
            icon={isWantOpen ? faXmark : faBars} 
            className={`${isWantOpen ? "text-primary rotate-90" : "text-white"} transition-all duration-300`} 
          />
        </button>
      </nav>

      {/* MOBILE OVERLAY - Z-INDEX INTERMÉDIAIRE [1005] */}
      <div className={`fixed inset-0 z-[1005] bg-bg-dark flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-in-out lg:hidden ${
        isWantOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
      }`}>
        
        {/* Décoration de fond */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full -z-10" />
        
        {navLinks.map((link) => (
          <NavItem key={link.id} link={link} mobile={true} />
        ))}
        
        <div className="h-[1px] w-12 bg-white/20 my-4" />
        
        <Link 
          href="/blog" 
          onClick={() => setIsWantOpen(false)}
          className={`text-4xl font-black tracking-tighter italic transition-all ${pathname.includes('/blog') ? 'text-primary' : 'text-white/40'}`}
        >
          BLOG
        </Link>

        <Link 
          href={isHomePage ? "#contactUs" : "/#contactUs"}
          onClick={() => setIsWantOpen(false)}
          className="mt-8 bg-primary text-white text-xs font-black px-12 py-5 rounded-full tracking-[0.2em] shadow-xl shadow-primary/20"
        >
          REJOINDRE MAINTENANT
        </Link>
      </div>
    </>
  );
}

export default Navbar;