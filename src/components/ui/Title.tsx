import React from 'react'
import styled from 'styled-components'

const TitleStyle = styled.p<{
  altButton?: Boolean
  fontSize?: string
  color?: string
}>`
  text-align: center;
  font-size: ${(props) => (props.altButton ? '2.5rem' : '3.5rem')};
  padding: 0px;
  background-color: ${(props) => (props.altButton ? '#fff' : 'var(--pink-50)')};
  width: max-content;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-size: ${(props) => props.fontSize};
  position: relative;
  pointer-events: none;
  letter-spacing: -2px;
  z-index: 1;
  height: max-content;
  color: ${(props) => props.color};
  height: 60px;
`

type TitleProps = {
  children: String
  altButton?: Boolean
  fontSize?: String
  color?: string
}

export default function Title({
  children,
  altButton,
  fontSize,
  color,
}: TitleProps) {
  return (
    <>
      <TitleStyle color={color} fontSize={fontSize} altButton={altButton}>
        {children}
      </TitleStyle>
    </>
  )
}
