import React, { useRef } from 'react'
import styled from 'styled-components'
import jsIcon from '../assets/images/stack_logos/javascripticon.svg'
import CssIconn from '../assets/images/stack_logos/cssicon.svg'
import ReactIcon from '../assets/images/stack_logos/reacticon.svg'
import HtmlIcon from '../assets/images/stack_logos/htmlicon.svg'
import styledicon from '../assets/images/stack_logos/styledicon.svg'
import nodejsicon from '../assets/images/stack_logos/nodejsicon.svg'
import figmaIcon from '../assets/images/stack_logos/figmaicon.svg'
import photoshopIcon from '../assets/images/stack_logos/photoshopicon.svg'
import githubIcon from '../assets/images/stack_logos/githubicon.svg'
import mongo from '../assets/images/stack_logos/mongo.svg'
import sql from '../assets/images/stack_logos/sql.png'
import TypeIcon from '../assets/images/stack_logos/typescript-ico.svg'
import ExpressIcon from '../assets/images/stack_logos/express-ico.svg'
import tailwindIco from '../assets/images/stack_logos/tailwind.svg'
import NextjsIcon from '../assets/images/stack_logos/nextjs.svg'
import prismaIcon from '../assets/images/stack_logos/prisma.svg'
import Subtitle from './Subtitle'
import puppeterIcon from '../assets/images/stack_logos/puppeteer.png'

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80px;
  height: 80px;
  background-color: #f8f8f8;
  padding: 18px;
  border-radius: 50%;
  position: relative;
  outline: 2px solid #f0f0f0;
  &:hover {
    outline: 2px solid var(--primary-400);
  }
  & p {
    translate: 0px 40px;
    background-color: var(--primary-400);
    padding: 0px 7px;
    color: white;
  }
  &:hover p {
    opacity: 1;
  }
  &:hover img {
  }

  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      #fc637d3f,
      transparent 5%
    );
    position: absolute;
    pointer-events: none;
    border-radius: inherit;
    content: '';
    opacity: 0;

    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
  }
  &:hover::before {
    opacity: 1;
  }
`

const IconImage = styled.img`
  transition: 0.3s;
  z-index: 100;
  width: 100px;
  height: 100px;

  border-radius: 5px;
`

const IconText = styled.p`
  font-weight: 800;
  opacity: 0;
  transition: 100ms;
  text-align: center;
  position: absolute;
  font-size: 0.8rem;
  border-radius: 20px;
  z-index: 100;
`

export default function Conocimientos() {
  const design = new Map([
    ['Figma', figmaIcon],
    ['Photoshop', photoshopIcon],
  ])
  const frontend = new Map([
    ['NextJs', NextjsIcon],
    ['React', ReactIcon],
    ['TypeScript', TypeIcon],
    ['Javascript', jsIcon],
    ['Tailwind', tailwindIco],
    ['Styled', styledicon],
    ['Css', CssIconn],
    ['Html', HtmlIcon],
  ])
  const backend = new Map([
    ['Express', ExpressIcon],
    ['Prisma', prismaIcon],
    ['NodeJs', nodejsicon],
    ['MongoDb', mongo],
    ['SQL', sql],
    ['Github', githubIcon],
    ['Puppeteer', puppeterIcon],
  ])

  return (
    <>
      <section className=' rounded-xl flex flex-col flex-wrap items-center justify-center w-full gap-6 px-2 '>
        <Subtitle fontSize='3rem'>Conocimientos</Subtitle>
        <RenderIcons icons={design} />
        <RenderIcons icons={frontend} />
        <RenderIcons icons={backend} />
      </section>
    </>
  )
}

interface IconProps {
  name?: string
  src?: string
  alt?: string
  iconName?: string
}

export function RenderIcons({ icons, description }: RenderIconsProps) {
  return (
    <>
      <div className='p-2 relative flex flex-col justify-center items-center w-full md:w-[30em]'>
        <div className='flex flex-wrap justify-center gap-3'>
          {[...icons].map(([name, component]) => (
            <Icon
              key={name}
              iconName={name}
              src={component}
              alt={`icono ${name}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function Icon({ iconName, src, alt }: IconProps) {
  const itemRef = useRef(null)
  const handleMouseMove = (e) => {
    const card = itemRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <>
      <IconContainer className='' ref={itemRef} onMouseMove={handleMouseMove}>
        <IconImage
          className='w-full h-full drop-shadow-md'
          loading='lazy'
          src={src}
          alt={alt}
        ></IconImage>
        <IconText className='text-primary-300'>{iconName}</IconText>
      </IconContainer>
    </>
  )
}

type RenderIconsProps = {
  icons?: any
  title: string
  description?: string
  iconName?: string
}
