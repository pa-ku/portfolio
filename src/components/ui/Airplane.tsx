/* import planeSvg from '../assets/img/plane.webp' */
import styled from 'styled-components'
import React from 'react'

const Plane = styled.img`
  position: absolute;
  top: -150px;
  width: 90px;
  rotate: 20deg;
  animation: planeTAKEOFF 30s forwards;
  z-index: 150;
  pointer-events: none;

  @keyframes planeTAKEOFF {
    0% {
      translate: -45vw 60px;
      rotate: 10deg;
      visibility: hidden;
    }

    40% {
      visibility: visible;
      rotate: 22deg;
      translate: 50vw 100px;
    }

    60% {
      opacity: 1;
      rotate: 22deg;
      translate: 50vw 100px;
    }

    70% {
      opacity: 1;
    }

    90% {
      rotate: 17deg;
      opacity: 0;
      translate: 100vw 90px;
      visibility: hidden;
      display: none;
    }

    100% {
      translate: 100vw 50px;
      opacity: 0;
      visibility: hidden;
      display: none;
    }
  }

  @keyframes planeMobile {
    0% {
      translate: -45vw 80px;
      rotate: 10deg;
      visibility: hidden;
    }

    30% {
      visibility: visible;
      rotate: 22deg;
      translate: 40vw 110px;
    }

    60% {
      opacity: 1;
      rotate: 22deg;
      translate: 40vw 110px;
    }

    70% {
      opacity: 1;
    }

    90% {
      rotate: 17deg;
      opacity: 0;
      translate: 90vw 90px;
      visibility: hidden;
      display: none;
    }

    100% {
      translate: 90vw 90px;
      opacity: 0;
      visibility: hidden;
      display: none;
    }
  }
  @media (max-width: 700px) {
    width: 70px;
    animation: planeMobile 25s forwards;
  }
`

export default function Airplane({ src }) {
  return (
    <>
      <Plane src={src} alt="Imagen Avion flybondi" />
    </>
  )
}
