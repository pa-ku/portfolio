import React from 'react'
import styled from 'styled-components'

const TextStyle = styled.p<{ fontSize?: string; width?: string }>`
  font-size: 17px;
  max-width: ${(props) => props.width};
`
type TextProps = {
  children: any
  fontSize?: string
  width?: string
}

export default function Text({ children, fontSize, width }: TextProps) {
  return (
    <TextStyle width={width} fontSize={fontSize}>
      {children}
    </TextStyle>
  )
}
