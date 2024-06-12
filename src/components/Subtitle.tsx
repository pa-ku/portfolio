import React from 'react'
import styled from 'styled-components'

const Text = styled.p<{ fontSize?: string; color?: string }>`
  opacity: 1;
  animation: 1s subtitleAnimation forwards;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background: linear-gradient(
    to right,
    var(--pink-400),
    #ff9831,
    var(--pink-400)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glowText 4s linear infinite;
  background-size: 200%;
  font-weight: 600;
  @keyframes glowText {
    from {
      background-position: 0% center;
    }
    to {
      background-position: -200% center;
    }
  }
`

type SubtitleProps = {
  children: any
  fontSize?: string
  color?: string
}

export default function Subtitle({ children, fontSize, color }: SubtitleProps) {
  return (
    <Text color={color} fontSize={fontSize}>
      {children}
    </Text>
  )
}
