'use client'

import React, { useEffect, useState, use } from 'react'
import { blogArticles } from '@/app/data'
import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// Interface pour Next.js 15 (params est une Promise)
interface PageProps {
  params: Promise<{ id: string }>
}

function ArticlePage({ params }: PageProps) {
  // Déballage des params avec React.use()
  const resolvedParams = use(params)
  
  const { scrollYProgress } = useScroll()
  const [isFixed, setIsFixed] = useState(false)

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Récupération de l'article avec l'ID résolu
  const articleId = Number(resolvedParams.id)
  const article = blogArticles.find(data => data.id === articleId)

  if (!article) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white space-y-6">
        <h2 className="text-4xl font-black uppercase tracking-tighter">Article non trouvé</h2>
        <Link href="/blog" className="text-primary font-bold hover:underline">
          Retourner au blog
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-bg-dark min-h-screen pb-20 selection:bg-primary selection:text-white">
      {/* Barre de progression de lecture */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* HEADER NAVIGATION */}
      <nav className={`fixed w-full z-40 transition-all duration-500 px-6 py-4 ${
        isFixed ? 'bg-bg-dark/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/blog" className="group text-white/60 hover:text-white transition-all font-bold uppercase tracking-widest text-[10px] flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                <FontAwesomeIcon icon={faChevronLeft} className="text-[10px]" />
            </div>
            Retour au Blog
          </Link>
          
          {isFixed && (
             <motion.span 
               initial={{ opacity: 0, y: -10 }} 
               animate={{ opacity: 1, y: 0 }}
               className="text-[10px] font-black text-white uppercase tracking-[0.2em] hidden md:block"
             >
               {article.title}
             </motion.span>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        {/* Effet de lueur en arrière-plan */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-primary font-black uppercase tracking-[0.3em] text-[9px] mb-8"
          >
            {article.date} — Par {article.author}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9] italic"
          >
            {article.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl italic max-w-2xl mx-auto font-medium"
          >
            &quot;{article.subtitle}&quot;
          </motion.p>
        </div>
      </header>

      {/* IMAGE PRINCIPALE */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 mb-20"
      >
        <div className="relative h-[50vh] md:h-[75vh] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/5">
          <Image 
            src={article.image} 
            alt={article.title} 
            fill 
            className="object-cover scale-105 hover:scale-100 transition-transform duration-1000" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent" />
        </div>
      </motion.div>

      {/* CONTENU DE L'ARTICLE */}
      <article className="max-w-3xl mx-auto px-6 mb-32">
        <div className="space-y-16">
          {article.content.map((dt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="flex items-center gap-6 mb-8">
                <span className="text-5xl font-black text-primary/10 group-hover:text-primary/30 transition-colors italic">
                    0{idx + 1}
                </span>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">
                    {dt.subtitle}
                </h3>
              </div>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
                {dt.text}
              </p>
            </motion.div>
          ))}
        </div>
      </article>

      {/* FEEDBACK & ENGAGEMENT */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sondage Utilité */}
            <div className="bg-surface/30 backdrop-blur-md border border-white/5 p-12 rounded-[2.5rem] text-center flex flex-col justify-center">
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-8">Cet article vous a aidé ?</h3>
                <div className="flex justify-center gap-4">
                    <button className="flex-1 px-6 py-4 rounded-2xl bg-white text-bg-dark font-black uppercase text-[10px] tracking-[0.2em] hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95">Oui</button>
                    <button className="flex-1 px-6 py-4 rounded-2xl border border-white/10 text-white font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white/5 transition-all active:scale-95">Non</button>
                </div>
            </div>

            {/* Formulaire Commentaire */}
            <div className="space-y-6">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic border-l-4 border-primary pl-6">
                    Votre avis
                </h3>
                <form className="space-y-4">
                    <textarea 
                    className="w-full bg-surface/50 border border-white/10 rounded-[2rem] p-6 text-white focus:outline-none focus:border-primary transition-all min-h-[160px] text-sm font-medium placeholder:text-gray-700"
                    placeholder="Qu'en pensez-vous ?"
                    ></textarea>
                    <button className="w-full bg-primary text-white font-black uppercase px-10 py-5 rounded-2xl hover:shadow-[0_0_30px_rgba(255,77,0,0.3)] transition-all tracking-widest text-[10px]">
                    Publier mon commentaire
                    </button>
                </form>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ArticlePage