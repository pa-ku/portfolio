import ProyectTemplate from './ProyectTemplate'
import { proyects } from '../Proyects'
import { useState } from 'react'

export default function ProyectLayout() {
  const [showMore, setShowMore] = useState(false)
  return (
    <>
      <div className='flex flex-col gap-10 pb-20 '>
        {proyects
          .slice(0, showMore ? 5 : 3)
          .map(
            ({ title, description, img, logo, github, href, stack }, index) => (
              <ProyectTemplate
                key={title}
                title={title}
                description={description}
                ImgSrc={img}
                LogoSrc={logo}
                href={href}
                githubLink={github}
                propIcons={stack}
                extraProyect={index > 2}
              />
            )
          )}
        {!showMore && (
          <button
            onClick={() => setShowMore(!showMore)}
            className=' bg-secondary-50 text-secundary-600 hover:bg-secundary-500 hover:text-secundary-200 w-max m-auto px-4 py-3 text-lg rounded-lg'
            target='_blank'
            rel='noreferrer'
          >
            {!showMore && 'Ver más proyectos'}
          </button>
        )}
      </div>
    </>
  )
}
