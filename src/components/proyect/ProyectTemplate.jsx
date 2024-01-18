import React from "react";
import styled from "styled-components";
import Title from "../Title";

import MainButton from "../ui/MainButton";
import CssIconn from "../../assets/stackicons/cssicon.svg";
import ReactIcon from "../../assets/stackicons/reacticon.svg";
import HtmlIcon from "../../assets/stackicons/htmlicon.svg";
import styledicon from "../../assets/stackicons/styledicon.svg";
import nodejsicon from "../../assets/stackicons/nodejsicon.svg";
import MongoDb from "../../assets/stackicons/mongo.svg";
import javascripticon from "../../assets/stackicons/javascripticon.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import planeSvg from "../../assets/img/plane.webp";

const Wrapper = styled.div`
  padding: 2em;
  display: flex;
  width: 100%;
  height: 100%;
  text-align: start;
  flex-direction: column;
  @media (max-width: 700px) {
    padding: 1em;
  }
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 0.5em;
  height: 100%;
  width: 100%;
`;

const StackContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 10px;
  max-width: 200px;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 2em;
  z-index: -1;
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: max-content;
  margin-inline: auto;
  gap: 1em;
  pointer-events: auto;
  width: 100%;
  z-index: 100;
`;

export default function ProyectTemplate({
  title,
  iconReact,
  iconNode,
  href,
  hrefGithub,
  description,
  plane,
}) {
  return (
    <>
      <Wrapper>
        <ElementContainer>
          <Title weight={500} text={title} $fontsize={"28px"} />
          {description}

          <Title
            $color={"var(--main-pink-500)"}
            text={"Stack"}
            $fontsize={"1.3rem"}
          />
          <StackContainer>
            <Stack iconReact={iconReact} iconNode={iconNode} />
          </StackContainer>

          <ButtonContainer>
            <MainButton href={href} text={"Sitio Web"} />
            <MainButton
              icon={<GitHubIcon></GitHubIcon>}
              href={hrefGithub}
              text={"Github"}
            />
          </ButtonContainer>
        </ElementContainer>
      </Wrapper>
    </>
  );
}



function Stack({ iconReact, iconNode }) {
  return (
    <>
      <Icon src={CssIconn} alt="icono css" />
      <Icon src={HtmlIcon} alt="icono html" />
      <Icon src={javascripticon} alt="icono Javascript" />
      {iconReact && (
        <>
          <Icon src={ReactIcon} alt="icono React" />
          <Icon src={styledicon} alt="icono styled component" />
        </>
      )}

      {iconNode && (
        <>
          <Icon src={MongoDb} alt={"Icono MongoDb"} />
          <Icon src={nodejsicon} alt="icono styled component" />
        </>
      )}
    </>
  );
}
