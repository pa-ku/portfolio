import React from "react";
import styled from "styled-components";

const Input = styled.input`
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
  &:checked{
    color: #fff;
  }
  &::before {
    font-family:  ${props => props.$font ? '"Pixelify Sans", sans-serif' : ''};
    content: "${(props) => props.$text}";
  }
`;
export default function CheckBox({
  $text,

  onChange,
  name,
  value,
  onClick,
  $backgroundcolor,
  $bordercolor
}) {
  return (
    <>
      <Input
        value={value}
  
        $backgroundcolor={$backgroundcolor}
        name={name}
        type="radio"
        onChange={onChange}
        onClick={onClick}
        $text={$text}
        $bordercolor={$bordercolor}
      />
    </>
  );
}
