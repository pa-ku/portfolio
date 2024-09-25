import React from 'react'
import SocialMedia from './SocialMedia'

export default function Header() {
  return (
    <>
      <div className='relative py-20 justify-center items-center '>
        <header className='md:w-[40em] px-5'>
          <div className=' animate-opacity w-full  flex flex-col justify-start items-start'>
            <h1 className='text-6xl font-extrabold '>Pablo Kuhn</h1>
            <p className='text-black'>
              Soy un <b>desarrolador frontend , fullstack</b> autodidacta que
              siempre esta buscando aprender cosas nuevas, avido Padelero 🥎
              Ciclista 🚴‍♂️ Guitarrista 🎸 y apasionado acampante 🏕️
            </p>
            <div className='pt-1'>
              <SocialMedia />
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
