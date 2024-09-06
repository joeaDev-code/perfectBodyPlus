"use client"

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

import Image from 'next/image';

import LOGO from '../images/logo/perfectBody_Logo.png'

function Navbar({ activeSection }) {
  const navbarRef = useRef(null);
  const menuNavRef = useRef(null);
  const [isWantOpen, setIsWantOpen]= useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 1024);
      }
    };

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScroll(window.scrollY > 0);
        if (navbarRef.current) {
          if (window.scrollY > 100) {
            navbarRef.current.style.position = "fixed";
            navbarRef.current.style.top = "0";
            navbarRef.current.style.width = "100%";
            navbarRef.current.style.backgroundColor = 'white';
          } else {
            navbarRef.current.style.position = "sticky";
            navbarRef.current.style.top = "0px";
          }
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  useEffect(()=>{
    if (isWantOpen) {
      if (menuNavRef.current) {
        menuNavRef.current.style.transform = 'translateX(0vw)';
      }
    } else {
      if (menuNavRef.current) {
        menuNavRef.current.style.transform = isMobile ? 'translateX(200vw)' : 'translateX(0vw)';
      }
    }
  }, [isWantOpen, isMobile]);

  // Fonction pour fermer le menu après un clic sur un lien
  const handleLinkClick = () => {
    setIsWantOpen(false);
  };

  return (
    <div id="Navbar" ref={navbarRef}>
      <a href="/">
        <div id="logo">
          <Image src={LOGO} alt="logo"/>
        </div>
      </a>
      <ul ref={menuNavRef} className={isMobile ? 'menu responsive' : 'menu'}>
        <li className={activeSection === 'about' || activeSection === 'equipement' ? 'active' : undefined}>
          <Link to="about" smooth={true} duration={200} onClick={handleLinkClick}>ABOUT</Link>
        </li>
        <li className={activeSection === 'service' ? 'active' : undefined}>
          <Link to="service" smooth={true} duration={200} onClick={handleLinkClick}>SERVICE</Link>
        </li>
        <li className={activeSection === 'tarif' ? 'active' : undefined}>
          <Link to="tarif" smooth={true} duration={200} onClick={handleLinkClick}>TARIF</Link>
        </li>
        <li className={activeSection === 'blog' ? 'active' : undefined}>
          <Link to="blog" smooth={true} duration={200} onClick={handleLinkClick}>BLOG</Link>
        </li>
        <li className={activeSection === 'contactUs' ? 'active' : undefined}>
          <Link to="contactUs" smooth={true} duration={200} onClick={handleLinkClick}>NOUS CONTACTER</Link>
        </li>
      </ul>
      {isMobile && (
        <>
          {isWantOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="iconMenu close"
              onClick={() => setIsWantOpen(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="iconMenu open"
              onClick={() => setIsWantOpen(true)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Navbar;
