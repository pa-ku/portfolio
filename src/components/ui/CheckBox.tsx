import styled from 'styled-components'
import React from 'react'

const Input = styled.input<{ content?: string }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  transition: 500ms;
  font-weight: 500;
  border-color: #717171;
  padding: 2px;

  text-align: center;
  font-size: 1.3rem;
  border-radius: 6px;
  cursor: pointer;
  &::before {
    content: '${(props) => props.content}';
    font-family: Pixelify;
  }
`

type CheckBoxProps = {
  content?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  value?: string
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

export default function CheckBox({
  content,
  onChange,
  name,
  value,
  onClick,
}: CheckBoxProps) {
  return (
    <Input
      className="before:text-gray-600 "
      value={value}
      name={name}
      type="radio"
      onChange={onChange}
      onClick={onClick}
      content={content}
    />
  )
}
