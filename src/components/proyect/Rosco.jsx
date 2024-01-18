import React from "react";
import styled from "styled-components";
import ProyectTemplate from "./ProyectTemplate";
import Element from "./Element";

export default function Rosco() {
  return (
    <>
      <ProyectTemplate
        hrefGithub={"https://github.com/pa-ku/Rosco"}
        href={"https://rosquewe.netlify.app"}
        iconReact={true}
        title={"Rosco"}
        description={
          <>
            <Element
              text={
                "Crear el rosco fue un desafio para aprender crear estados globales en react (context), asi como evitar la re-renderizacion de elementos"
              }
            />
            <Element text={"Actualmente cuenta con mas de 1200 palabras"} />

            <Element
              title="Hook UseLocalStorage"
              text="Utilizando un hook personalizado se guarda la configuracion de sonido/dificultad/etc en el local storage como un objeto"
            />
            <Element
              title="Envio de emails"
              text="Para poder enviar correos en una pagina estatica, se creo con EmailJS.com un reporte de palabras que necesiten una revisión"
            />
            <Element
              title="useMemo"
              text="Para evitar la re-renderizacion de las palabras al cambiar de estado, se utilizo useMemo y useCallback permitiendo la correcta funcionalidad"
            />
          </>
        }
      />
    </>
  );
}
