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
  display: grid;
  grid-template-columns: repeat(3, 120px);
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
  border-radius: 10px;


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
  const proyects = [<PokeGuess />, <Typing />, <Filter />];
  const proyectsName = ["PokeGuess", "PokeType", "Pokedex"];

  const [index, setIndex] = useState(0);

  return (
    <>
      <Wrapper>
        <Title $altButton>Proyectos Mini</Title>
        <NavContainer>
          {proyects.map((project, i) => (
            <CheckBox
              key={i}
              $text={proyectsName[i]}
              value={"1"}
              name={"verduras"}
              checked={i === index}
              onClick={() => setIndex(i)}
              $backgroundcolor={'var(--pink-250)'}
              $bordercolor={'var(--pink-700)'}
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
