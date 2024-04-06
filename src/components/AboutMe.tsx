import React, { useState } from 'react'
import styled from 'styled-components'
import Text from './ui/Text'
import MyImage from '../assets/images/my-img.webp'
export default function AboutMe() {
  const [aboutMe, setAboutMe] = useState(false)
  const [displayButton, setDisplayButton] = useState(false)
  function openAboutMe() {
    setAboutMe(aboutMe ? false : true)
    setDisplayButton(true)
  }
  return (
    <>
      {aboutMe ? (
        <HeaderButton aboutMe={aboutMe} onClick={openAboutMe}>
          Ver menos
        </HeaderButton>
      ) : (
        <HeaderButton aboutMe={aboutMe} onClick={openAboutMe}>
          Más sobre mi...
        </HeaderButton>
      )}

      <AboutMeCtn display={displayButton} animationActive={aboutMe}>
        <AboutMeDiv>
          <ImageCtn>
            <Image loading="lazy" src={MyImage} alt="Mi imagen" />
          </ImageCtn>
          <DescriptionCtn>
            <Text>
              Comencé mi viaje en el desarrollo web hace 4 años, explorando
              tutoriales de creadores como WebDevSimplified, ByteGrad, Conner
              Ardman, JoshComeaw y Midudev..."
            </Text>
            <Text>
              Mi enfoque principal se centra en la accesibilidad, la
              escalabilidad y la responsividad de las aplicaciones web.
            </Text>
            <Text>
              Como stack utilizo MERN y Typescript, aplicando los principios de
              desarrollo SOLID junto con el patrón MVC en el backend.
            </Text>
          </DescriptionCtn>
        </AboutMeDiv>
      </AboutMeCtn>
    </>
  )
}

const DescriptionCtn = styled.div`
  & p {
    font-size: 16px;
  }
`

const AboutMeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const ImageCtn = styled.div`
  height: 100%;
  padding-right: 20px;
  width: 100%;
  @media (max-width: 700px) {
    height: 200px;
    padding: 10px;
  }
`

const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  border-radius: 20px;
`

const AboutMeCtn = styled.section<{
  animationActive: boolean
  display: boolean
}>`
  --height: 300px;
  box-shadow: 20px 20px 30px 0px #f3f3f3;

  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  display: ${(props) => (props.display ? 'block' : 'none')};
  animation: ${(props) =>
    props.animationActive ? '800ms open forwards' : '400ms close forwards'};
  @keyframes open {
    0% {
      height: 0px;
      opacity: 0;
      margin-bottom: 0px;
    }
    30% {
      opacity: 0;
      height: var(--height);
      margin-bottom: 20px;
    }
    100% {
      opacity: 1;
      height: var(--height);
      margin-bottom: 20px;
    }
  }
  @keyframes close {
    0% {
      opacity: 1;
      height: var(--height);
      margin-bottom: 20px;
    }
    30% {
      opacity: 0;
      height: var(--height);
      margin-bottom: 20px;
    }
    100% {
      opacity: 0;
      height: 0px;
      margin-bottom: 0px;
    }
  }

  @media (max-width: 700px) {
    --height: 490px;
  }
`

const HeaderButton = styled.button<{ aboutMe: boolean }>`
  background-color: rgba(255, 0, 0, 0);
  border: 0px;
  font-size: 18px;
  cursor: pointer;
  padding-bottom: 10px;
  color: ${(props) =>
    props.aboutMe ? 'var(--pink-500);' : ' var(--blue-900);'};
  &:hover {
    color: ${(props) =>
      props.aboutMe ? 'var(--pink-300); ' : 'var(--blue-800);'};
  }
`
