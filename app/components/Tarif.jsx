'use client';

import React from 'react';
import { tarif } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Tariffs = () => {
  return (
    <section id="Tarif" className="py-24 px-6 lg:px-16 bg-bg-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title inline-block"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Nos Tarifs
          </motion.h2>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Choisissez le forfait qui correspond à vos ambitions. Des options flexibles pour tous les styles de vie.
          </p>
        </div>

        {/* Grille des tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {tarif.map((tariff, index) => {
            // On vérifie si c'est la carte du milieu (souvent l'offre recommandée)
            const isPro = tariff.name.toLowerCase().includes('pro') || index === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative p-8 rounded-3xl transition-all duration-500 group ${
                  isPro 
                  ? "bg-surface border-2 border-primary scale-105 z-10 shadow-[0_0_40px_rgba(255,77,0,0.15)]" 
                  : "bg-surface/50 border border-white/5 hover:border-white/20"
                }`}
              >
                {isPro && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-widest">
                    Recommandé
                  </span>
                )}

                <div className="mb-8">
                  <h3 className={`text-xs font-black tracking-[0.3em] uppercase mb-2 ${isPro ? "text-primary" : "text-gray-500"}`}>
                    {tariff.category}
                  </h3>
                  <h4 className="text-3xl font-bold text-white mb-4">{tariff.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">{tariff.price}</span>
                    <span className="text-gray-500 text-sm italic">/ mois</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                  {tariff.description}
                </p>

                <div className="space-y-4 mb-10">
                  <h6 className="text-white text-sm font-bold uppercase tracking-tighter">L&apos;offre inclut :</h6>
                  <ul className="space-y-3">
                    {tariff.servicesIncluded.map((service, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <FontAwesomeIcon icon={faCheck} className="text-primary mt-1" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all ${
                  isPro 
                  ? "bg-primary text-white hover:bg-white hover:text-primary shadow-lg shadow-primary/20" 
                  : "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black"
                }`}>
                  Choisir ce pack
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tariffs;