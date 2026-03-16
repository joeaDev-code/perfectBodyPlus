'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import IMG_BG from '../images/big-dumbbells-white.jpg'
import { equipement } from '../data'

function Equipement() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Gestion du défilement manuel
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 1.5 
        : scrollLeft + clientWidth / 1.5;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Mise à jour de l'état des boutons de navigation
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const node = scrollRef.current;
    if (node) {
      node.addEventListener('scroll', checkScroll);
      checkScroll(); // Vérification initiale
      return () => node.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section id='Equipement' className="relative py-24 bg-bg-dark overflow-hidden">
      
      {/* Background avec Parallaxe statique */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src={IMG_BG} 
          alt='background' 
          fill 
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-transparent to-bg-dark" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* HEADER : Titre + Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-4 text-white">
              <span className="text-primary/20 outline-text">02</span>
              Equipement
            </h2>
            <div className="w-24 h-1.5 bg-primary mt-4 rounded-full" />
          </motion.div>

          {/* Boutons de Navigation Custom */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all ${
                canScrollLeft ? 'border-primary text-primary hover:bg-primary hover:text-white cursor-pointer' : 'border-white/10 text-white/10 cursor-not-allowed'
              }`}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all ${
                canScrollRight ? 'border-primary text-primary hover:bg-primary hover:text-white cursor-pointer' : 'border-white/10 text-white/10 cursor-not-allowed'
              }`}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        {/* CONTAINER DU SWIPER SUR MESURE */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12 transition-all"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {equipement.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[85%] md:min-w-[45%] lg:min-w-[31%] snap-center group"
            >
              <div className="relative bg-surface/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-5 transition-all duration-500 hover:border-primary/40 hover:bg-surface/50">
                
                {/* Image Card */}
                <div className="relative h-80 w-full rounded-[2rem] overflow-hidden bg-bg-dark border border-white/5 shadow-2xl">
                  <Image 
                    src={item.Image} 
                    alt={item.Title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                  />
                  
                  {/* Badge de catégorie ou numéro */}
                  <div className="absolute top-6 left-6 bg-primary/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-full tracking-widest uppercase">
                    Premium Gear
                  </div>

                  {/* Overlay progressif au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Titre sur l'image */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-black uppercase text-white tracking-tighter leading-none group-hover:text-primary transition-colors">
                      {item.Title}
                    </h3>
                  </div>
                </div>

                {/* Footer de la Card */}
                <div className="mt-6 px-2 flex justify-between items-center">
                   <span className="text-white/20 font-black italic text-4xl">0{index + 1}</span>
                   <div className="h-[1px] flex-1 mx-4 bg-white/5 group-hover:bg-primary/20 transition-all" />
                   <motion.div 
                     whileHover={{ x: 5 }}
                     className="text-primary text-xs font-black uppercase tracking-widest cursor-pointer"
                   >
                      Détails +
                   </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Style Global pour masquer la scrollbar native */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .outline-text {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.05);
          color: transparent;
        }
      `}</style>
    </section>
  )
}

export default Equipement;