import React, { useState } from "react";

import Title from "../Title";
import styled from "styled-components";
import Filter from "./Pokedex";
import CheckBox from "../ui/CheckBox";
import Typing from "./Typing";

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

export default function MiniProyects() {
  const proyects = [<Filter />, <Typing />];
  const proyectsName = ["Pokedex", "Typing"];

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
        {proyects[index]}
      </Wrapper>
    </>
  );
}
