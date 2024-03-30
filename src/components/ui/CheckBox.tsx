import styled from 'styled-components'
import React from 'react'

const Input = styled.input<{ text?: string }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  transition: 500ms;
  font-weight: 500;
  border-color: #717171;
  padding: 3px;
  min-width: 20px;
  padding-inline: 15px;
  color: #222;
  text-align: center;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  &:checked {
    color: #fff;
  }
  &::before {
    content: '${(props) => props.text}';
  }
`

type CheckBoxProps = {
  text?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  value?: string
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

export default function CheckBox({
  text,
  onChange,
  name,
  value,
  onClick,
}: CheckBoxProps) {
  return (
    <Input
      value={value}
      name={name}
      type="radio"
      onChange={onChange}
      onClick={onClick}
      text={text}
    />
  )
}
