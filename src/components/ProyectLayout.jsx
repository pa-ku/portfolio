import ProyectTemplate from './ProyectTemplate'
import FlyLogo from '../assets/img/logos/flybondi-logo.webp'
import FlybondiPageImage from '../assets/img/backgrounds/PageFlybondi.webp'
import EridePageImage from '../assets/img/backgrounds/EridePageImage.webp'
import ErideLogo from '../assets/img/logos/eride-logo.webp'
import { Proyects } from '../Proyects'
import RoscoLogo from '../assets/img/logos/rosco-logo.webp'
import MenuLogo from '../assets/img/logos/menu-logo.webp'
import RoscoPageImage from '../assets/img/backgrounds/PageRosco.webp'
import MenuPageImage from '../assets/img/backgrounds/menuBackground.webp'

import ReactImage from '../assets/stackicons/reacticon.svg'
import NodeImage from '../assets/stackicons/nodejsicon.svg'
import StyledImage from '../assets/stackicons/styledicon.svg'
import MongoImage from '../assets/stackicons/mongo.svg'

/* import JsImage from '../assets/stackicons/javascripticon.svg' */
/* import HtmlImace from '../assets/stackicons/htmlicon.svg'
import GithubImage from '../assets/stackicons/githubicon.svg' */
import styled from 'styled-components'

const Dot = styled.span`
  color: var(--pink-400);
`

export default function ProyectLayout() {
  const FlybondiArr = [
    Proyects[0].description.one,
    Proyects[0].description.two,
    Proyects[0].description.tree,
  ]

  const RoscoArr = [
    Proyects[2].description.one,
    Proyects[2].description.two,
    Proyects[2].description.tree,
  ]

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
        propIcons={[ReactImage, StyledImage, NodeImage]}
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
        propIcons={[ReactImage, StyledImage, MongoImage, NodeImage]}
      />
      <ProyectTemplate
        logoImgSrc={FlyLogo}
        imgAlt={'Logo Flybondi'}
        githubLink={''}
        href={'https://cloneflybondi.netlify.app/'}
        backgroundImg={FlybondiPageImage}
        backgroundAlt={'Imagen pagina web de flybondi'}
        title={Proyects[0].title}
        description={FlybondiArr.map((item) => (
          <p key={item}>
            <Dot>⏵</Dot>
            {item}
          </p>
        ))}
        propIcons={[ReactImage, StyledImage]}
      />

      <ProyectTemplate
        logoImgSrc={RoscoLogo}
        imgAlt={'Logo Rosco'}
        backgroundImg={RoscoPageImage}
        githubLink={'https://github.com/pa-ku/Rosco'}
        href={'https://rosquewe.netlify.app/'}
        backgroundAlt={'Imagen pagina web de flybondi'}
        title={Proyects[2].title}
        description={RoscoArr.map((item) => (
          <p key={item}>
            <Dot>⏵</Dot>
            {item}
          </p>
        ))}
        propIcons={[ReactImage, StyledImage]}
      />
    </>
  )
}
