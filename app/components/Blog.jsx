'use client'

import React from 'react'

import { blogArticles } from '../data'

import Image from 'next/image'

import Link from 'next/link'

function Blog() {
  return (
    <div id='Blog'>
      <h1 className="title-section"> Blog</h1>
      <p>Explorez nos conseils fitness, nutrition et bien-être pour atteindre vos objectifs de forme physique. Restez informé avec nos articles inspirants et pratiques.</p>
      <div className="container">
        {blogArticles.slice(0,5).map(dt=>
         <Link href={`/blog/article/${dt.id}`} key={dt.id}> 
            <div className="boxBlog" key={dt.id}>
        <div className="img-container">
            <Image  src={dt.image} alt={dt.title}/>
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

       <Link href="/blog"><button> VOIR PLUS </button></Link>
    </div>
  )
}

export default Blog