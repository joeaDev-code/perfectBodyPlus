'use client'
import React from 'react';
import { tarif } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Tariffs = () => {
  return (
    <div id="Tarif">
      <motion.h1
        className='title-section'
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        Nos Tarifs
      </motion.h1>

      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.5, ease: 'easeInOut' }}
      >
        {tarif.map((tariff, index) => (
          <motion.div
            key={index}
            className="tariff-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeInOut' }}
          >
            <motion.h1 className='title'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {tariff.name}
            </motion.h1>

            <motion.span className="price"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {tariff.price}
            </motion.span>

            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {tariff.category}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              {tariff.description}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <h6>Offre inclut :</h6>
              {tariff.servicesIncluded.map((dt, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <FontAwesomeIcon icon={faCheck} className='icon' style={{ color: "#0d7000" }} /> {dt}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tariffs;
