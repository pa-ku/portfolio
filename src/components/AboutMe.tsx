import React, { useState } from 'react'
import styled from 'styled-components'
import Text from './ui/Text'
import MyImage from '../assets/img/my-img.png'
export default function AboutMe() {
  const [aboutMe, setAboutMe] = useState(false)

  function openAboutMe() {
    setAboutMe(aboutMe ? false : true)
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

      <AboutMeCtn animationActive={aboutMe}>
        <AboutMeDiv>
          <ImageCtn>
            <Image src={MyImage} alt="Mi imagen" />
          </ImageCtn>
          <DescriptionCtn>
            <Text>
              - Comence mi viaje en el desarrollo web hace 4 años con tutoriales
              como los de WebDevSimplified, ByteGrad, Conner Ardman, JoshComeaw,
              Midudev...
            </Text>
            <Text>
              - Como stack principal utilizo MERN y Typescript con los
              principios de de desarrollo SOLID y el patron MVC en backend.
            </Text>
            <Text>
              - Con un enfoque en la accesibilidad, escalabilidad, la
              responsividad de la web
            </Text>
          </DescriptionCtn>
        </AboutMeDiv>
      </AboutMeCtn>
    </>
  )
}

const DescriptionCtn = styled.div`
  padding: 10px;
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
  height: 200px;
  width: 100%;
`

const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`

const AboutMeCtn = styled.section<{
  animationActive: boolean
}>`
  height: 0px;
  opacity: 0;
  position: absolute;
  visibility: hidden;

  animation: ${(props) =>
    props.animationActive ? '500ms open forwards' : '400ms close forwards'};
  @keyframes open {
    0% {
      height: 0px;
      opacity: 0;
      position: relative;
    }
    30% {
      opacity: 0;
      height: 150px;
    }
    100% {
      opacity: 1;
      visibility: visible;
      height: 150px;
      position: relative;
    }
  }
  @keyframes close {
    0% {
      opacity: 1;
      height: 150px;
      position: relative;
    }
    30% {
      opacity: 0;
      height: 150px;
      position: relative;
    }
    100% {
      opacity: 0;
      height: 0px;
      position: relative;
    }
  }
`

const HeaderButton = styled.button<{ aboutMe: boolean }>`
  background-color: rgba(255, 0, 0, 0);
  border: 0px;
  font-size: 18px;
  cursor: pointer;
  padding: 15px;
  color: ${(props) =>
    props.aboutMe ? 'var(--pink-500);' : ' var(--blue-900);'};
  &:hover {
    color: ${(props) =>
      props.aboutMe ? 'var(--pink-300); ' : 'var(--blue-800);'};
  }
`
