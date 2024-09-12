import React from 'react'
import Subtitle from './Subtitle'
import SocialMedia from './SocialMedia'

export default function Header() {
  return (
    <>
      <header className='animate-opacity flex flex-col justify-center items-center'>
        <h1 className='text-7xl text-transparent font-extrabold bg-clip-text bg-gradient-to-t from-gray-500 to-gray-700'>
          Pablo Kuhn
        </h1>
        <Subtitle className='text-4xl'>Full-Stack Developer</Subtitle>

        <p className='text-black text-center w-80'>
          Autodidacta enfocado en la creación de experiencias digitales
        </p>
        <div className='pt-1'>
          <SocialMedia />
        </div>
      </header>
    </>
  )
}
