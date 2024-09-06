import React from 'react'

import Image from 'next/image'

import LOGO from '../images/logo/perfectBody_Logo.png'
function Loader() {
  return (
    <div id='Loader'>
        <div className="container">
            <Image src={LOGO} alt='logo'/>
            <div className="container-circle">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    </div>
  )
}

export default Loader