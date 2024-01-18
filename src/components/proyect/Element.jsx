import React from "react";
import styled from "styled-components";

const Dot = styled.span`
  margin-right: 5px;
  font-size: 10px;


  color: var(--main-pink-500);
`;
const ElementText = styled.p`
  font-size: 14px;

`;

const Bold = styled.b`
font-weight: 600;
color: #555;
`



export default function Element({ title, text }) {
  return (
    <>
      <ElementText>
        {title && <Dot>⭓</Dot>}
        <Bold>{title}</Bold> {text}
      </ElementText>
    </>
  );
}
