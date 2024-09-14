import erideLogo from './assets/images/proyect_logos/eride-logo.webp'
import quantum_logo from './assets/images/proyect_logos/quantum_logo.png'
import palete_logo from './assets/images/proyect_logos/paleteLogo.png'
import tejabot_logo from './assets/images/proyect_logos/tejabotLogo.png'
import chaugluten from './assets/images/proyect_logos/chaugluten.webp'

import react from './assets/images/stack_logos/reacticon.svg'
import nodejs from './assets/images/stack_logos/nodejsicon.svg'
import styledcomponents from './assets/images/stack_logos/styledicon.svg'
import mongodb from './assets/images/stack_logos/mongo.svg'
import typescript from './assets/images/stack_logos/typescript-ico.svg'
import tailwind from './assets/images/stack_logos/tailwind.svg'
import nextjs from './assets/images/stack_logos/nextjs.svg'

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
    stack: [react, typescript, tailwind],
  },
  {
    title: 'E-ride Scooter Store',
    description:
      'Un ecommerce estatico que recibe transacciones con la api de Mercado pago. Cuenta con un filtro de productos, y guardado de favoritos que se almacenan en el Local Storage',

    img: 'https://github.com/user-attachments/assets/a102f5e8-c735-4dc0-a27c-0ccf5287f300',
    logo: erideLogo,
    github: 'https://github.com/pa-ku/eride_client',
    href: 'https://eridestore.netlify.app/',
    stack: [react, nodejs, mongodb, styledcomponents],
  },
  {
    title: 'Menu ChauGluten',
    description:
      'Un Menu online que te ofrece filtros favoritos, analiticas, con la opción de ingresar como admin y agregar,modificar y ver tu menu desde una interface intuitiva',
    img: 'https://github.com/user-attachments/assets/3d264d8c-84c2-41dd-bed3-c4e15f0585a6',
    logo: chaugluten,
    github: 'https://github.com/pa-ku/chau_gluten_menu',
    href: 'https://chaugluten.vercel.app/',
    stack: [nextjs, typescript, tailwind, mongodb],
  },
  {
    title: 'Tejabot',
    description:
      'Te permite realizar reservas de una forma automatica en las canchas de padel del Tejadito, automatizando el proceso con puppeteer',

    img: 'https://github.com/user-attachments/assets/a9f20cd7-80ab-4f3c-a009-f729d083d753',
    logo: tejabot_logo,
    github: 'https://github.com/pa-ku/tejabot',
    href: 'https://tejabot.vercel.app/',
    stack: [nextjs, tailwind],
  },
  {
    title: 'Tailwind Palete',
    description:
      'Es una solucion a crear rapidamente una gama de colores consistente, que te permite agregarlo de una forma rapida',

    img: 'https://github.com/user-attachments/assets/082c6aab-4fe3-423f-ac9e-a7e96f790578',
    logo: palete_logo,
    github: 'https://github.com/pa-ku/tailwind_palete',
    href: 'https://tailwind-palete.vercel.app/',
    stack: [react, tailwind],
  },
]
