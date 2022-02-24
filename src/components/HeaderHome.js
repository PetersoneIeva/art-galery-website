import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../assets/images/icon-arrow-right.svg'

import '../sass/components/_navbutton.sass'


const HeaderHome = () => {
  return (
    <div className='container-header'>
      <div className='bg-image'>
        <h1>Modern art gallery</h1>
        <p className='m'>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
        <Link to='./location'><button className='navButton'>Our location <img className='right-arrow' src={Arrow} /></button></Link>
      </div>

    </div>
  )
}

export default HeaderHome