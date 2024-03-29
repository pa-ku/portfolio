import React, { Children } from 'react'
import styled from 'styled-components'

const TextStyle = styled.p<{ fontSize?: string }>`
  font-size: 17px;

`

type TextProps = {
  children: string
  fontSize?: string
}

export default function Text({ children, fontSize }: TextProps) {
  return <TextStyle fontSize={fontSize}>{children}</TextStyle>
}
