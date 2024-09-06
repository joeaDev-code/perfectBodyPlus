'use client'

import Image from 'next/image'

import ImgBG from '../images/bgHeader.jpg'
import IMG_1 from '../images/imgBanner_1.jpg'
import IMG_2 from '../images/imgBanner_2.jpg'
import IMG_3 from '../images/imgBanner_3.jpg'

import Program from './Program'

import { Link } from 'react-scroll'

import { easeInOut, motion } from 'framer-motion'

//icon

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'

function Banner() {

  const [wantOpenProgram, setWantOpenProgram]= useState(false)

  return (
    <div id='Banner'>
      <div className="col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2, ease: easeInOut }}
        >
          <div className="ellipse"></div>
          <div className="ellipse"></div>
        </motion.div>

        <div className="textContainer">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.5, ease: easeInOut }}
          >
            Transformez votre potentiel en performance
          </motion.h1>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.5, ease: easeInOut }}
          className="btn-container"
        >
          
            <button className='tarifBtn' onClick={()=>setWantOpenProgram(true)}> PROGRAMME </button>
         
          <Link smooth={true} duration={200} to='ContactUs'>
            <button className='contactBtn'> CONTACTER</button>
          </Link>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
        className="bgImage"
      >
        <Image src={ImgBG} alt="image-banner"/>
      </motion.div>

      <div className="imgContainer">
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1.5, ease: easeInOut }}
          className="imgBox"
        >
          <Image src={IMG_1} alt="image-banner"/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, duration: 1.5, ease: easeInOut }}
          className="imgBox"
        >
          <Image src={IMG_2} alt="image-banner"/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 1.5, ease: easeInOut }}
          className="imgBox"
        >
          <Image src={IMG_3} alt="image-banner"/>
        </motion.div>
      </div>
      <Program open={wantOpenProgram}/>
    </div>
  )
}

export default Banner;
