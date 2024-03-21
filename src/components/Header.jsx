import React from "react";
import { styled } from "styled-components";
import Subtitle from "./Subtitle";
import SocialMedia from "./SocialMedia";

import Title from "./Title";

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
