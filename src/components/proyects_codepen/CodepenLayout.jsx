import React, { useState } from "react";
import Loader from "./Loader";
import Title from "../Title";
import styled from "styled-components";
import Filter from "./Filter";
import CheckBox from "../ui/CheckBox";

const Wrapper = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 30px;
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
  margin-bottom: 20px;
`;
const NavButton = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #444;
  background-color: #9cd9ff;
  border-radius: 50%;
  transition: 100ms;
  cursor: pointer;
  &:hover {
    background-color: #39b1fb;
  }
`;

export default function CodepenLayout() {
  const proyects = [<Loader />, <Filter />];
  const proyectsName = ["Loader", "Filtros"];

  const [index, setIndex] = useState(0);

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
      <Wrapper>
        <Title $altButton>Proyectos Codepen</Title>
        <NavContainer>
          {proyects.map((project, index) => (
            <CheckBox
              $text={proyectsName[index]}
              value={"1"}
              name={"verduras"}
              onClick={() => setIndex(index)}
            ></CheckBox>
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
