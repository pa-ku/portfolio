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
  const cardRef = useRef(null)

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
      <InfoCtn
        className="relative flex gap-2"
        ref={cardRef}
        onMouseMove={handleMouseMove}
      >
        <div className="w-full md:ml-20">
          <h2 className="text-xl font-bold text-gray-700">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <StackContainer>
          {propIcons.map((item, index) => (
            <img key={index} src={item} alt={`icono ${item}`} />
          ))}
        </StackContainer>

        <a
          title="Ver pagina"
          className="peer hover:brightness-105 md:-left-16 z-10 md:absolute flex rounded-xl md:rounded-full w-max h-max duration-200 cursor-pointer b-2 object-contain  hover:outline-offset-4 bg-gradient-to-bl from-[var(--blue-500)] to-[var(--blue-700)] shadow-sm 
          items-center 
          justify-center
          px-3
          md:p-0
          text-white
          "
          href={href}
          target="_blank"
        >
          <img
            className="object-contain drop-shadow-md p-2 brightness-140 w-20 h-14 p-2  md:w-[7.5em] md:h-[7.5em] peer  md:p-7"
            loading="lazy"
            src={LogoSrc}
            alt={`logo de ${title}`}
          />
        </a>
        <img
          className="absolute object-cover object-top w-full h-full duration-200 opacity-0 pointer-events-none md:peer-hover:opacity-100 rounded-3xl"
          src={ImgSrc}
          alt={`imagen de ${title}`}
        />
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
  box-shadow: 20px 20px 30px 0px #f3f3f3;
  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      #bcebff2a,
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
  }
  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    height: max-content;
    align-items: start;

    padding: 1em 1em;
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
    width: 100%;
    justify-content: start;
    height: max-content;
  }
`

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
