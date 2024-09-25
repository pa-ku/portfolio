import ProyectTemplate from './ProyectTemplate'
import { proyects } from '../Proyects'
import { useState } from 'react'

export default function ProyectLayout() {
  const [showMore, setShowMore] = useState(false)
  return (
    <>
      <div className='flex flex-col gap-10 pb-20 '>
        {proyects
          .slice(0, showMore ? 9 : 3)
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
          <div className='w-full flex items-center justify-center'>
            <button
              onClick={() => setShowMore(!showMore)}
              className='w-max px-4 py-3 rounded-lg font-bold  border-black hover:bg-black hover:text-white'
              target='_blank'
              rel='noreferrer'
            >
              {!showMore && '+ Ver más proyectos'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
