import erideLogo from './assets/images/proyect_logos/eride-logo.webp'
import erideImg from './assets/images/proyect_images/EridePageImage.webp'

import roscoImg from './assets/images/proyect_images/PageRosco.webp'
import roscoLogo from './assets/images/proyect_logos/rosco-logo.webp'

import menuImg from './assets/images/proyect_images/menuBackground.webp'
import menuLogo from './assets/images/proyect_logos/menu-logo.webp'

import reactico from './assets/images/stack_logos/reacticon.svg'
import nodeico from './assets/images/stack_logos/nodejsicon.svg'
import styleico from './assets/images/stack_logos/styledicon.svg'
import mongoico from './assets/images/stack_logos/mongo.svg'
import typeico from './assets/images/stack_logos/typescript-ico.svg'

export const proyects = [
  {
    title: 'E-ride Scooter Store',
    description:
      'Un ecommerce estatico que recibe transacciones con la api de Mercado pago. Cuenta con un filtro de productos, y guardado de favoritos que se almacenan en el Local Storage',
    img: erideImg,
    logo: erideLogo,
    github: '',
    href: 'https://eridestore.netlify.app/',
    stack: [reactico,styleico],
  },
  {
    title: 'Menu Pauls',
    description:
      'Creado con React y utilizando como servidor MongoDb y express, la pagina ofrece la facilidad de filtrar entre productos, asi como de una cuenta administrador para crear y modificar los productos',
    img: menuImg,
    logo: menuLogo,
    github: '',
    href: 'https://paulsmenu.netlify.app',
    stack: [reactico,typeico,nodeico,mongoico],
  },
  {
    title: 'Rosco ',
    description: [
      'Modo de juego local, simulando ser el anfitrion. Para controlar las configuracion y puntajes del juego se utilizaron Providers',
      'UseLocalStorage: Un hook personalizado para guarda la configuracion de sonido/dificultad/etc en el local storage',
      'useMemo: Para evitar la re-renderizacion de las palabras, se utilizo useMemo y useCallback',
    ],
    img: roscoImg,
    logo: roscoLogo,
    github: 'https://github.com/pa-ku/Rosco',
    href: 'https://roscogame.netlify.app/',
    stack: [reactico,styleico],
  },
]
