import React, { useState } from "react";
import Loader from "./Loader";
import Title from "../Title";
import styled from "styled-components";
import Filter from "./Filter";

const Wrapper = styled.div`
  width: 100%;
height: 300px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
`;
const IndexButton = styled.button`
  background-color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-weight: 800;
  font-size: 28px;
  border: 0px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
const IndexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

const NavContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`;
const NavButton = styled.div`
width: 20px;
height: 20px;
border: 2px solid #333;
background-color: #666;
border-radius: 50%;
transition: 100ms;
cursor: pointer;
&:hover{
    background-color: #9cd9ff;
}
`;

export default function CodepenLayout() {
  const proyects = [<Loader /> ,<Filter />];
  const [index, setIndex] = useState(0);
  console.log(proyects.length);

  function NextIndex() {
    if (index !== proyects.length - 1) {
      setIndex((PrevIndex) => index + 1);
    }
  }
  function PrevIndex() {
    if (index !== 0) {
      setIndex((PrevIndex) => index - 1);
    }
  }

  return (
    <>
      <Title $altButton>Proyectos Codepen</Title>

      <Wrapper>
        <NavContainer>
          {proyects.map((project, index) => (
            <NavButton onClick={() => setIndex(index)}></NavButton>
          ))}
        </NavContainer>

       {/*  <IndexContainer>
          <IndexButton onClick={PrevIndex}>-</IndexButton>
          <IndexButton onClick={NextIndex}>+</IndexButton>
        </IndexContainer> */}
        {proyects[index]}
      </Wrapper>
    </>
  );
}
