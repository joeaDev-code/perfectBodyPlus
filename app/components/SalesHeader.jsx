'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function SalesHeader() {
  const whatsappUrl = "https://wa.me/2250501585538?text=Bonjour%20JoeaDev%2C%20je%20souhaite%20connaître%20le%20prix%20pour%20l'achat%20du%20site%20PerfectBody%2B"

  return (
    <motion.div 
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-200 w-full bg-primary py-2.5 px-6 flex items-center justify-center gap-4 overflow-hidden"
    >
      {/* Animation de lueur qui passe sur la barre */}
      <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
      />

      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faCartShopping} className="text-white text-xs animate-bounce" />
        <p className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em]">
          Opportunité : Ce projet <span className="underline decoration-white/50 underline-offset-4 font-black text-bg-dark italic px-1">est à vendre</span> — Prêt pour votre business
        </p>
      </div>

      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-bg-dark text-white text-[9px] font-black px-4 py-1.5 rounded-full hover:bg-white hover:text-primary transition-all group tracking-tighter"
      >
        ACHETER MAINTENANT
        <FontAwesomeIcon icon={faArrowRight} className="text-[8px] group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  )
}