import React from "react";
import ProyectTemplate from "./ProyectTemplate";
import Element from "./Element";

export default function Correo() {
  return (
    <>
      <ProyectTemplate
        href={"https://clonecorreoargentino.netlify.app"}
        hrefGithub={"https://github.com/pa-ku/correoArgentino"}
        title={"Correo Argentino"}
        description={
          "Una reimaginacion de la pagina del correo, utilizando solamente javascript y css vanilla, lo cual le da una gran velocidad de carga"
        }
    
      />
    </>
  );
}
