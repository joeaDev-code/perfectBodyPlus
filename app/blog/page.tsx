'use client'

import React from 'react'
// Pas besoin d'importer la page de détail ici, 
// on importe le composant qui liste les articles.
import Banner from './components/Banner'
import BlogArticles from './components/BlogArticles' 
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function BlogPage() {
  return (
    <main className="bg-bg-dark min-h-screen">
      {/* On peut réutiliser la Navbar globale. 
         Si elle est en 'fixed', elle couvrira le haut du banner 
      */}
      <Navbar activeSection="blog" />
      
      {/* Section d'en-tête spécifique au blog */}
      <Banner />
      
      {/* Liste de tous les articles avec la grille optimisée */}
      <div className="relative z-10 -mt-10"> 
        <BlogArticles />
      </div>

      <Footer />
    </main>
  )
}

export default BlogPage