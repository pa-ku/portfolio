import React, { useState } from "react";

import Title from "../Title";
import styled from "styled-components";
import Filter from "./Pokedex";
import CheckBox from "../ui/CheckBox";
import Typing from "./Typing";
import PokeGuess from "./PokeGuess";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 30px;
`;


const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const ProyectContainer = styled.div`
opacity: 0;
animation: 1s opacity forwards;
@keyframes opacity {
  0%{
    opacity: 0;
  }
  100%{
    opacity:1;
  
  }
}
`

export default function MiniProyects() {
  const proyects = [<Filter />, <Typing />, <PokeGuess />];
  const proyectsName = ["Pokedex", "Typing", "PokeGuess"];

  const [index, setIndex] = useState(0);

  return (
    <>
      <Wrapper>
        <Title $altButton>Proyectos Mini</Title>
        <NavContainer>
          {proyects.map((project, index) => (
            <CheckBox
              key={index}
              $text={proyectsName[index]}
              value={"1"}
              name={"verduras"}
              onClick={() => setIndex(index)}
            ></CheckBox>
          ))}
        </NavContainer>
        <ProyectContainer>
          {proyects[index]}
        </ProyectContainer>
      </Wrapper>
    </>
  );
}
