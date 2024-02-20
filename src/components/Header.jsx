import React from "react";
import { styled } from "styled-components";

import Subtitle from "./Subtitle";

import SocialMedia from "./SocialMedia";
import MainButton from "./ui/MainButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40ch;

  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    scale: 0.9;
  }
  
  opacity: 0;
  animation: 800ms show forwards;

  @keyframes show {
   100%{
    opacity: 1;
   } 
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    padding-inline: 1em;
  }
`;

const Title = styled.p`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 300;
  padding: 0px;
  background-color: var(--main-pink-200);
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
    background-color: var(--main-pink-200);
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

export default function Header({ description, subtitle }) {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>Pablo Kuhn</Title>
          <Subtitle
            $color={"#222"}
            $delay={"0.9s"}
            $fontsize={" 1.5rem"}
            text={subtitle}
          />
          <Subtitle
            $color={"#333"}
            $delay={"1s"}
            $fontsize={"1rem"}
            text={description}
          />
          <SocialMedia />
       {/*    <MainButton  text={"Mas sobre mi"} /> */}
        </Container> 
      </Wrapper>
    </>
  );
}
