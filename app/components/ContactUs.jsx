"use client"

import React from 'react';

import ICON_FACEBOOK from '../images/icons/facebook.png'
import ICON_INSTA from '../images/icons/instagram.png'
import ICON_TWEET from '../images/icons/twitter.png'
import Image from 'next/image';


function ContactUs() {
  return (
    <div id='ContactUs'>
      <div className="container">
        <div className='col'>
          <h1>Besoin d&quot;aide <br/> et de renseignements ?</h1>
          <p> Alors renseignez le formulaire </p>
            
        </div>
        <div className='col'>
          <form action="" method="post">
            <div className="form-group">
              <label htmlFor="name">Nom Complet</label>
              <input
                type="text"
                name="nom"
                id="name"
                placeholder='Entrez votre nom complet'
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adresse Électronique</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='Entrez votre adresse électronique ...'
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Numéro de Téléphone</label>
              <input
                type="tel"
                name="telephone"
                id="phone"
                placeholder='Entrez votre numéro de téléphone ...'
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Votre Message</label>
              <textarea
                name="message"
                id="message"
                placeholder='Entrez votre message'
                required
              ></textarea>
            </div>
            <button> Envoyer </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
