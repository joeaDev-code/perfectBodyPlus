'use client'

import React from 'react'

function BoxService({title, desc}) {
  return (
    <div className='boxService'>
        <h3 className='title'> {title} </h3>
        <p>{desc}</p>
    </div>
  )
}

export default BoxService