import React from 'react'
import styled from 'styled-components'
import Subtitle from './ui/Subtitle'
import SocialMedia from './SocialMedia'
import Title from './ui/Title'
import Text from './ui/Text'
import AboutMe from './AboutMe'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70ch;

  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    scale: 0.9;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    padding-inline: 1em;
  }
`

type HeaderProps = {
  description: String
  subtitle: String
  title: string
}

export default function Header({ description, subtitle, title }: HeaderProps) {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Title color={'#555'} fontSize={'55px'}>
            {title}
          </Title>
          <Subtitle color={'#333'} fontSize={'30px'}>
            {subtitle}
          </Subtitle>
          <Text width={'40ch'}>{description}</Text>
          <SocialMedia />
        {/*   <AboutMe /> */}
        </Container>
      </HeaderWrapper>
    </>
  )
}
