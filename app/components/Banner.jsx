'use client'

import Image from 'next/image'
import IMG_BG from '../images/imageBanner2.jpg'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import React from 'react'

function Banner() {
  return (
    <section id='Banner' className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image avec Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={IMG_BG} 
          alt='Fitness Background' 
          fill 
          priority
          className="object-cover object-center grayscale-[20%]"
        />
        {/* Gradient pour le contraste (Noir vers transparent) */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/60 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 lg:px-16 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Surtitre optionnel pour le style */}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] text-sm mb-4 block"
          >
            FORGE TA DISCIPLINE
          </motion.span>

          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-6 text-white">
            PerfectBody <span className="text-primary">+</span>
          </h1>

          {/* CORRECTION : Remplacement de l'apostrophe par &apos; */}
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed border-l-2 border-primary/30 pl-6">
            Repoussez vos limites avec un accompagnement sur mesure. 
            Plus qu&apos;une salle de sport, une communauté dédiée à votre transformation physique et mentale.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to='contactUs' duration={500} smooth={true}>
              <button className="btn-premium">
                Nous Contacter
              </button>
            </Link>
            
            <Link to='Program' duration={500} smooth={true}>
              <button className="group flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-wider border border-white/20 hover:border-primary transition-all duration-300 bg-white/5 backdrop-blur-sm text-white">
                <span className="group-hover:text-primary transition-colors">Voir le planning</span>
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Indicateur de scroll en bas */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}

export default Banner;