import React from "react";
import styled from "styled-components";

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  background-color: #eaeaea;


transition: 500ms;
  font-weight: 600;
  border-color: #717171;
  color: #1c2128;
  padding: 3px;
  min-width: 20px;
  padding-inline: 15px;
  color: #222;
  text-align: center;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    filter: brightness(1.05);
  }
  &:checked {
    background-color:  ${(props) => props.$backgroundcolor};

    border-color: ${(props) => props.$bordercolor};
    border-color: ${(props) => props.$bordercolor};
    background-color: ${(props) => props.$backgroundcolor};
  }
  &::before {
    font-family:  ${props => props.$font ? '"Pixelify Sans", sans-serif' : ''};
    content: "${(props) => props.$text}";
  }
`;
export default function CheckBox({
  $text,
  checked,
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
        checked={checked}
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
