'use client'

import BoxService from './BoxService'
import React from 'react'
import { services } from '../data/index'
import { motion } from 'framer-motion'

function Service() {
  return (
    <div id='Service'>
      <motion.h1
        className="title-section"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        Nos services
      </motion.h1>

      <motion.p
        className='subtitle-section'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2, ease: 'easeInOut' }}
      >
        Explorez nos services adaptés à tous les niveaux, conçus pour vous offrir une expérience de fitness optimale. Profitez de nos équipements modernes et de nos forfaits flexibles pour atteindre vos objectifs de bien-être.
      </motion.p>

      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
      >
        {services.slice(0, 8).map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeInOut' }}
          >
            <BoxService title={p.title} desc={p.description} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Service;
