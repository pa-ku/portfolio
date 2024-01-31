import React from "react";
import { styled } from "styled-components";

import Subtitle from "./Subtitle";

import FlyingPig from "./FlyingPig";
import SocialMedia from "./SocialMedia";

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 70ch;

  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    scale: 0.9;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;

  width: 50ch;
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

const PigContainer = styled.div`
  margin-left: auto;
  margin-block: auto;

  height: 100%;
  @media (max-width: 700px) {
    margin-left: 0px;
    margin-block: 0px;
    margin-top: 4em;
  }
`;

const Title = styled.p`
  text-align: center;
  font-size: 3.2rem;
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
          <Subtitle $delay={"0.9s"} $fontsize={"1.3rem"} text={subtitle} />
          <Subtitle
            $color={"#111"}
            $delay={"1s"}
            $fontsize={"1rem"}
            text={description}
          />
          <SocialMedia />
        </Container>
        <PigContainer>
          <FlyingPig />
        </PigContainer>
      </Wrapper>
    </>
  );
}
