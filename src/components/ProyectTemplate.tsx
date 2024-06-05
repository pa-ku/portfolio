import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import GithubIcon from '../assets/images/stack_logos/githubicon.svg'

type ProyectTemplate = {
  LogoSrc: string
  imgAlt: string
  ImgSrc: string
  backgroundAlt: string
  title: string
  description: string
  href: string
  githubLink: string
  propIcons: [string]
}

export default function ProyectTemplate({
  LogoSrc,
  ImgSrc,
  title,
  description,
  href,
  githubLink,
  propIcons,
}: ProyectTemplate) {
  const [isHover, setIsHover] = useState(false)

  const cardRef = useRef(null)
  function handleHover() {
    setIsHover(isHover ? false : true)
  }

  const handleMouseMove = (e) => {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <Wrapper>
      <LogoCtn
        title="Ver pagina"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className="logo-ctn"
        href={href}
        target="_blank"
      >
        <LogoImage
          className="logo-img"
          loading="lazy"
          src={LogoSrc}
          alt={`logo de ${title}`}
        />
      </LogoCtn>
      <InfoCtn ref={cardRef} onMouseMove={handleMouseMove}>
        <MainImage
          isHover={isHover}
          className="page-img"
          src={ImgSrc}
          alt={`imagen de ${title}`}
        />
        <TextContainer>
          <InfoTitle>{title}</InfoTitle>
          <InfoDescription>{description}</InfoDescription>
        </TextContainer>
        <StackContainer>
          {propIcons.map((item, index) => (
            <img key={index} src={item} alt={`icono ${item}`} />
          ))}
        </StackContainer>
      </InfoCtn>
      {githubLink && (
        <GithubCtn
          title="Proyecto en Github"
          target="blank"
          href={githubLink}
          className="github-ctn"
        >
          <img src={GithubIcon} alt="Github Link" />
        </GithubCtn>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  width: 730px;
  height: 240px;
  opacity: 0;
  translate: -20px -20px;
  animation: 600ms Show forwards;
  &:hover .logo-ctn {
    outline-color: var(--blue-200);
  }
  @media (max-width: 700px) {
    width: 100%;
    height: max-content;
  }

  @keyframes Show {
    100% {
      opacity: 1;
      translate: 0px -20px;
    }
  }
`
const LogoCtn = styled.a`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: var(--blue-800);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
  outline: 5px solid #fff;
  margin: 13px;
  outline-offset: 3px;
  transition: 200ms;

  @media (min-width: 700px) {
    &:hover {
      cursor: pointer;
      background-color: var(--blue-700);
      outline-offset: -1px;
    }
  }
  @media (max-width: 800px) {
    bottom: -30px;
    width: 80px;
    height: 80px;
    margin: 0px;
    right: 0;
    left: 0;
    margin: auto;
    border-radius: 50%;
    outline: 0px;
    padding: 0px;
  }
`

const InfoCtn = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  width: 660px;
  height: 240px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  z-index: 2;

  box-shadow: 20px 20px 30px 0px #f3f3f3;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    height: max-content;
    padding-bottom: 60px;
    padding-top: 20px;
    padding-inline: 10px;
  }
  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      #bcebff36,
      transparent 40%
    );

    position: absolute;
    pointer-events: none;
    border-radius: inherit;
    content: '';
    opacity: 0;
    transition: opacity 500ms;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    z-index: 1;
  }
  &:hover::before {
    opacity: 1;
  }
`

const LogoImage = styled.img`
  padding: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  object-fit: contain;

  transition: 300ms;
  pointer-events: none;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(3px 3px 0px #63c5e8);
  @media (max-width: 800px) {
    padding: 10px;
  }
`

const MainImage = styled.img`
  width: 660px;
  height: 100%;
  object-position: top;
  pointer-events: none;
  object-fit: cover;
  transition: 200ms ease-in;
  z-index: 2;
  opacity: ${(props) => (props.isHover ? '1' : '0')};
  position: absolute;
  border-radius: 20px;
`

const TextContainer = styled.div`
  margin-left: 120px;
  height: 100%;
  width: 100%;
  text-align: start;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    margin: 0px;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const StackContainer = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  padding-top: 10px;
  & img {
    width: 33px;
    height: 33px;
    object-fit: contain;
  }
  @media (max-width: 800px) {
    flex-direction: row;
    padding: 20px;
    height: max-content;
  }
`

const InfoTitle = styled.h2`
  font-size: 20px;
`
const InfoDescription = styled.div``

const GithubCtn = styled.a`
  background-color: var(--blue-800);
  padding: 4px;
  border-radius: 0px 20px 0px 20px;
  position: absolute;
  width: 60px;
  height: 35px;
  display: flex;
  z-index: 1;
  right: 0px;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  top: 0px;
  transition: 400ms;
  @media (max-width: 800px) {
    width: 50px;
  }
  &:hover {
    background-color: var(--blue-900);
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    color: #fff;
    filter: invert(1);
  }
`
