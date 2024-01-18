import React from "react";
import ProyectTemplate from "./ProyectTemplate";
import Element from "./Element";

export default function Gptype() {
  return (
    <>
      <ProyectTemplate
        hrefGithub={"https://github.com/pa-ku/GPType"}
        href={"https://gptype.netlify.app"}
        title={"Typing game Gptype"}
        description={
          <>
            <Element
              text={
                "Una pequeña app para escribir palabras sobre desarrollo web. cuenta con Local Storage para guardar el puntaje más alto conseguido (basado en el largo de la palabra)."
              }
            />
          </>
        }
      
      />
    </>
  );
}
