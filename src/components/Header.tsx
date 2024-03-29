import React from 'react'
import styled from 'styled-components'
import Subtitle from './ui/Subtitle'
import SocialMedia from './SocialMedia'

import Title from './ui/Title'
import Text from './ui/Text'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40ch;

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
}

export default function Header({ description, subtitle, title }) {
  return (
    <>
      <Wrapper>
        <Container>
          <Title color={'#333'} fontSize={'50px'}>
            {title}
          </Title>
          <Subtitle color={'#222'} fontSize={'30px'}>
            {subtitle}
          </Subtitle>

          <Text>{description}</Text>
          <SocialMedia />
          {/*    <MainButton  text={"Mas sobre mi"} /> */}
        </Container>
      </Wrapper>
    </>
  )
}
