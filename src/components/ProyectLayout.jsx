import ProyectTemplate from './ProyectTemplate'
import { Proyects } from '../Proyects'
import FlybondiPageImage from '../assets/images/proyect_images/PageFlybondi.webp'
import EridePageImage from '../assets/images/proyect_images/EridePageImage.webp'
import RoscoPageImage from '../assets/images/proyect_images/PageRosco.webp'
import MenuPageImage from '../assets/images/proyect_images/menuBackground.webp'

import FlyLogo from '../assets/images/proyect_logos/flybondi-logo.webp'
import ErideLogo from '../assets/images/proyect_logos/eride-logo.webp'
import RoscoLogo from '../assets/images/proyect_logos/rosco-logo.webp'
import MenuLogo from '../assets/images/proyect_logos/menu-logo.webp'

import ReactImage from '../assets/images/stack_logos/reacticon.svg'
import NodeImage from '../assets/images/stack_logos/nodejsicon.svg'
import StyledImage from '../assets/images/stack_logos/styledicon.svg'
import MongoImage from '../assets/images/stack_logos/mongo.svg'
import TypescriptImage from '../assets/images/stack_logos/typescript-ico.svg'
import JsImage from '../assets/images/stack_logos/javascripticon.svg'

/* import JsImage from '../assets/stackicons/javascripticon.svg' */
/* import HtmlImace from '../assets/stackicons/htmlicon.svg'
import GithubImage from '../assets/stackicons/githubicon.svg' */
import styled from 'styled-components'

const Dot = styled.span`
  color: var(--pink-400);
`

export default function ProyectLayout() {
  return (
    <>
      <ProyectTemplate
        logoImgSrc={ErideLogo}
        /*   githubLink={"https://github.com/pa-ku/FlybondiReact"} */
        href={'https://eridestore.netlify.app/'}
        imgAlt={'Logo Eride'}
        title={Proyects[1].title}
        description={Proyects[1].description}
        backgroundImg={EridePageImage}
        backgroundAlt={'Imagen pagina web de Xtreme'}
        propIcons={[ReactImage, TypescriptImage]}
      />
      <ProyectTemplate
        logoImgSrc={MenuLogo}
        imgAlt={'Logo Menu'}
        backgroundImg={MenuPageImage}
        githubLink={'https://github.com/pa-ku/menu_client'}
        href={'https://paulsmenu.netlify.app'}
        backgroundAlt={'Imagen pagina web de flybondi'}
        title={Proyects[4].title}
        description={Proyects[4].description}
        propIcons={[ReactImage, TypescriptImage, MongoImage, NodeImage]}
      />
    {/*   <ProyectTemplate
        logoImgSrc={FlyLogo}
        imgAlt={'Logo Flybondi'}
        githubLink={''}
        href={'https://cloneflybondi.netlify.app/'}
        backgroundImg={FlybondiPageImage}
        backgroundAlt={'Imagen pagina web de flybondi'}
        title={Proyects[0].title}
        description={Proyects[0].description.map((item) => (
          <p key={item}>
            <Dot>⏵</Dot>
            {item}
          </p>
        ))}
        propIcons={[ReactImage, JsImage, StyledImage]}
      /> */}

      <ProyectTemplate
        logoImgSrc={RoscoLogo}
        imgAlt={'Logo Rosco'}
        backgroundImg={RoscoPageImage}
        githubLink={'https://github.com/pa-ku/Rosco'}
        href={'https://roscogame.netlify.app/'}
        backgroundAlt={'Imagen pagina web de flybondi'}
        title={Proyects[2].title}
        description={Proyects[2].description.map((item) => (
          <p key={item}>
            <Dot>⏵</Dot>
            {item}
          </p>
        ))}
        propIcons={[ReactImage, JsImage, StyledImage]}
      />
    </>
  )
}
