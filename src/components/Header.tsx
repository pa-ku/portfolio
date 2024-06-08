import React from 'react'
import styled from 'styled-components'
import Subtitle from './ui/Subtitle'
import SocialMedia from './SocialMedia'

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  letter-spacing: -2px;
  z-index: 1;
  height: max-content;
  height: 80px;
  font-size: 4rem;
  background: linear-gradient(to top, #767676, #4d4d4d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default function Header() {
  return (
    <>
      <header className="flex flex-col justify-center items-center">
        <Title>Pablo Kuhn</Title>
        <Subtitle fontSize={'2rem'}>FullStack Developer</Subtitle>
        <p className="text-gray-600 text-center w-80">
          Autodidacta enfocado en la creación de experiencias digitales
        </p>
        <div className="pt-1">
          <SocialMedia />
        </div>
      </header>
    </>
  )
}
