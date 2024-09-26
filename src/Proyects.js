import erideLogo from './assets/images/proyect_logos/eride-logo.webp'
import quantum_logo from './assets/images/proyect_logos/quantum_logo.png'
import palete_logo from './assets/images/proyect_logos/paleteLogo.png'
import tejabot_logo from './assets/images/proyect_logos/tejabotLogo.png'
import chaugluten from './assets/images/proyect_logos/chaugluten.webp'
import codiplus from './assets/images/proyect_logos/codiplus.webp'

import react from './assets/images/stack_logos/reacticon.svg'
import nodejs from './assets/images/stack_logos/nodejsicon.svg'
import styledcomponents from './assets/images/stack_logos/styledicon.svg'
import mongodb from './assets/images/stack_logos/mongo.svg'
import typescript from './assets/images/stack_logos/typescript-ico.svg'
import tailwind from './assets/images/stack_logos/tailwind.svg'
import electron from './assets/images/stack_logos/electron.svg'
import nextjs from './assets/images/stack_logos/nextjs.svg'
import css from './assets/images/stack_logos/cssicon.svg'
import js from './assets/images/stack_logos/javascripticon.svg'

export const proyects = [
  {
    title: 'Quantum Ui ',
    description: [
      'Design system enfocado en el uso facil de componentes para Tailwind y React',
    ],
    img: 'https://github.com/user-attachments/assets/6eb664be-7fcd-4a06-ade5-0680bcd24336',
    logo: quantum_logo,
    github: 'https://github.com/pa-ku/quantum_design',
    href: 'https://quantumui.netlify.app',
    stack: [
      { image: react, name: 'React' },
      { image: typescript, name: 'Typescript' },
      { image: tailwind, name: 'Tailwind' },
    ],
  },
  {
    title: 'E-ride Scooter Store',
    description:
      'Es un ecommerce de monopatines electricos, que ofrece compras online mediante la API de mercado pago, los usuarios tambien pueden registrase y guardar sus productos favoritos. para el admin una UI que permite hacer un CRUD de todos los productos',

    img: 'https://github.com/user-attachments/assets/a102f5e8-c735-4dc0-a27c-0ccf5287f300',
    logo: erideLogo,
    github: 'https://github.com/pa-ku/eride_client',
    href: 'https://eridestore.netlify.app/',
    stack: [
      { image: react, name: 'React' },
      { image: nodejs, name: 'Node' },
      { image: mongodb, name: 'Mongo' },
      { image: styledcomponents, name: 'Styled.C' },
    ],
  },

  {
    title: 'Codi.plus',
    description:
      'Es un fork del proyecto de codi.link, adaptado a desktop con electron, donde se agregan nuevos themes y funcionalidades como tailwind.',
    img: 'https://github.com/user-attachments/assets/7f74d22e-6fe2-4769-8319-cbe6f60d0012',
    logo: codiplus,
    github: 'https://github.com/pa-ku/codi.plus.desktop',
    href: 'https://codeplusweb.vercel.app/',
    stack: [
      { image: js, name: 'Javascript' },
      { image: css, name: 'Css' },
      { image: electron, name: 'Electron' },
    ],
  },
  {
    title: 'Menu ChauGluten',
    description:
      'Un Menu online que te ofrece filtros, favoritos, con la opción de ingresar como admin y agregar,modificar y ver tu menu desde una interface intuitiva',
    img: 'https://github.com/user-attachments/assets/3d264d8c-84c2-41dd-bed3-c4e15f0585a6',
    logo: chaugluten,
    github: 'https://github.com/pa-ku/chau_gluten_menu',
    href: 'https://chaugluten.vercel.app/',
    stack: [
      { image: nextjs, name: 'Next' },
      { image: typescript, name: 'Typescript' },
      { image: tailwind, name: 'Tailwind' },
      { image: mongodb, name: 'Mongo' },
    ],
  },
  {
    title: 'Tejabot',
    description:
      'Es un bot automatizado que realiza reservas a canchas de padel, te permite guardar tu usario de forma local y activar un timer para realizar la reserva cuando quieras',

    img: 'https://github.com/user-attachments/assets/a9f20cd7-80ab-4f3c-a009-f729d083d753',
    logo: tejabot_logo,
    github: 'https://github.com/pa-ku/tejabot',
    href: 'https://tejabot.vercel.app/',
    stack: [
      { image: nextjs, name: 'Next' },
      { image: tailwind, name: 'Tailwind' },
    ],
  },
  {
    title: 'Tailwind Palete',
    description:
      'Palete te permite crear rapidamente y de forma dinamica una gama de colores y poder agregarla de una forma consistente a tus proyectos',

    img: 'https://github.com/user-attachments/assets/082c6aab-4fe3-423f-ac9e-a7e96f790578',
    logo: palete_logo,
    github: 'https://github.com/pa-ku/tailwind_palete',
    href: 'https://tailwind-palete.vercel.app/',
    stack: [
      { image: react, name: 'React' },
      { image: tailwind, name: 'Tailwind' },
    ],
  },
]
