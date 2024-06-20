import erideLogo from './assets/images/proyect_logos/eride-logo.webp'
import erideImg from './assets/images/proyect_images/EridePageImage.webp'

import roscoImg from './assets/images/proyect_images/PageRosco.webp'
import roscoLogo from './assets/images/proyect_logos/rosco-logo.webp'
import quantumImg from './assets/images/proyect_images/quantum_img.png'

import menuImg from './assets/images/proyect_images/menuBackground.webp'
import menuLogo from './assets/images/proyect_logos/menu-logo.webp'

import quantumlogo from './assets/images/proyect_logos/quantum_logo.png'

import reactico from './assets/images/stack_logos/reacticon.svg'
import nodeico from './assets/images/stack_logos/nodejsicon.svg'
import styleico from './assets/images/stack_logos/styledicon.svg'
import mongoico from './assets/images/stack_logos/mongo.svg'
import typeico from './assets/images/stack_logos/typescript-ico.svg'
import tailwindico from './assets/images/stack_logos/tailwind.svg'


export const proyects = [
  {
    title: 'E-ride Scooter Store',
    description:
      'Un ecommerce estatico que recibe transacciones con la api de Mercado pago. Cuenta con un filtro de productos, y guardado de favoritos que se almacenan en el Local Storage',
    img: erideImg,
    logo: erideLogo,
    github: 'https://github.com/pa-ku/eride_client',
    href: 'https://eridestore.netlify.app/',
    stack: [reactico, styleico],
  },
  {
    title: 'Menu Pauls',
    description:
      'Creado con React y utilizando como servidor MongoDb y express, la pagina ofrece la facilidad de filtrar entre productos, asi como de una cuenta administrador para crear y modificar los productos',
    img: menuImg,
    logo: menuLogo,
    github: '',
    href: 'https://paulsmenu.netlify.app',
    stack: [reactico, typeico, nodeico, mongoico],
  },
/*   {
    title: 'Rosco ',
    description: [
      'Juego local donde asumís el rol de anfitrión, gestionando configuraciones y puntajes. con mas de 1000 palabras con definiciones',
    ],
    img: roscoImg,
    logo: roscoLogo,
    github: 'https://github.com/pa-ku/Rosco',
    href: 'https://roscogame.netlify.app/',
    stack: [reactico, styleico],
  }, */
  {
    title: 'Quantum Ui ',
    description: [
      'Design system enfocado en el uso facil de componentes para Tailwind y React',
    ],
    img:quantumImg ,
    logo: quantumlogo,
    github: 'https://github.com/pa-ku/quantum_design',
    href: 'https://quantumui.netlify.app/inputs',
    stack: [reactico, tailwindico],
  },
]
