'use client'

import React from 'react'

function BoxService({ title, desc }) {
  return (
    <div className="group h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-500 hover:bg-white/[0.05] hover:border-primary/50 hover:-translate-y-2 flex flex-col justify-between">
      
      <div>
        {/* Petit indicateur visuel en haut à gauche */}
        <div className="w-8 h-[2px] bg-primary/20 group-hover:bg-primary group-hover:w-12 transition-all duration-500 mb-6" />
        
        <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors duration-300 mb-4">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {desc}
        </p>
      </div>

      {/* Icône décorative ou flèche en bas à droite (optionnel) */}
      <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-primary text-xs font-bold tracking-widest uppercase italic">
          En savoir plus +
        </span>
      </div>
      
    </div>
  )
}

export default BoxService