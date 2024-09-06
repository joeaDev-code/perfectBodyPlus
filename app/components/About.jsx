'use client';

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function About() {
  return (
    <div id="About">
      {/* Texte principal avec animation */}
      <motion.div 
        className="text-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.h1
          className="title-section"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
        >
          Pourquoi nous choisir ?
        </motion.h1>
        
        <motion.h1
          className="subtitle-section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        >
          <span className='nb'>1</span> QUI EST PERFECTBODY+, NOS VALEURS, NOS PRINCIPES, NOTRE MISSION ...
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }}
        >
          Bienvenue chez PerfectBody+ ! Nous sommes bien plus qu&apos;une simple salle de gym : nous sommes une communauté dédiée à votre bien-être et à vos objectifs de fitness. Depuis notre ouverture, notre mission est de créer un environnement motivant et inclusif où chacun peut progresser à son rythme. Chez PerfectBody+, vous trouverez des équipements modernes et des installations de pointe pour un entraînement optimal. Nous proposons une large gamme de cours collectifs, du yoga au HIIT, ainsi que des programmes de coaching personnalisé pour répondre à tous vos besoins. Nous croyons que le fitness est une expérience globale, c&apos;est pourquoi nous offrons également des conseils nutritionnels et des services de bien-être pour compléter votre routine. 
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeInOut" }}
        >
          Notre équipe passionnée est là pour vous soutenir et vous guider à chaque étape de votre parcours. Rejoindre PerfectBody+, c&apos;est faire le choix d&ops;un mode de vie sain et équilibré. Venez découvrir un lieu où chaque entraînement est une étape vers vos objectifs et où chaque membre est valorisé. Nous avons hâte de vous accueillir et de vous aider à transformer vos ambitions en réalité !
        </motion.p>
      </motion.div>

      {/* Swiper avec animation */}
      <motion.div
        className="img-container"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 1.5, ease: "easeInOut" }}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
        >
          <h1 className="title">Valeurs</h1>

          <SwiperSlide className="card">
            <motion.div 
              className="container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
            >
              <h4>Santé et Bien-être</h4>
              <p>
                Votre santé est notre priorité. Nous nous engageons à vous offrir un environnement qui favorise non seulement votre condition physique mais aussi votre bien-être général. Nous proposons des programmes variés, des conseils nutritionnels et des pratiques de bien-être pour vous aider à atteindre une qualité de vie optimale.
              </p>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide className="card">
            <motion.div 
              className="container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
            >
              <h4>Inclusivité et Respect</h4>
              <p>
                Chez PerfectBody+, chaque individu est le bienvenu. Nous croyons en un espace où tout le monde, quel que soit son niveau de forme physique, se sent respecté et inclus. Nous valorisons la diversité et nous nous engageons à créer un environnement où vous pouvez vous sentir à l’aise et motivé.
              </p>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide className="card">
            <motion.div 
              className="container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
            >
              <h4>Engagement et Motivation</h4>
              <p>
                Nous sommes là pour vous soutenir à chaque étape de votre parcours de fitness. Notre équipe vous encourage à rester motivé avec des objectifs clairs, des programmes variés et des résultats mesurables. Votre succès est notre succès, et nous sommes déterminés à vous aider à atteindre vos objectifs.
              </p>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide className="card">
            <motion.div 
              className="container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
            >
              <h4>Éducation et Formation</h4>
              <p>
                Nous nous engageons à vous fournir les connaissances et les outils nécessaires pour prendre des décisions éclairées sur votre fitness. Nos experts sont là pour vous offrir des formations sur les techniques d’entraînement, la nutrition et les meilleures pratiques, afin de vous permettre d’optimiser votre expérience et vos résultats.
              </p>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide className="card">
            <motion.div 
              className="container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            >
              <h4>Excellence et Innovation</h4>
              <p>
                Nous visons l&quot;excellence dans tous les aspects de notre service. Nous investissons dans des équipements de haute qualité et adoptons les dernières tendances en matière de fitness pour vous offrir une expérience moderne et efficace. Votre satisfaction est notre priorité, et nous nous efforçons constamment de surpasser vos attentes.
              </p>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
}

export default About;
