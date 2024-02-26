import React from "react";
import styled from "styled-components";
import jsIcon from "../assets/stackicons/javascripticon.svg";
import CssIconn from "../assets/stackicons/cssicon.svg";
import ReactIcon from "../assets/stackicons/reacticon.svg";
import HtmlIcon from "../assets/stackicons/htmlicon.svg";
import styledicon from "../assets/stackicons/styledicon.svg";
import nodejsicon from "../assets/stackicons/nodejsicon.svg";
import figmaIcon from "../assets/stackicons/figmaicon.svg";
import photoshopIcon from "../assets/stackicons/photoshopicon.svg";
import githubIcon from "../assets/stackicons/githubicon.svg";
import mongo from "../assets/stackicons/mongo.svg";
import sql from "../assets/stackicons/sql.svg";
import Subtitle from "./Subtitle";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3em;
  max-width: 60ch;
  padding-inline: 1em;

  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  background-color: var(--pink-50);
  border-radius: 20px;
  padding: 0.8em 2em;
  flex-wrap: wrap;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50px;
  position: relative;

  &:hover img {
    /* animation:1s  iconUp forwards; */
    translate: 0px -15px;
    background-color: var(--pink-100);
  }

  &:hover p {
    /*   animation: 500ms textDown forwards 200ms; */
    translate: 0px 18px;
    opacity: 1;
  }
`;

const Icons = styled.img`
  width: 45px;
  height: 45px;
  transition: 0.3s;

  z-index: 100;
  transition: 300ms;
  border-radius: 5px;
  @keyframes iconShow {
    100% {
      scale: 1;
      opacity: 1;
    }
  }
`;

const IconText = styled.p`
  font-weight: 800;
  color: #555;

  opacity: 0;
  transition: 0.5s;
  text-align: center;
  position: absolute;
  translate: 5px 20px;
  font-size: 14px;
`;

const ConocimientoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

function Icon({ text, src, alt }) {
  return (
    <>
      <IconContainer>
        <Icons src={src} alt={alt}></Icons>
        <IconText>{text}</IconText>
      </IconContainer>
    </>
  );
}

export default function Conocimientos() {
  return (
    <>
      <Wrapper>
        <ConocimientoContainer>
          <Subtitle text={"Design"} $fontsize={"20px"} />
          <IconWrapper>
            <Icon text={"Photoshop"} src={photoshopIcon} />
            <Icon text={"Figma"} src={figmaIcon} />
          </IconWrapper>
        </ConocimientoContainer>

        <ConocimientoContainer>
          <Subtitle text={"Frontend"} $fontsize={"20px"} />
          <IconWrapper>
            <Icon text={"Html"} src={HtmlIcon} />
            <Icon text={"Css"} src={CssIconn} />
            <Icon text={"JavaScript"} src={jsIcon} />
            <Icon text={"React"} src={ReactIcon} />
            <Icon text={"Styled"} src={styledicon} />
          </IconWrapper>
        </ConocimientoContainer>

        <ConocimientoContainer>
          <Subtitle text={"Backend"} $fontsize={"20px"} />
          <IconWrapper>
            <Icon text={"NodeJs"} src={nodejsicon} />
            <Icon text={"Github"} src={githubIcon} />
            <Icon text={"MongoDb"} src={mongo} />
            <Icon text={"Sql"} src={sql} />
          </IconWrapper>
        </ConocimientoContainer>

        <ConocimientoContainer>
          <Subtitle text={"Estudios"} $fontsize={"20px"} />
          <Subtitle
            $fontsize={"14px"}
            text={
              "Codo a codo Full Stack PHP Julio 2022 Curso web de 6 meses orientado a Php, con conocimientos de Sql, Javascript, Css y html"
            }
          />
        </ConocimientoContainer>
      </Wrapper>
    </>
  );
}
