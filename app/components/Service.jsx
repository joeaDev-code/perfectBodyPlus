'use client'

import BoxService from './BoxService'
import React from 'react'
import { services } from '../data/index'
import { motion } from 'framer-motion'

// Animation globale pour le conteneur
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

function Service() {
  return (
    <section id='Service' className="py-24 px-6 lg:px-16 bg-surface">
      <div className="max-w-7xl mx-auto">
        
        {/* Titres */}
        <div className="mb-16">
          <motion.h1
            className="section-title text-white"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Nos services
          </motion.h1>

          <motion.p
            className='text-gray-400 max-w-2xl text-lg mt-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explorez nos services adaptés à tous les niveaux. Profitez de nos équipements modernes 
            et de nos forfaits flexibles pour atteindre vos objectifs de bien-être.
          </motion.p>
        </div>

        {/* Grille Bento Responsive */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.slice(0, 8).map((p) => (
            <motion.div
              key={p.id}
              className="h-full"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {/* BoxService devra être stylisé pour remplir la hauteur du parent */}
              <BoxService title={p.title} desc={p.description} />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}

export default Service;