'use client'

import Image from 'next/image'

import IMG_BG from '../images/imageBanner2.jpg'

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
      <div className="container">
        <div className="card text-container">
            <h1> PerfectBody +</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, tempore voluptate. Sequi quasi eveniet debitis quibusdam, minus eum illo mollitia commodi nam, culpa modi nemo. Vel hic ad perspiciatis eius.</p>
            <Link to='ContactUs' duration={300} smooth={true}>
                <button> Nous Contacter</button>
            </Link>
            <Link to='Program' duration={300} smooth={true}>
               <button> Voir le planning</button>
            </Link>
        </div>
      </div>
      
      <div className="img-bg">
          <Image src={IMG_BG} alt='image bg'/>
        </div>
   </div>
  )
}

export default Banner;
