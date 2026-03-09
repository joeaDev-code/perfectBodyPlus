'use client'

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dataProgram } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCalendarDay } from "@fortawesome/free-solid-svg-icons";

function Program() {
  const [idContent, setIdContent] = useState(dataProgram[0]?.id || 1);
  const [isWantOpenNav, setIsWantOpenNav] = useState(false);
  
  // CORRECTION : Pas de types TypeScript dans un fichier .jsx
  const sectionRef = useRef(null);

  const currentContent = dataProgram.find((data) => data.id === idContent) || dataProgram[0];

  const handleDaySelect = (id) => {
    setIdContent(id);
    setIsWantOpenNav(false);

    // Sécurité : Vérifier que la ref existe avant d'appeler scrollIntoView
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="Program" 
      className="relative py-24 bg-bg-dark min-h-[600px] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-full">
        
        <div className="mb-12">
          <h2 className="section-title text-white">Planning des cours</h2>
          <p className="text-gray-400 mt-4">Organisez votre semaine pour atteindre vos objectifs.</p>
        </div>

        <div className="relative flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Bouton Mobile flottant */}
          <button 
            onClick={() => setIsWantOpenNav(!isWantOpenNav)}
            className="lg:hidden fixed bottom-30 right-10 z-[110] bg-primary text-white w-14 h-14 rounded-full shadow-[0_0_30px_rgba(255,77,0,0.4)] flex items-center justify-center animate-bounce hover:animate-none transition-all active:scale-90"
          >
            <FontAwesomeIcon icon={isWantOpenNav ? faAnglesRight : faCalendarDay} />
          </button>

          {/* Navigation latérale */}
          <aside className={`
            fixed inset-y-0 left-0 z-[100] w-72 bg-surface p-8 transform transition-transform duration-500 ease-in-out lg:relative lg:translate-x-0 lg:z-10 lg:rounded-3xl lg:border lg:border-white/5
            ${isWantOpenNav ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
          `}>
            <h5 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">Sélectionner un jour</h5>
            <ul className="space-y-3">
              {dataProgram.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => handleDaySelect(p.id)}
                    className={`w-full text-left px-6 py-4 rounded-xl font-bold transition-all duration-300 flex justify-between items-center group ${
                      idContent === p.id 
                        ? "bg-primary text-white scale-105 shadow-lg shadow-primary/20" 
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {p.jour}
                    <div className={`w-2 h-2 rounded-full transition-all ${idContent === p.id ? "bg-white scale-150" : "bg-transparent border border-white/20 group-hover:border-primary"}`} />
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Overlay Mobile */}
          <AnimatePresence>
            {isWantOpenNav && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsWantOpenNav(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90] lg:hidden"
              />
            )}
          </AnimatePresence>

          {/* Contenu principal */}
          <main className="flex-1 w-full h-full min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={idContent}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-surface/50 border border-white/5 rounded-3xl p-8 lg:p-12 backdrop-blur-md"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-8">
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter text-white">
                    {currentContent.jour} <span className="text-primary text-sm not-italic ml-2 font-light">Programmation</span>
                  </h3>
                </div>

                <div className="grid gap-6">
                  {currentContent.program.map((p, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group p-6 rounded-2xl bg-white/5 border border-transparent hover:border-primary/30 transition-all hover:bg-white/[0.07]"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                          <span className="text-primary font-black text-lg bg-primary/10 px-4 py-1 rounded-lg min-w-[120px] text-center">
                            {p.horaire}
                          </span>
                          <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                            {p.activite}
                          </h4>
                        </div>
                        <p className="text-gray-400 text-sm max-w-md italic">
                          {p.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
}

export default Program;