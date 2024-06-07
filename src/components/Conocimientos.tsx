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
import sql from '../assets/images/stack_logos/sql.svg'
import TypeIcon from '../assets/images/stack_logos/typescript-ico.svg'
import ExpressIcon from '../assets/images/stack_logos/express-ico.svg'
import tailwindIco from '../assets/images/stack_logos/tailwind.svg'

import Text from './ui/Text'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3em;
  max-width: 60ch;
  padding-inline: 1em;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  gap: 5px;
  border-radius: 20px;
  padding: 0.8em 2em;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 700px) {
    width: 100%;
  }
`
const ConocimientoTitle = styled.p`
  font-weight: 600;
  font-size: 3rem;
  color: #f4f4f4;
  position: absolute;
  transform: translate(0px, -50px);
  text-align: center;
  left: 0px;
  right: 0px;
  pointer-events: none;
  z-index: -1;
  user-select: none;
  background: linear-gradient(to top, #fff, #eaeaea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 700px) {
    font-size: 5rem;
    transform: translate(0px, -70px);
  }
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80px;
  height: 80px;
  background-color: #ededed;
  padding:18px;
  border-radius: 20px;
  position: relative;
  &:hover {
    outline: 2px solid var(--pink-200);
  }

  &:hover p {
    opacity: 1;
  }
  &:hover img {
    opacity: 0;
  }

  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      #fc637c21,
      transparent 10%
    );
    position: absolute;
    pointer-events: none;
    border-radius: inherit;
    content: '';
    opacity: 0;
    transition: opacity 200ms;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    z-index: 2;
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
  transition: 200ms;
  border-radius: 5px;

  & svg {
    width: 100%;
    height: 100%;
  }
`

const IconText = styled.p`
  font-weight: 800;
  opacity: 0;
  transition: 0.2s;
  text-align: center;
  position: absolute;
  font-size: 0.8rem;
  border-radius: 20px;
  z-index: 100;
`

const ConocimientoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export default function Conocimientos() {
  const design = new Map([
    ['Figma', figmaIcon],
    ['Photoshop', photoshopIcon],
  ])
  const frontend = new Map([
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
    ['NodeJs', nodejsicon],
    ['MongoDb', mongo],
    ['SQL', sql],
    ['Github', githubIcon],
  ])

  return (
    <>
      <Wrapper>
        <RenderIcons title={'Diseño'} icons={design} />
        <RenderIcons title={'FrontEnd'} icons={frontend} />
        <RenderIcons title={'Backend'} icons={backend} />
        <RenderIcons
          title={'Estudios'}
          description={
            'Codo a codo Full Stack PHP Julio 2022 Curso web de 6 meses orientado a Php, con conocimientos de Sql, Javascript, Css y html'
          }
        />
      </Wrapper>
    </>
  )
}

interface IconProps {
  name?: string
  src?: string
  alt?: string
  iconName?: string
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
      <IconContainer ref={itemRef} onMouseMove={handleMouseMove}>
        <IconImage
          className="w-full h-full"
          loading="lazy"
          src={src}
          alt={alt}
        ></IconImage>
        <IconText className='text-pink-700'>{iconName}</IconText>
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

export function RenderIcons({ icons, title, description }: RenderIconsProps) {
  return (
    <>
      <ConocimientoContainer>
        <ConocimientoTitle>{title}</ConocimientoTitle>
        {icons ? (
          <IconWrapper className="">
            {[...icons].map(([name, component]) => (
              <Icon
                key={name}
                iconName={name}
                src={component}
                alt={`icono ${name}`}
              />
            ))}
          </IconWrapper>
        ) : (
          <Text>{description}</Text>
        )}
      </ConocimientoContainer>
    </>
  )
}
