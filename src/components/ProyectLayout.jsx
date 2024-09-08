import ProyectTemplate from './ProyectTemplate'
import { proyects } from '../Proyects'

export default function ProyectLayout() {
  return (
    <>
      <div className='flex flex-col gap-20'>
        {proyects.map(
          ({ title, description, img, logo, github, href, stack }) => (
            <ProyectTemplate
              key={title}
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
      </div>
    </>
  )
}
