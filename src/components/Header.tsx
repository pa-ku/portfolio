import React from 'react'
import styled from 'styled-components'
import Subtitle from './ui/Subtitle'
import SocialMedia from './SocialMedia'
import Text from './ui/Text'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70ch;
  opacity: 0;
  animation: 1s opacity forwards;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 1em;
  }
`

const Title = styled.h1`
  text-align: center;
  padding: 0px;
  width: max-content;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  pointer-events: none;
  letter-spacing: -2px;
  z-index: 1;
  height: max-content;
  height: 55px;
  font-size: 4rem;
  background: linear-gradient(to top, #767676, #4d4d4d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
          <Title>{title}</Title>
          <Subtitle color={'#333'} fontSize={'2.2rem'}>
            {subtitle}
          </Subtitle>
          <Text width={'40ch'}>{description}</Text>

          <SocialCtn>
            <SocialMedia />
          </SocialCtn>
        </Container>
      </HeaderWrapper>
    </>
  )
}

const SocialCtn = styled.div`
  padding-top: 10px;
`
