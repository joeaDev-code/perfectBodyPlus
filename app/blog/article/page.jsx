'use client'

import React from 'react'

import { blogArticles } from '@/app/data'

import Link from 'next/link'

import Image from 'next/image'

function page() {
  return (
    <div id='Articles'>
        <h1 className="title-section">
            Nos articles 
        </h1>
        <div className="container">
        {blogArticles.map(dt=>
            <Link href={`/blog/article/${dt.id}`} key={dt.id}>
        <div className="boxBlogA" key={dt.id}>
        <div className="img-container">
            <Image src={dt.image} alt={dt.title}/>
        </div>
        <div className="text-container">
          <h2> {dt.title} </h2>
          <p> {dt.subtitle}</p>
        </div>
        <div className="footer">
          <p className='date'>{dt.date}</p>
          <p className='Auteur'> {dt.author}</p>
        </div>
        </div>
            </Link>
        )}
      </div>
    </div>
  )
}

export default page