import React from "react";
import styled from "@emotion/styled";

const TitleStyle = styled.p`
  text-align: center;
  font-size: ${(props) => (props.$altButton ? "2.5rem" : "3.5rem")};
  font-weight: 300;
  padding: 0px;
  background-color: ${props => props.$altButton ? '#fff' : 'var(--main-pink-200)'};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  pointer-events: none;
  letter-spacing: -2px;
  margin-bottom: 5px;
  z-index: 1;
  &::after {
    content: "";
    width: 52%;
    height: 2px;
    bottom: -2px;
    left: 0px;
    border-radius: 0px 20px 0px 0px;
    position: absolute;
    background-color: var(--main-pink-300);
  }
  &::before {
    content: "";
    position: absolute;
    background-color: ${props => props.$altButton ? '#fff' : 'var(--main-pink-200)'};
    width: 300px;
    height: 100%;
    animation: 2s titleanimation forwards;
  }
  @keyframes titleanimation {
    90% {
      width: 300px;
      translate: 350px;
      opacity: 1;
    }
    100% {
      opacity: 0;
      width: 300px;
      translate: 350px;
    }
  }
`;
export default function Title({
  children,
  $altButton
}) {
  return (
    <>
      <TitleStyle $altButton={$altButton}>{children}</TitleStyle>
    </>
  );
}
