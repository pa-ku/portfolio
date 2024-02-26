import React from "react";
import styled from "styled-components";

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  background-color: #c4c4c4;
  border-bottom: 5px solid;
  border-right: 5px solid;
  border-left: 1px solid;
  border-top: 1px solid;

  font-weight: 600;
  border-color: #717171;
  color: #1c2128;
  padding: 7px;
  min-width: 20px;
  padding-inline: 15px;
  color: #222;
  text-align: center;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
  &:checked {
    background-color: #80d8ff;
    border-color: #485c66;
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
  $font
}) {
  return (
    <>
      <Input
        value={value}
        checked={checked}
        name={name}
        type="radio"
        onChange={onChange}
        onClick={onClick}
        $text={$text}
      />
    </>
  );
}
