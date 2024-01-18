import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
opacity: 1;
animation: 1s subtitleAnimation forwards ;

font-size: ${props => props.$fontsize};
color: ${props => props.$color};
`

export default function Subtitle({ text,$fontsize,$color }) {
  return (
    <Text $color={$color} $fontsize={$fontsize} >{text}</Text>
  )
}
