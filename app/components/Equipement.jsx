'use client'

import Image from 'next/image'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import IMG_BG from '../images/big-dumbbells-white.jpg'

import { equipement } from '../data'

import React, { useState } from 'react'

function Equipement() {

    const [item, setItem] = useState(1)

  return (
    <div id='Equipement'>
        <h1 className="subtitle-section"> <span className='nb'>2</span> Nos equipements ...</h1>   
         
        <Swiper
      // install Swiper modules
      className='container'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      breakpoints={{
        0:{
            slidesPerView:1,
        },
        500:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
      }}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
        {equipement.map(item=>
        <SwiperSlide className="boxEquipement" key={item.id}>
            <div className="img-container">
                <Image src={item.Image} alt={item.Title}/>
            </div>
            <h3> {item.Title}</h3>
        
       
        </SwiperSlide>

        )}
    </Swiper>

    <div className="imgBg">
            <Image src={IMG_BG} alt='image-bg' />
            </div>
    </div>
  )
}

export default Equipement