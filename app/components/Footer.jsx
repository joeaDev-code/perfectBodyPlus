'use client'

import React from 'react'
import { Link } from 'react-scroll'
import CodeQr from './codeQr'
import Image from 'next/image'
import { motion } from 'framer-motion'

// On utilise maintenant le composant Logo textuel
import Logo from './Logo' 

import ICON_FB from '../images/icons/facebook.png'
import ICON_INSTA from '../images/icons/instagram.png'
import ICON_TWIT from '../images/icons/twitter.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='Footer' className="relative bg-bg-dark pt-20 pb-10 px-4 sm:px-6 lg:px-16 border-t border-white/5 overflow-hidden">
      
      {/* Effet de lumière en arrière-plan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        
        {/* --- GRILLE PRINCIPALE --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Section Logo & Bio */}
          <div className="lg:col-span-4 space-y-6 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <Logo className="text-2xl" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium italic mx-auto sm:mx-0">
              &quot;Dépassez vos limites avec PerfectBody+. Votre partenaire fitness premium pour des résultats durables et une transformation profonde.&quot;
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-6 border-l-2 border-primary pl-4 inline-block sm:block">
              Navigation
            </h3>
            <ul className="space-y-4">
              {['About', 'Service', 'Tarif', 'ContactUs', 'Blog'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item} 
                    smooth={true} 
                    className="text-gray-500 hover:text-primary transition-all cursor-pointer text-xs font-bold uppercase tracking-widest flex items-center justify-center sm:justify-start gap-2 group"
                  >
                    <span className="hidden sm:block w-0 group-hover:w-2 h-[1px] bg-primary transition-all" />
                    {item === 'ContactUs' ? 'Contacts' : item === 'Blog' ? 'Actualités' : item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordonnées */}
          <div className="lg:col-span-3 text-center sm:text-left">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-6 border-l-2 border-primary pl-4 inline-block sm:block">
              Support
            </h3>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li className="flex items-center justify-center sm:justify-start gap-4 group cursor-pointer hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xs group-hover:text-white" />
                </div>
                <span className="text-xs sm:text-sm">joeanetsach@gmail.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-4 group cursor-pointer hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <FontAwesomeIcon icon={faPhone} className="text-xs group-hover:text-white" />
                </div>
                <span className="text-xs sm:text-sm">+225 XX XXX XX XX</span>
              </li>
            </ul>
          </div>

          {/* QR Code Section */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end">
            <h3 className="text-white font-black uppercase tracking-tighter text-[10px] mb-6 opacity-60">
              Accès Rapide PWA
            </h3>
            <div className="relative p-2 bg-white rounded-xl shadow-[0_0_30px_rgba(255,77,0,0.1)] group transition-transform hover:scale-105">
              <CodeQr />
              <div className="absolute -top-2 -right-2 bg-primary text-white text-[8px] font-black px-2 py-1 rounded-md uppercase tracking-tighter">
                Scan
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER BOTTOM --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Socials */}
          <div className="flex gap-4 order-2 md:order-1">
            {[ICON_FB, ICON_INSTA, ICON_TWIT].map((icon, i) => (
              <motion.a 
                key={i} 
                href="#" 
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all"
              >
                <Image src={icon} alt='social' width={16} height={16} className="opacity-40 hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>

          {/* Copyright & Signature */}
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 flex flex-col items-center md:items-end gap-3 order-1 md:order-2">
            <p>© {currentYear} PerfectBody+</p>
            <p className="flex items-center gap-2">
              Developed by <span className="text-primary italic tracking-normal text-xs">joeaDev</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer