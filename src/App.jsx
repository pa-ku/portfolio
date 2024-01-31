import styled from "styled-components";
import Header from "./components/Header";

import "./index.css";
import Conocimientos from "./components/Conocimientos";
import Knowledge from "./components/Knowledge";

/* IMAGES */

import FlyLogo from "./assets/img/fly-logo.svg";
import ErideLogo from "./assets/img/eride.webp";
import RoscoLogo from "./assets/img/dice.webp";
import HuingLogo from "./assets/img/huin.webp";
import { Proyects } from "./Proyects";
import Wave from "./components/Wave";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 6em;
  gap: 10em;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  padding-bottom: 10em;
`;

const ProyectosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 2em;
`;

const ConocimientosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Wave />
        <Header
          subtitle={"FullStack developer"}
          description={
            "Soy un desarrollador autodidacta, apasionado por la creación de experiencias digitales a través de la accesibilidad, escalabilidad y usabilidad del diseño."
          }
        />

        <ProyectosContainer>
          <Knowledge
            description={Proyects[1].description}
            $color={"#fdfd2a5d "}
            ImgSrc={ErideLogo}
            href={"https://eridestore.netlify.app/"}
            title={Proyects[1].title}
          />
          <Knowledge
            description={Proyects[0].description}
            $color={"#ffc13b5d "}
            ImgSrc={FlyLogo}
            href={"https://cloneflybondi.netlify.app/"}
            title={Proyects[0].title}
          />

          <Knowledge
            description={Proyects[2].description}
            $color={"#f891d65d "}
            ImgSrc={RoscoLogo}
            href={"https://rosquewe.netlify.app/"}
            title={Proyects[2].title}
          />
          <Knowledge
            description={Proyects[3].description}
            $color={"#c4e9735d "}
            ImgSrc={HuingLogo}
            href={"https://huinganquito.netlify.app/"}
            title={Proyects[3].title}
          />
        </ProyectosContainer>
        <ConocimientosContainer>
          <Conocimientos />
        </ConocimientosContainer>
      </Wrapper>
    </>
  );
}

export default App;
