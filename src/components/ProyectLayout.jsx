import ProyectTemplate from './ProyectTemplate'
import { proyects } from '../Proyects'


export default function ProyectLayout() {
  return (
    <>
      {proyects.map(
        ({ title, description, img, logo, github, href, stack }) => (
          <ProyectTemplate
            title={title}
            description={description}
            ImgSrc={img}
            LogoSrc={logo}
            href={href}
            githubLink={github}
            propIcons={stack}
          />
        )
      )}
    </>
  )
}
