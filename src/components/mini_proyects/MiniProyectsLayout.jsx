import React, { useState } from "react";

import Title from "../Title";
import styled from "styled-components";
import Filter from "./Pokedex";
import CheckBox from "../ui/CheckBox";
import Typing from "./Typing";
import PokeGuess from "./PokeGuess";
import { useEffect } from "react";

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
  grid-template-columns: repeat(2, 120px);
  align-items: center;
  justify-content: center;
  background-color: var(--pink-50);
  z-index: 0;
  border-radius: 10px;
  position: relative;
  &:hover .selected{
scale: 1.1;
}
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

const Selected = styled.div`
position: absolute;
height: 100%;
border-radius: 10px;
background-color: var(--pink-400);
width: 120px;
z-index: -11;
bottom: 0px;

transition: all 500ms;
left: ${props => props.$left};

`




export default function MiniProyects() {
  const proyects = [
    {
      component: <PokeGuess />,
      name: 'PokeGuess',
    },
    {
      component: <Typing />,
      name: 'PokeType',
    }];

  const [selectedPosition, setSelectedPosition] = useState('')
  const [index, setIndex] = useState(0);


  useEffect(() => {
    switch (index) {
      case 0:
        setSelectedPosition('0px')
        break;

      case 1:
        setSelectedPosition('120px')
        break;

    }
  }, [index])

  function handleSelected(i) {
    setIndex(i)
  }

  return (
    <>
      <Wrapper>
        <Title $altButton>Proyectos Mini</Title>
        <NavContainer>
          <Selected $left={selectedPosition}></Selected>
          {proyects.map((project, i) => (
            <CheckBox
              key={project.name}
              $text={project.name}
              value={"1"}
              name={"verduras"}
              checked={i === index}
              onClick={() => handleSelected(i)}
              $backgroundcolor={'var(--pink-250)'}
              $bordercolor={'var(--pink-700)'}
            ></CheckBox>
          ))}

        </NavContainer>
        <ProyectContainer>
          {proyects[index].component}
        </ProyectContainer>
      </Wrapper>
    </>
  );
}
