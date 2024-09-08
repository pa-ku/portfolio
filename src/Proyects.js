import erideLogo from './assets/images/proyect_logos/eride-logo.webp'
import erideImg from './assets/images/proyect_images/EridePageImage.webp'
import quantum_image from './assets/images/proyect_images/quantum_image.webp'
import chaugluten_image from './assets/images/proyect_images/chaugluten.webp'
import quantum_logo from './assets/images/proyect_logos/quantum_logo.png'
import chaugluten from './assets/images/proyect_logos/chaugluten.webp'

import reactico from './assets/images/stack_logos/reacticon.svg'
import nodeico from './assets/images/stack_logos/nodejsicon.svg'
import styleico from './assets/images/stack_logos/styledicon.svg'
import mongoico from './assets/images/stack_logos/mongo.svg'
import typeico from './assets/images/stack_logos/typescript-ico.svg'
import tailwindico from './assets/images/stack_logos/tailwind.svg'
import nextjs from './assets/images/stack_logos/nextjs.svg'

export const proyects = [
  /*   {
    title: 'Anda palla Gluten',
    description:
      'El Menu de bar sin tacc ofrece la facilidad de filtrar productos, crearlos eliminarlos y modificarlos todo desde el navegador con una cuenta administrador',
    img: erideImg,
    logo: sintacImg,
    github: '',
    href: 'https://paulsmenu.netlify.app',
    stack: [reactico, typeico, nodeico, mongoico, tailwindico],
  }, */
  {
    title: 'Quantum Ui ',
    description: [
      'Design system enfocado en el uso facil de componentes para Tailwind y React',
    ],
    img: 'https://github.com/user-attachments/assets/6eb664be-7fcd-4a06-ade5-0680bcd24336',
    logo: quantum_logo,
    github: 'https://github.com/pa-ku/quantum_design',
    href: 'https://quantumui.netlify.app',
    stack: [reactico, typeico, tailwindico],
  },
  {
    title: 'Menu ChauGluten',
    description:
      'Un Menu online que te ofrece filtros favoritos, analiticas, con la opción de ingresar como admin y agregar,modificar y ver tu menu desde una interface intuitiva',
    img: 'https://github.com/user-attachments/assets/3d264d8c-84c2-41dd-bed3-c4e15f0585a6',
    logo: chaugluten,
    github: 'https://github.com/pa-ku/chau_gluten_menu',
    href: 'https://chaugluten.vercel.app/',
    stack: [nextjs, typeico, tailwindico, mongoico],
  },
  {
    title: 'E-ride Scooter Store',
    description:
      'Un ecommerce estatico que recibe transacciones con la api de Mercado pago. Cuenta con un filtro de productos, y guardado de favoritos que se almacenan en el Local Storage',

    img: 'https://github.com/user-attachments/assets/a102f5e8-c735-4dc0-a27c-0ccf5287f300',
    logo: erideLogo,
    github: 'https://github.com/pa-ku/eride_client',
    href: 'https://eridestore.netlify.app/',
    stack: [reactico, styleico],
  },
]
