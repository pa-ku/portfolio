import React from "react";
import ProyectTemplate from "./ProyectTemplate";
import Element from "./Element";

export default function Flybondi() {
  return (
    <>
      <ProyectTemplate
        iconReact={true}
        hrefGithub={"https://github.com/pa-ku/FlybondiReact"}
        href={"https://cloneflybondi.netlify.app"}
        title={"Flybondi"}
        plane={true}
        description={
          <>
            <Element
              text={
                "Mi primer proyecto, inicialmente creado con javascript, posteriormente agregado React, el objetivo fue la practica del maquetado y la accesibilidad"
              }
            />
            <Element
              title="Header y footer"
              text="para facilitar la legibilidad y navegación se removieron botones repetidos y se utilizo un menú desplegable para agrupar elementos de la misma categoría."
            />

            <Element
              title="Accesibilidad"
              text="Se agregaron colores en los hipervínculos con mayor contraste | Alt labels | keyboard navigation"
            />

            <Element
              title="Optimización"
              text="Mejora del LCP en un 300%, de 3.2 segundos de carga a 0.8"
            />

          </>
        }
      />
    </>
  );
}
