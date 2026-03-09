'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faXmark, faCheckCircle, faRocket, faGlobe, faEnvelopeOpenText, faServer } from '@fortawesome/free-solid-svg-icons'

export default function SaleModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const whatsappNumber = "2250501585538"
  const message = encodeURIComponent("Bonjour JoeaDev, je suis intéressé par l'offre complète PerfectBody+ (Domaine, Emails, Hébergement 2 ans). Pouvons-nous en discuter ?")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    setIsMinimized(true)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[2000] flex items-end justify-center md:items-center p-6 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bg-dark/80 backdrop-blur-md pointer-events-auto"
              onClick={handleClose}
            />

            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              className="relative w-full max-w-lg bg-surface/90 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-[0_25px_60px_rgba(255,77,0,0.3)] pointer-events-auto overflow-hidden"
            >
              {/* Effet de lumière interne */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full" />

              <button 
                onClick={handleClose}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-10"
              >
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </button>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Offre Premium Tout-en-un</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter italic mb-4">
                  PROPRIÉTAIRE DE CE SITE <br/><span className="text-primary underline decoration-2 underline-offset-8 italic">MAINTENANT</span>
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Ne lancez pas seulement un site, lancez un <strong className="text-white">Business</strong>. L&apos;acquisition inclut tout le pack technique pour démarrer immédiatement :
                </p>

                {/* Grille des avantages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: faGlobe, text: "Nom de domaine personnalisé (.com, .ci...)", color: "text-blue-400" },
                    { icon: faEnvelopeOpenText, text: "2 Emails Professionnels (contact@votre-site.com)", color: "text-green-400" },
                    { icon: faServer, text: "Hébergement Premium offert (2 ANS)", color: "text-orange-400" },
                    { icon: faRocket, text: "Optimisation SEO & PWA incluse", color: "text-purple-400" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/5 p-3 rounded-2xl border border-white/5">
                      <FontAwesomeIcon icon={item.icon} className={`${item.color} mt-1`} />
                      <p className="text-[11px] font-bold text-gray-200 leading-snug">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-white text-bg-dark hover:bg-primary hover:text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-xl active:scale-95 group"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-xl group-hover:rotate-12 transition-transform" />
                    Réclamer cette offre
                  </a>
                  
                  <div className="text-center">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                      Webmaster : <span className="text-white">JoeaDev</span> — Abidjan, CI
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bouton de conversion réduit (Badge flottant) */}
      <AnimatePresence>
        {isMinimized && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="fixed bottom-8 right-8 z-[2000] pointer-events-auto"
          >
            <button 
              onClick={() => { setIsOpen(true); setIsMinimized(false); }}
              className="bg-primary hover:bg-white text-white hover:text-bg-dark flex items-center gap-3 px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(255,77,0,0.4)] transition-all duration-300 group"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="text-[11px] font-black uppercase tracking-widest">Acheter ce site</span>
              <FontAwesomeIcon icon={faRocket} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}