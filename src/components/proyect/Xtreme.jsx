import React from "react";
import ProyectTemplate from "./ProyectTemplate";
import Element from "./Element";
export default function Xtreme() {
  return (
    <>
      <ProyectTemplate
        hrefGithub={"https://github.com/pa-ku/XtremeStore"}
        href={"https://xtremestore.netlify.app"}
        title={"Xtreme Store"}
        iconReact
        iconNode
        description={
          <>
            <Element
              text={
                "El objetivo de Xtream fue crear un Ecommers minimalista, donde adquirir el producto tan fuera rapido y sencillo como navegar por la app"
              }
            ></Element>
       
            <Element
              title={"API MercadoPago"}
              text={"para procesar los pagos de la plataforma"}
            ></Element>
            <Element
              title={"MongoDB"}
              text={
                "como database en donde se almacenan productos y usuarios, el sistema de login permite al admin (con su token unico) crear productos directamente desde la pagina web"
              }
            ></Element>
            <Element
              $fontsize={"14px"}
              title={"Logal Storage"}
              text={
                "para almacenar los productos favoritos permitiendo al usuario utilizar facilmente la pagina sin necesidad de registrarse"
              }
            ></Element>
          </>
        }
      />
    </>
  );
}
