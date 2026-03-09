'use client';

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function About() {
  const values = [
    { title: "Santé et Bien-être", text: "Votre santé est notre priorité. Nous nous engageons à vous offrir un environnement qui favorise non seulement votre condition physique mais aussi votre bien-être général." },
    { title: "Inclusivité et Respect", text: "Chez PerfectBody+, chaque individu est le bienvenu. Nous croyons en un espace où tout le monde se sent respecté et inclus, quel que soit son niveau." },
    { title: "Engagement et Motivation", text: "Nous sommes là pour vous soutenir à chaque étape. Notre équipe vous encourage avec des objectifs clairs et des programmes variés." },
    { title: "Éducation et Formation", text: "Nos experts vous fournissent les outils nécessaires : techniques d’entraînement, nutrition et meilleures pratiques pour optimiser vos résultats." },
    { title: "Excellence et Innovation", text: "Nous investissons dans des équipements de haute qualité et adoptons les dernières tendances pour une expérience moderne." }
  ];

  return (
    <section id="About" className="py-24 px-6 lg:px-16 bg-bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- TEXTE PRINCIPAL --- */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-2">Découvrir</span>
            <h2 className="section-title text-white">Pourquoi nous choisir ?</h2>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold flex items-center gap-4 text-white">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border border-primary text-primary font-black">1</span>
              L&apos;ADN PERFECTBODY+
            </h3>
            
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                Bienvenue chez <span className="text-white font-semibold">PerfectBody+</span> ! Nous sommes bien plus qu&apos;une simple salle de gym : nous sommes une communauté dédiée à votre bien-être et à vos objectifs de fitness. 
              </p>
              <p>
                Notre mission est de créer un environnement motivant et inclusif où chacun peut progresser à son rythme avec des installations de pointe et un coaching personnalisé. Rejoindre notre équipe, c&apos;est faire le choix d&apos;un mode de vie sain et équilibré.
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- SWIPER / VALEURS --- */}
        <motion.div
          className="relative bg-surface p-6 md:p-12 rounded-3xl border border-white/5 shadow-2xl w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge Titre sur le Swiper */}
          <div className="absolute -top-4 left-6 md:left-8 bg-primary px-6 py-2 rounded-full z-20">
            <span className="text-xs font-black uppercase tracking-tighter text-white">Nos Valeurs</span>
          </div>

          {/* Correction Visibilité Mobile : Ajout de h-auto et overflow-visible */}
          <div className="w-full relative">
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="pb-14 w-full"
            >
              {values.map((val, index) => (
                <SwiperSlide key={index}>
                  <div className="pt-6 md:pt-8">
                    <h4 className="text-xl md:text-2xl font-black uppercase text-primary mb-4 italic">
                      {val.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed italic text-sm md:text-base">
                      &quot;{val.text}&quot;
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Décoration de fond */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}

export default About;