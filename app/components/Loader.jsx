'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo' // Import du composant Logo textuel

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-bg-dark flex items-center justify-center">
      <div className="relative flex flex-col items-center justify-center">
        
        {/* --- ANNEAUX ANIMÉS (Pulse effect) --- */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-primary/30 rounded-full"
              initial={{ width: 100, height: 100, opacity: 0.8 }}
              animate={{ 
                width: [100, 300], 
                height: [100, 300], 
                opacity: 0 
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* --- LOGO TEXTUEL CENTRAL --- */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.9, 1.05, 1], 
            opacity: 1,
            filter: ["drop-shadow(0 0 0px rgba(255,77,0,0))", "drop-shadow(0 0 15px rgba(255,77,0,0.5))", "drop-shadow(0 0 5px rgba(255,77,0,0.2))"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <Logo className="text-4xl md:text-5xl" />
        </motion.div>

        {/* --- BARRE DE CHARGEMENT SUBTILE --- */}
        <div className="mt-12 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* --- TEXTE DE CHARGEMENT --- */}
        <motion.p
          className="mt-6 text-[10px] font-black uppercase tracking-[0.5em] text-gray-500"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Initialisation...
        </motion.p>
      </div>
    </div>
  )
}

export default Loader