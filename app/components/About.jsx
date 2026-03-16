'use client';

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles obligatoires
import "swiper/css";
import "swiper/css/pagination";

function About() {
  const values = [
    { title: "Santé et Bien-être", text: "Votre santé est notre priorité. Un environnement qui favorise votre condition physique et votre bien-être général." },
    { title: "Inclusivité et Respect", text: "Chaque individu est le bienvenu. Un espace où tout le monde se sent respecté, quel que soit son niveau." },
    { title: "Engagement et Motivation", text: "Nous vous soutenons à chaque étape avec des objectifs clairs et des programmes variés." },
    { title: "Éducation et Formation", text: "Des experts vous fournissent les outils : techniques d’entraînement et nutrition pour optimiser vos résultats." },
    { title: "Excellence et Innovation", text: "Équipements de haute qualité et dernières tendances pour une expérience moderne." }
  ];

  return (
    <section id="About" className="py-16 md:py-24 px-4 sm:px-6 lg:px-16 bg-bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* --- TEXTE PRINCIPAL --- */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase block">Découvrir</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight">
            L&apos;ADN PerfectBody+
          </h2>
          <div className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              Plus qu&apos;une salle, une communauté dédiée à vos objectifs. Notre mission est de créer un environnement inclusif avec des installations de pointe.
            </p>
          </div>
        </motion.div>

        {/* --- BLOC VALEURS (CORRIGÉ) --- */}
        <motion.div
          className="relative bg-[#1a1a1a] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl w-full self-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="absolute -top-4 left-8 bg-primary px-6 py-2 rounded-full z-30 shadow-lg">
            <span className="text-[10px] font-black uppercase tracking-widest text-white">Nos Valeurs</span>
          </div>

          <div className="w-full">
            <Swiper
              modules={[Pagination, Autoplay, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              // Paramètres critiques pour la visibilité
              observer={true}
              observeParents={true}
              className="w-full"
            >
              {values.map((val, index) => (
                <SwiperSlide key={index} className="flex flex-col justify-center min-h-[200px] md:min-h-[180px]">
                  <div className="pb-8">
                    <h4 className="text-xl md:text-2xl font-black uppercase text-primary mb-4 italic">
                      {val.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed italic text-sm md:text-base border-l-2 border-primary/20 pl-4">
                      &quot;{val.text}&quot;
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;