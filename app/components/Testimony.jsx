'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { testimony } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function Testimony() {
  return (
    <div id='Testimony'>
      <h1 className='title-section'> Ils nous ont fait confiance ... </h1>
      <div className="container">
        {testimony.slice(0,2).map((p, index) => (
          <motion.div 
            className="boxTestimony" 
            key={index}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Optionnel : décalage pour l'animation en cascade
          >
            <span className='icon'> <FontAwesomeIcon icon={faQuoteLeft} /></span>
            <p>{p.message}</p>
            <h4>{p.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Testimony
