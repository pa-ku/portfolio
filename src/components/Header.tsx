import React from 'react'
import SocialMedia from './SocialMedia'
import selfie from '../assets/selfie.webp'

export default function Header() {
  return (
    <>
      <div className='relative py-20 flex '>
        <header className='md:w-[30em]'>
          <div className=' w-full  flex flex-col '>
            <h1 className='text-6xl font-extrabold text-center md:text-start '>
              Pablo Kuhn
            </h1>
            <p className='  md:h-24 text-black text-center md:text-start'>
              Soy un <b>desarrolador frontend , fullstack</b> autodidacta que
              siempre esta buscando aprender cosas nuevas, avido Padelero 🥎
              Ciclista 🚴‍♂️ Guitarrista 🎸 y apasionado acampante 🏕️
            </p>
          </div>
          <div className='pt-2 h-11 justify-center flex md:justify-start'>
            <SocialMedia />
          </div>
        </header>
        <img
          className='hidden md:block size-44'
          src={selfie}
          alt='image of myself'
        />
      </div>
    </>
  )
}
