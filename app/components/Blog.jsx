'use client'

import React from 'react'
import { blogArticles } from '../data'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Blog() {
  return (
    <section id='Blog' className="py-24 px-6 lg:px-16 bg-bg-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Header de la section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-title text-white mb-6"
            >
              Le Blog <span className="text-primary">+</span>
            </motion.h2>
            <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-primary/20 pl-6 italic">
              Explorez nos conseils fitness, nutrition et bien-être pour atteindre vos objectifs. 
              Restez informé avec nos articles inspirants et pratiques.
            </p>
          </div>
          
          <Link href="/blog">
            <button className="group flex items-center gap-3 px-8 py-4 font-black uppercase tracking-widest border border-white/10 hover:border-primary transition-all duration-300">
              <span className="group-hover:text-primary transition-colors">Tout voir</span>
              <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.slice(0, 3).map((dt, index) => (
            <motion.div
              key={dt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/article/${dt.id}`} className="group block h-full">
                <article className="h-full flex flex-col bg-surface/30 border border-white/5 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500">
                  
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={dt.image} 
                      alt={dt.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                    />
                    {/* Badge Catégorie ou Date flottant */}
                    <div className="absolute top-4 left-4 bg-bg-dark/80 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
                      <span className="text-[10px] font-black text-primary uppercase tracking-tighter">
                        {dt.date}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {dt.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {dt.subtitle}
                    </p>

                    {/* Footer de la carte */}
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[10px] font-bold text-primary">
                          {dt.author.charAt(0)}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                          {dt.author}
                        </span>
                      </div>
                      <span className="text-primary text-xs font-black group-hover:translate-x-2 transition-transform duration-300">
                        LIRE →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog