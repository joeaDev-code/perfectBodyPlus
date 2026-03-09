'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { testimony } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function Testimony() {
  return (
    <section id='Testimony' className="py-24 px-6 lg:px-16 bg-surface relative overflow-hidden">
      
      {/* Éléments de décoration en arrière-plan */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ils nous ont fait confiance
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimony.slice(0, 2).map((p, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-10 rounded-3xl bg-bg-dark/50 border border-white/5 backdrop-blur-sm group hover:border-primary/30 transition-all duration-500"
            >
              {/* Icône de citation stylisée */}
              <div className="absolute -top-5 left-10 w-12 h-12 bg-primary flex items-center justify-center rounded-2xl shadow-lg shadow-primary/20 rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-white text-xl" />
              </div>

              <div className="mt-4">
                <p className="text-gray-300 text-lg italic leading-relaxed mb-8">
                  &quot;{p.message}&quot;
                </p>
                
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  {/* Avatar Placeholder (Cercle avec initiale) */}
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-black">
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm">
                      {p.name}
                    </h4>
                    <span className="text-primary/60 text-xs font-medium uppercase">Membre PerfectBody+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimony