import React from 'react'
import styled from 'styled-components'
import GithubIcon from '../assets/stackicons/githubicon.svg'

export default function ProyectTemplate({
  logoImgSrc,
  imgAlt,
  backgroundImg,
  backgroundAlt,
  title,
  description,
  href,
  githubLink,
  propIcons,
}) {
  return (
    <Wrapper>
      <LogoContainer className="logo-ctn" href={href} target="_blank">
        <LogoImage src={logoImgSrc} alt={imgAlt} />
        <MainImage
          className="page-img"
          src={backgroundImg}
          alt={backgroundAlt}
        />
      </LogoContainer>
      <InfoContainer>
        <TextContainer>
          <InfoTitle>{title}</InfoTitle>
          <InfoDescription>{description}</InfoDescription>
        </TextContainer>
        <StackContainer>
          {propIcons.map((item) => (
            <img src={item} alt={`icono ${item}`} />
          ))}
        </StackContainer>
      </InfoContainer>

      {githubLink && (
        <GithubCtn
          title="Proyecto en Github"
          target="blank"
          href={githubLink}
          className="github-ctn"
        >
          <img src={GithubIcon} alt="" />
        </GithubCtn>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 730px;
  height: 250px;
  opacity: 0;
  translate: -0px -10px;
  animation: 1s Show forwards;
  @media (max-width: 700px) {
    width: 100%;
    height: max-content;
  }

  @keyframes Show {
    100% {
      opacity: 1;
      translate: -0px -45px;
    }
  }

  &:hover .logo-ctn {
    outline-color: #cad1d8;
  }
`
const LogoContainer = styled.a`
  width: 150px;
  height: 140px;
  border-radius: 50px;
  background-color: #1f4560;
  position: absolute;
  transition: 400ms;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 5px solid #fff;
  padding: 15px;
  outline-offset: 3px;
  @media (max-width: 800px) {
    bottom: 0px;
    width: 100%;
    height: 60px;
    padding: 0px;
    border-radius: 0px 0px 20px 20px;
  }
  @media (min-width: 700px) {
    &:hover {
      width: 730px;
      height: 270px;

      border-radius: 20px;
      cursor: pointer;
      outline: 0px;
    }
    &:hover .logo-img {
      opacity: 0;
    }
    &:hover .page-img {
      opacity: 1;
      z-index: 10;
      border-radius: 20px;
      outline: 4px solid #cad1d8;
    }
  }
`

const InfoContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 650px;
  height: 250px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 20px 20px 30px 0px #f3f3f3;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    height: max-content;
    padding-bottom: 60px;
    padding-top: 20px;
    padding-inline: 10px;
  }
`

const LogoImage = styled.img`
  padding: 15px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 300ms;
  pointer-events: none;
  @media (max-width: 800px) {
    padding: 10px;
  }
`

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  z-index: 2;
  position: absolute;
  transition: 400ms;
  border-radius: 50px;
  object-position: top;
  pointer-events: none;
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
  @media (max-width: 800px) {
    flex-direction: row;
    padding: 10px;
    height: max-content;
  }
  & img {
    width: 33px;
    height: 33px;
    object-fit: contain;
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
