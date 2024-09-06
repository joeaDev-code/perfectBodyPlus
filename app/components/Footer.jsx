'use client'

import React from 'react'

import { Link } from 'react-scroll'

import CodeQr from './codeQr'

import Image from 'next/image'

import ICON_FB from '../images/icons/facebook.png'
import ICON_INSTA from '../images/icons/instagram.png'
import ICON_TWIT from '../images/icons/twitter.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div id='Footer'>
        <div className="container">
            <div className="logo">
                perfetBody+
            </div>
            <div className="lien">
                <h3> Lien utile</h3>
                <ul>
                    <Link to='About'>
                    <li> About</li></Link>
                    <Link to='Service'>
                    <li> Service</li></Link>
                    <Link to='Tarif'>
                    <li> Tarif</li></Link>
                    <Link to='ContactUs'>
                    <li>Contacts</li></Link>
                    <Link to='Blog'>
                    <li> Voir nos articles</li></Link>
                    <li>Emploi du temps</li>
                    <li>FAQ</li>

                </ul>
            </div>
            <div className='coordonnéé'>
                <h3>Coordonnées</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faEnvelope} className='icon'/> joeanetsach@gmail.com</li>
                    <li><FontAwesomeIcon icon={faPhone} className='icon'/> Telephone: +225 XX XXX XX XX X</li>
                    <li><FontAwesomeIcon icon={faLocation} className='icon'/>Adresse Geographique</li>
                </ul>
            </div>
            <div className="follow">
                <h3>Nous suivre</h3>
                <ul>
                    <li> <Image src={ICON_FB} alt='icon footer'/></li>
                    <li><Image src={ICON_INSTA} alt='icon footer'/></li>
                    <li><Image src={ICON_TWIT} alt='icon footer'/></li>
                </ul>
            </div>
            <div className="codeQr">
                <h3> Scannez le code pour visiter le site </h3>
                <CodeQr />
            </div>
            <div className="footer-bottom">
                <p>Site realisé par JoeaDev-code, 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer