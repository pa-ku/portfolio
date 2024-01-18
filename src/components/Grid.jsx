import React from "react";
import styled from "styled-components";
import { useState } from "react";
import flylogoLogo from "../assets/img/fly-logo.svg";
import gtpypeLogo from "../assets/img/gtpype.webp";
import huingLogo from "../assets/img/huin.webp";
import correoLogo from "../assets/img/correo.svg";
import diceLogo from "../assets/img/dice.webp";
import xtremeLogo from "../assets/img/xtreme.webp";
import Airplane from "./Airplane";
import GridElement from "./GridElement";
import Flybondi from "./proyect/Flybondi";
import Huingnaco from "./proyect/Huinganco";
import Correo from "./proyect/Correo";
import Gptype from "./proyect/Gptype";
import Rosco from "./proyect/Rosco";
import Xtreme from "./proyect/Xtreme";

import bgflybondi from "../assets/img/bg_flybondi.webp";
import bgRosco from "../assets/img/bg_rosco.webp";
import bgXtreme from "../assets/img/bg_xtreme.webp";
import bgCorreo from "../assets/img/bg_correo.webp";

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 700px;
  max-width: 800px;
  animation: 500ms ${(props) => props.$hover} forwards;
`;

const PlaneCtn = styled.div`
  position: relative;
  width: 100%;
`;

export default function Grid() {
  const [hoverIn, setHoverIn] = useState();
  const [buttonStatus, setButtonStatus] = useState("close");
  const [disableButton, setDisableButton] = useState(false);
  const [displayInfo, setDisplayInfo] = useState("");
  const [planeAnimation, setPlaneAnimation] = useState(false);

  const handleElementClick = (number) => {
    setDisableButton(true);
    if (buttonStatus === "open") {
      setHoverIn(`hoverOut${number}`);
      setButtonStatus("close");
    } else {
      setHoverIn(`hoverIn${number}`);
      setButtonStatus("open");
    }
    setTimeout(() => {
      setDisableButton(false);
    }, 500);
  };

  function handleClick(event) {
    switch (event.target.value) {
      case "flybondi":
        handleElementClick(1);
        setPlaneAnimation(true);
        setDisplayInfo("flybondi");
        break;

      case "xtreme":
        handleElementClick(2);
        setDisplayInfo("xtreme");
        break;

      case "dice":
        handleElementClick(3);
        setDisplayInfo("dice");
        break;

      case "gptype":
        handleElementClick(4);
        setDisplayInfo("gptype");
        break;

      case "correo":
        handleElementClick(5);
        setDisplayInfo("correo");
        break;

      case "huing":
        handleElementClick(6);
        setDisplayInfo("huing");
        break;
    }
  }

  return (
    <>
      <PlaneCtn>{planeAnimation === true && <Airplane />}</PlaneCtn>
      <Main $hover={hoverIn}>
        <GridElement
          value="flybondi"
          $spanColum="span 2"
          $spanRow="span 2"
          imgSrc={flylogoLogo}
          alt="Logo tienda Xtreme bikes"
          onClick={handleClick}
          disabled={disableButton}
          buttonStatus={buttonStatus}
          displayInfo={displayInfo}
          bio={<Flybondi />}
          bgimg={bgflybondi}
        />

        <GridElement
          value="xtreme"
          imgSrc={xtremeLogo}
          $spanRow="span 1"
          $spanColum="span 2"
          alt="Logo tienda Xtreme bikes"
          onClick={handleClick}
          disabled={disableButton}
          buttonStatus={buttonStatus}
          displayInfo={displayInfo}
          bio={<Xtreme />}
          bgimg={bgXtreme}
        />

        <GridElement
          value="dice"
          imgSrc={diceLogo}
          alt=" Imagen juego de Rosco "
          onClick={handleClick}
          disabled={disableButton}
          buttonStatus={buttonStatus}
          displayInfo={displayInfo}
          bio={<Rosco />}
          bgimg={bgRosco}
        />

        <GridElement
          value="gptype"
          imgSrc={gtpypeLogo}
          $spanRow="span 2"
          $spanColum="span 1"
          alt=" Logo juego GTPTYPE"
          onClick={handleClick}
          disabled={disableButton}
          buttonStatus={buttonStatus}
          displayInfo={displayInfo}
          bio={<Gptype />}
        />

        <GridElement
          value="correo"
          $spanColum="span 2"
          imgSrc={correoLogo}
          alt=" Logo correo argentino "
          onClick={handleClick}
          disabled={disableButton}
          displayInfo={displayInfo}
          buttonStatus={buttonStatus}
          bio={<Correo />}
          bgimg={bgCorreo}
        />
        <GridElement
          value="huing"
          imgSrc={huingLogo}
          alt=" Logo turismo huinganco"
          onClick={handleClick}
          disabled={disableButton}
          buttonStatus={buttonStatus}
          displayInfo={displayInfo}
          bio={<Huingnaco />}
        />
      </Main>
    </>
  );
}
