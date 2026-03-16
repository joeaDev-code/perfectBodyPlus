'use client'

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dataProgram } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function Program() {
  const [idContent, setIdContent] = useState(dataProgram[0]?.id || 1);
  const sectionRef = useRef(null);

  const currentContent = dataProgram.find((data) => data.id === idContent) || dataProgram[0];

  const handleDaySelect = (id) => {
    setIdContent(id);
    if (sectionRef.current) {
      // On ne scroll que sur desktop pour ne pas désorienter sur mobile
      if (window.innerWidth > 1024) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="Program" 
      className="relative py-16 md:py-24 bg-bg-dark min-h-screen overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        <div className="mb-10 md:mb-12">
          <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">Planning</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight">
            Planning des cours
          </h2>
        </div>

        {/* NAVIGATION DES JOURS : Mobile (Scroll) vs Desktop (Sidebar) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Version Mobile : Liste Horizontale Scrollable */}
          <nav className="w-full lg:hidden overflow-x-auto no-scrollbar flex gap-3 pb-4 sticky top-0 z-20 bg-bg-dark/80 backdrop-blur-md">
            {dataProgram.map((p) => (
              <button
                key={p.id}
                onClick={() => handleDaySelect(p.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                  idContent === p.id 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-white/5 text-gray-400 border border-white/5"
                }`}
              >
                {p.jour}
              </button>
            ))}
          </nav>

          {/* Version Desktop : Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-24">
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

          {/* CONTENU PRINCIPAL */}
          <main className="flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={idContent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-surface/40 border border-white/5 rounded-2xl md:rounded-3xl p-5 md:p-10 backdrop-blur-md"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                  <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white">
                    {currentContent.jour} 
                    <span className="text-primary text-xs not-italic ml-3 font-medium bg-primary/10 px-3 py-1 rounded-full">
                      Programmation
                    </span>
                  </h3>
                </div>

                <div className="grid gap-4 md:gap-6">
                  {currentContent.program.map((p, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group p-4 md:p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-6">
                          <div className="flex items-center gap-2 text-primary bg-primary/5 self-start px-4 py-1.5 rounded-lg border border-primary/10">
                            <FontAwesomeIcon icon={faClock} className="text-xs" />
                            <span className="font-black text-sm md:text-base whitespace-nowrap">
                              {p.horaire}
                            </span>
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">
                            {p.activite}
                          </h4>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
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