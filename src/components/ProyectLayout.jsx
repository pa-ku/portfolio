import React from "react";
import ProyectTemplate from "./ProyectTemplate";
import FlyLogo from "../assets/img/logos/flybondi-logo.webp";
import FlybondiPageImage from "../assets/img/backgrounds/PageFlybondi.webp";
import EridePageImage from "../assets/img/backgrounds/EridePageImage.webp";
import ErideLogo from "../assets/img/logos/eride-logo.webp";
import { Proyects } from "../Proyects";
import RoscoLogo from "../assets/img/logos/rosco-logo.webp";
import RoscoPageImage from "../assets/img/backgrounds/PageRosco.webp";

import styled from "styled-components";

const Dot = styled.span`
  color: var(--main-pink-400);
`;

export default function ProyectLayout() {
  const FlybondiArr = [
    Proyects[0].description.one,
    Proyects[0].description.two,
    Proyects[0].description.tree,
  ];

  const RoscoArr = [
    Proyects[2].description.one,
    Proyects[2].description.two,
    Proyects[2].description.tree,
  ];

  return (
    <>
      <ProyectTemplate
        LogoImgSrc={ErideLogo}
        ImgAlt={"Logo Flybondi"}
        Title={Proyects[1].title}
        Description={Proyects[1].description}
        BackgroundImg={EridePageImage}
        BackgroundAlt={"Imagen pagina web de Xtreme"}
        href={"https://eridestore.netlify.app/"}
        ReactIcon
        StyledIcon
        NodeIcon
      />

      <ProyectTemplate
        LogoImgSrc={FlyLogo}
        ImgAlt={"Logo Flybondi"}
        BackgroundImg={FlybondiPageImage}
        BackgroundAlt={"Imagen pagina web de flybondi"}
        Title={Proyects[0].title}
        Description={FlybondiArr.map((item) => (
          <p>
            <Dot>⏵</Dot>
            {item}
          </p>
        ))}
        href={"https://cloneflybondi.netlify.app/"}
        ReactIcon
        StyledIcon
      />

      <ProyectTemplate
        LogoImgSrc={RoscoLogo}
        ImgAlt={"Logo Rosco"}
        BackgroundImg={RoscoPageImage}
        BackgroundAlt={"Imagen pagina web de flybondi"}
        Title={Proyects[2].title}
        Description={RoscoArr.map((item) => (
          <p>
            <Dot>⏵</Dot>
            {item}
          </p>
        ))}
        href={"https://rosquewe.netlify.app/"}
        ReactIcon
        StyledIcon
      />
    </>
  );
}
