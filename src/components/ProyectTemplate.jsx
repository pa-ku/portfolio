import React from "react";
import styled from "styled-components";

import ReactImage from "../assets/stackicons/reacticon.svg";
import JsImage from "../assets/stackicons/javascripticon.svg";
import NodeImage from "../assets/stackicons/nodejsicon.svg";
import StyledImage from "../assets/stackicons/styledicon.svg";
import HtmlImage from "../assets/stackicons/htmlicon.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 730px;
  height: 250px;
  opacity: 0;
translate: -90px;
  animation: 800ms Show forwards ;
  @keyframes Show {
    100%{
      opacity: 1;
      translate: 0px;
    }
  }
`;
const LogoContainer = styled.a`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #2f2f2f;
  position: absolute;
  transition: 300ms;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    width: 730px;
    height: 260px;
    border-radius: 20px;
    cursor: pointer;
  }

  &:hover .logo-img {
    opacity: 0;
  }
  &:hover .page-img {
    opacity: 1;
    z-index: 10;

    box-shadow: 0px 0px 10px 0px #80d8ff;
  }
`;

const InfoContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 650px;
  height: 250px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 20px 20px 30px 0px #f3f3f3;
`;

const LogoImage = styled.img`
  padding: 15px;
  width: 120px;
  height: 120px;
  object-fit: contain;
  transition: 300ms;
  pointer-events: none;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  position: absolute;
  transition: 200ms;
  border-radius: 20px;
  object-position: top;
  pointer-events: none;
`;

const TextContainer = styled.div`
  margin-left: 120px;

  height: 100%;
  width: 100%;
  text-align: start;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
`;

const StackContainer = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  & img {
    width: 35px;
    height: 35px;
    object-fit: contain;
  }
`;

const InfoTitle = styled.h2`
  font-size: 20px;
`;

const InfoDescription = styled.p``;

export default function ProyectTemplate({
  LogoImgSrc,
  ImgAlt,
  BackgroundImg,
  BackgroundAlt,
  StackIcon,
  ReactIcon,
  MongoIcon,
  NodeIcon,
  StyledIcon,
  JSIcon,
  Title,
  Description,
  HtmlIcon,
  href,
}) {
  return (
    <Wrapper>
      <LogoContainer className="logo-c" href={href} target="_blank">
        <LogoImage src={LogoImgSrc} alt={ImgAlt} />
        <MainImage
          className="page-img"
          src={BackgroundImg}
          alt={BackgroundAlt}
        />
      </LogoContainer>
      <InfoContainer>
        <TextContainer>
          {" "}
          <InfoTitle>{Title}</InfoTitle>
          <InfoDescription>{Description}</InfoDescription>
        </TextContainer>
        <StackContainer>
          {ReactIcon && <img src={ReactImage} alt="Icono React" />}
          {NodeIcon && <img src={NodeImage} alt="Icono NodeJs" />}
          {JSIcon && <img src={JsImage} alt="Icono Javascript" />}
          {StyledIcon && (
            <img src={StyledImage} alt="Icono Styled Components" />
          )}
          {HtmlIcon && <img src={HtmlImage} alt="Icono Javascript" />}
        </StackContainer>
      </InfoContainer>
    </Wrapper>
  );
}
