import styled from "styled-components";
import Header from "./components/Header";

import "./index.css";
import Conocimientos from "./components/Conocimientos";

/* IMAGES */
import Wave from "./components/Wave";
import ProyectLayout from "./components/ProyectLayout";
import Title from "./components/Title";
import Loader from "./components/proyects_codepen/Loader";
import CodepenLayout from "./components/proyects_codepen/CodepenLayout";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 6em;
  gap: 7em;
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
  gap: 50px;
  @media(max-width:800px){
    gap: 80px;
  }
`;

const ConocimientosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 70px;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Wave />
        <Header
          subtitle={"FullStack developer"}
          description={
            "Soy un desarrollador autodidacta, enfocado en la creación de experiencias digitales"
          }
        />
        <ProyectosContainer>
          <ProyectLayout />
        </ProyectosContainer>
        <ConocimientosContainer>
        <Title $altButton>Conocimientos</Title>
          <Conocimientos />
        </ConocimientosContainer>
        <CodepenLayout />
      </Wrapper>
    </>
  );
}

export default App;
