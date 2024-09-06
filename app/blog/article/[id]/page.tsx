'use client'

import React, { useEffect, useState } from 'react'
import { blogArticles } from '@/app/data'
import './article.scss'

import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'

import Image from 'next/image'

import LOGO from '../../../images/logo/perfectBody_Logo.png'

function Page({ params }: { params: { id: string }}) {
  const { scrollYProgress } = useScroll()
  const [isFixed, setIsFixed] = useState(false)

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      setIsFixed(scrollPosition > (viewportHeight * 0.6))
    }

    window.addEventListener('scroll', handleScroll)
    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Convertir params.id en nombre si nécessaire
  const articleId = Number(params.id)

  // Recherchez l'article correspondant à l'id
  const fetchArticle = blogArticles.find(data => data.id === articleId)

  return (
    <div>
      {fetchArticle ? (
        <div className='each'>
        <motion.div
          className={`progress-bar ${isFixed ? 'fixed' : ''}`}
          style={{ scaleX }}
        />
          <div className="BannerItemArticle">
            <h1 className='header'>
              <Link href={'/'}>   
              <div id="logo">
                <Image src={LOGO} alt='logo'/>
              </div>
              </Link>
              <Link href={'/blog'}>
                Blog
              </Link>
              </h1>
            <h1>{fetchArticle.title}</h1>
            <h2>{fetchArticle.subtitle}</h2>
          </div> 
   
          <div className='content'>
            <div className="img-container">
              <Image src={fetchArticle.image} alt=''/>
            </div>
            
          <div className="info">
            <h4>{fetchArticle.author} | {fetchArticle.date} </h4>
          </div>
            {fetchArticle.content.map(dt =>
              <div className="item" key={dt.subtitle}>
                <h3>{dt.subtitle}</h3>
                <p>{dt.text}</p>
              </div>
            )}
          </div>
          <div className="navigation">
            <Link href='/blog'>
              <button>{'<<'} BLOG</button>
            </Link>
            <div></div>
            <Link href={`/blog/article/${fetchArticle.id + 1}`}>
              <button>Prochain article {'>>'}</button>
            </Link>
          </div>
          
          <div className='avis'>
            <div className="container"> 
            <h1> Cet article vous a t-il été utile ?</h1>
            <div className="btn-container">
              <button> OUI </button>
              <button>NON</button>
            </div>
            </div>
          </div>
          
          <div className="commentaire">
            <h1> Laissez un commentaire </h1>
            <form action="">
              <label htmlFor="comment"> Commentaire :</label>
              <textarea name="comment" id="comment"></textarea>
              <button> Envoyer</button>
            </form>
          </div>
        </div>



      ) : (
        <p>Article non trouvé</p>
      )}
    </div>
  )
}

export default Page
