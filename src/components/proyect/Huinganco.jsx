import React from "react";
import ProyectTemplate from "./ProyectTemplate";
import Element from "./Element";

export default function Huingnaco() {
  return (
    <>
      <ProyectTemplate
        href={"https://huinganco.netlify.app"}
        hrefGithub={"https://github.com/pa-ku/Huinganco"}
        iconReact={true}
        title={"Turismo Huingnaco"}
        description={
          <>
            <Element
              text={
                "Mi proyecto final del curso de PHP, posteriormente se implemento React y Styled components para componetizar ."
              }
            />
            <Element
            title={"Huinganco"}
              text={
                "es un publo ubicado en el norte neuquino conocido como 'el jardin del neuquen', el logo fue creado en base a sus dos mas grandes cualidades, la montaña y la naturaleza conectadas"
              }
            />
          </>
        }
        elements={
          <>
            <Element title="Proyecto de estudio" text="test" />
          </>
        }
      />
    </>
  );
}
