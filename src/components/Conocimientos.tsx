import React from 'react'
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
import Text from './ui/Text'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3em;
  max-width: 60ch;
  padding-inline: 1em;

  text-align: center;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  background-color: var(--pink-50);
  border-radius: 20px;
  padding: 0.8em 2em;
  flex-wrap: wrap;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50px;
  position: relative;
  &:hover img {
    translate: 0px -15px;
    background-color: var(--pink-50);
  }
  &:hover p {
    translate: 0px 18px;
    opacity: 1;
  }
`

const IconImage = styled.img`
  width: 45px;
  height: 45px;
  transition: 0.3s;
  z-index: 100;
  transition: 300ms;
  border-radius: 5px;
`

const IconText = styled.p`
  font-weight: 800;
  color: #555;
  opacity: 0;
  transition: 0.5s;
  text-align: center;
  position: absolute;
  translate: 5px 20px;
  font-size: 14px;
`

const ConocimientoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export default function Conocimientos() {
  const design = [
    { component: figmaIcon, name: 'Figma' },
    { component: photoshopIcon, name: 'Photoshop' },
  ]
  const frontend = [
    { component: HtmlIcon, name: 'Html' },
    { component: CssIconn, name: 'Css' },
    { component: jsIcon, name: 'Javascript' },
    { component: ReactIcon, name: 'React' },
    { component: styledicon, name: 'Styled' },
  ]
  const backend = [
    { component: nodejsicon, name: 'Html' },
    { component: githubIcon, name: 'Html' },
    { component: mongo, name: 'Css' },
    { component: sql, name: 'Javascript' },
  ]
  return (
    <>
      <Wrapper>
        <RenderIcons title={'Design'} icons={design} />
        <RenderIcons title={'FrontEnd'} icons={frontend} />
        <RenderIcons title={'Backend'} icons={backend} />
        <RenderIcons
          title={'Estudios'}
          text={
            'Codo a codo Full Stack PHP Julio 2022 Curso web de 6 meses orientado a Php, con conocimientos de Sql, Javascript, Css y html'
          }
        />
      </Wrapper>
    </>
  )
}

interface IconProps {
  text?: string
  src?: string
  alt?: string
}
function Icon({ text, src, alt }: IconProps) {
  return (
    <>
      <IconContainer>
        <IconImage src={src} alt={alt}></IconImage>
        <IconText>{text}</IconText>
      </IconContainer>
    </>
  )
}

type RenderIconsProps = {
  icons?: any
  title: string
  text?: string
}

export function RenderIcons({ icons, title, text }: RenderIconsProps) {
  return (
    <>
      <ConocimientoContainer>
        <ConocimientoTitle>{title}</ConocimientoTitle>
        {icons ? (
          <IconWrapper>
            {icons.map((item) => (
              <Icon
                text={item.name}
                src={item.component}
                alt={`icono ${item.name}`}
              />
            ))}
          </IconWrapper>
        ) : (
          <Text>{text}</Text>
        )}
      </ConocimientoContainer>
    </>
  )
}

const ConocimientoTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #555;
`
