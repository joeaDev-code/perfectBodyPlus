'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Imports des ressources
import IMG1 from '../../images/imgBannerBlog.jpg'
import LOGO from '../../images/logo/logo.png'

function Banner() {
  return (
    <header id='BannerBlog' className="relative h-[70vh] w-full overflow-hidden bg-bg-dark">
      
    

      {/* --- IMAGE DE FOND AVEC OVERLAY --- */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src={IMG1} 
          alt='Fitness Inspiration' 
          fill 
          className="object-cover object-center grayscale-[30%]"
          priority
        />
        {/* Gradient pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/40 via-bg-dark/20 to-bg-dark" />
      </motion.div>

      {/* --- CONTENU TEXTUEL --- */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-primary font-black tracking-[0.5em] uppercase text-xs mb-4 block">
            Articles & Conseils
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
            BLOG<span className="text-primary">+</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-gray-300 text-lg md:text-xl font-medium italic leading-relaxed border-l-4 border-primary pl-6 py-2">
            &quot;Inspiration et Connaissance : Des Articles pour Affiner Votre Entraînement&quot;
          </p>
        </motion.div>

        {/* Petit indicateur de défilement */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </div>

    </header>
  )
}

export default Banner