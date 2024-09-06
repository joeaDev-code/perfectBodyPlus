'use client'

import Image from 'next/image'

import IMG1 from '../images/tapisCourse.jpg'

import IMG_BG from '../images/big-dumbbells-white.jpg'

import { motion, AnimatePresence } from 'framer-motion'

import { equipement } from '../data'

import React, { useState } from 'react'

function Equipement() {

    const [item, setItem] = useState(1)

  return (
    <div id='Equipement'>
        <h1 className="subtitle-section"> <span className='nb'>2</span> Nos equipements ...</h1>   
            <motion.div 
                initial={{ opacity:0}}
                whileInView={{ opacity:1}}
                transition={{duration:1, delay:0.5, ease: "easeIn"}}
                className="container">
                    
                <AnimatePresence>
                {equipement.map((dt, index)=>
                item === dt.id && (                 
                <motion.div
                    key={dt.id}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    exit={{ x: '-50%', opacity: 0, transition: { duration: 0.5 } }}
                    className="boxEquipement">
                        <div className="img-container" >
                            <Image src={dt.Image} alt={dt.Title}/>
                        </div>
                        <div className="text-container">
                            <h3>  {dt.Title}</h3>
                            <p> {dt.Description}</p>
                        </div>
                    </motion.div>
                )
                )}
                </AnimatePresence>
            </motion.div>

        <div className="pagination">
            {equipement.map((dt, index)=> 
                <span key={index} onClick={()=>setItem(dt.id)} className={item === dt.id && 'active'}>{dt.id}</span>
            )}
        </div>

        <div className="imgBg">
            <Image src={IMG_BG} alt='image-bg' />
        </div>
    </div>
  )
}

export default Equipement