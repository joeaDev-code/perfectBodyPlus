"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import ICON_FACEBOOK from '../images/icons/facebook.png'
import ICON_INSTA from '../images/icons/instagram.png'
import ICON_TWEET from '../images/icons/twitter.png'

function ContactUs() {
  const socialLinks = [
    { icon: ICON_FACEBOOK, alt: 'Facebook', href: '#' },
    { icon: ICON_INSTA, alt: 'Instagram', href: '#' },
    { icon: ICON_TWEET, alt: 'Twitter', href: '#' },
  ];

  return (
    <section id='ContactUs' className="py-24 px-6 lg:px-16 bg-bg-dark relative overflow-hidden">
      {/* Cercle lumineux décoratif */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- COLONNE INFOS --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">
              Besoin d&apos;aide <br/> 
              <span className="text-primary">et de renseignements ?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md italic border-l-2 border-primary pl-6">
              Notre équipe est prête à vous accompagner. Renseignez le formulaire et nous vous répondrons sous 24h.
            </p>
          </div>

          <div className="pt-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Suivez-nous</h4>
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Image 
                    src={social.icon} 
                    alt={social.alt} 
                    width={20} 
                    height={20} 
                    className="grayscale group-hover:grayscale-0 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- COLONNE FORMULAIRE --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface/50 border border-white/5 p-8 md:p-12 rounded-[2rem] backdrop-blur-md"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Nom Complet</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-bg-dark border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700"
                  placeholder='John Doe'
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-bg-dark border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700"
                  placeholder='+225 ...'
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Adresse Électronique</label>
              <input
                type="email"
                id="email"
                className="w-full bg-bg-dark border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700"
                placeholder='contact@exemple.com'
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Votre Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full bg-bg-dark border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700 resize-none"
                placeholder='Comment pouvons-nous vous aider ?'
                required
              ></textarea>
            </div>

            <button className="w-full bg-primary text-white font-black uppercase tracking-[0.2em] py-5 rounded-xl hover:bg-white hover:text-primary transition-all duration-300 shadow-lg shadow-primary/20">
              Envoyer le message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactUs;