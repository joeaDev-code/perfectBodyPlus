import React from 'react'
import './index.scss'

import Navbar from '../components/Navbar'
import Banner from './components/Banner'
import Article from './article/page'


function page() {
  return (
    <div>
      <Banner />
      <Article />
    </div>
  )
}

export default page