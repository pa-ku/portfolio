import React from 'react'
import styled from 'styled-components'

const Text = styled.p<{ $fontSize?: string; $color?: string }>`
  opacity: 1;
  animation: 1s subtitleAnimation forwards;
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.$color};
  background: linear-gradient(to right, var(--pink-400), #ff9831);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 2s ease forwards;
  font-weight: 600;
 
`

type SubtitleProps = {
  children: string
  fontSize?: string
  color?: string
}

const Subtitle: React.FC<SubtitleProps> = ({ children, fontSize, color }) => {
  return (
    <Text $color={color} $fontSize={fontSize}>
      {children}
    </Text>
  )
}

export default Subtitle
