'use client'

import React from 'react'
import { blogArticles } from '@/app/data'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

function BlogArticles() {
  return (
    <section id='Articles' className="py-20 px-6 lg:px-16 bg-bg-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre de la section */}
        <div className="mb-16 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter"
          >
            Nos <span className="text-primary">Articles</span>
          </motion.h1>
          <div className="w-20 h-1.5 bg-primary mt-4 mx-auto lg:mx-0 rounded-full" />
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogArticles.map((dt, index) => (
            <motion.div
              key={dt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/article/${dt.id}`} className="group block h-full">
                <article className="flex flex-col h-full bg-surface/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                  
                  {/* Image de l'article */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={dt.image} 
                      alt={dt.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Contenu textuel */}
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3 block">
                      {dt.date}
                    </span>
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {dt.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {dt.subtitle}
                    </p>

                    {/* Footer de la carte */}
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-black text-primary border border-primary/30">
                          {dt.author.charAt(0)}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                          {dt.author}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                        <span className="text-white text-xs group-hover:translate-x-0.5 transition-transform">→</span>
                      </div>
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

export default BlogArticles