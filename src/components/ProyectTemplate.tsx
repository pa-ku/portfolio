import React, { useRef } from 'react'
import styled from 'styled-components'
import gitSvg from '../assets/images/icons/github.svg'

type ProyectTemplate = {
  LogoSrc: string
  imgAlt: string
  ImgSrc: string
  backgroundAlt: string
  title: string
  description: string
  href: string
  githubLink: string
  propIcons: [string]
}

export default function ProyectTemplate({
  LogoSrc,
  ImgSrc: videoSrc,
  title,
  description,
  href,
  githubLink,
  propIcons,
  extraProyect,
}: ProyectTemplate) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0 // Reset el video al principio si es necesario
    }
  }

  return (
    <div className='px-4 animate-slide '>
      <InfoCtn className=' shadow-lg w-[40em] shadow-gray-100 h-60 relative flex  duration-500'>
        <div className='w-full md:ml-20'>
          <h2 className='text-xl font-bold text-gray-700'>{title}</h2>
          <p className='text-gray-600'>{description}</p>
          <ActionButtons
            githubLink={githubLink}
            href={href}
            LogoSrc={LogoSrc}
          />
        </div>
        <StackContainer>
          {propIcons.map(({ image, name }, index) => (
            <span className='relative group h-8 items-center flex' key={index}>
              <img src={image} alt={`icono ${image}`} />
              <p className='pointer-events-none w-max left-6 group-hover:opacity-100 opacity-0 duration-300  absolute group-hover:left-11 py-1 px-3 -z-10 rounded-r-lg shadow- bg-gray-900  text-white'>
                {name}
              </p>
            </span>
          ))}
        </StackContainer>

        <a
          title='sitio web'
          className={`${
            extraProyect
              ? 'from-gray-600 to-gray-300 '
              : 'to-primary-400 from-primary-300 '
          }' peer outline  outline-4 outline-white -left-14 z-10 absolute rounded-full w-max h-max duration-200 cursor-pointer b-2 bg-gradient-to-bl from-primary-200  shadow-sm hidden md:flex items-center justify-cente group'`}
          href={href}
          target='_blank'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className=' object-contain drop-shadow-md p-6 brightness-140 w-28 h-28 peer'
            loading='lazy'
            src={LogoSrc}
            alt={`logo de ${title}`}
          />
        </a>
        <video
          ref={videoRef}
          className='peer-hover:h-72 absolute object-cover object-top w-full duration-300 opacity-0 pointer-events-none h-full peer-hover:opacity-100 rounded-3xl '
          width='800'
          height='600'
        >
          <source type='video/mp4' src={videoSrc} />
        </video>
      </InfoCtn>
    </div>
  )
}

function ActionButtons({ href, LogoSrc, githubLink }) {
  return (
    <>
      <span className='flex py-2 items-center gap-2'>
        <a
          className='accent-button md:hidden'
          title='Proyecto en Github'
          target='blank'
          href={href}
        >
          <img
            src={LogoSrc}
            className=' drop-shadow-md p-1 brightness-140 w-full h-full '
            alt='Github Link'
          />
        </a>
    {/*     <a
          className=' bg-gray-800 hover:bg-gray-600 text-white py-1 px-4 rounded-xl'
          title='Proyecto en Github'
          target='blank'
          href={githubLink}
        >
          Documentación
        </a> */}
        <a
          className='flex items-center gap-2 font-bold hover:text-white hover:bg-gray-800 group justify-center h-8 border-2 border-black py-1 px-4 rounded-xl'
          title='Proyecto en Github'
          target='blank'
          href={githubLink}
        >
          <img
            src={gitSvg}
            className='group-hover:invert object-contain size-6'
            alt='Github Link'
          />
          Repo
        </a>
      </span>
    </>
  )
}

const InfoCtn = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  padding-block: 1em;
  background-color: #fff;
  border-radius: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    padding: 1em 1em;
  }
`

const StackContainer = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  height: 100%;
  & img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
  @media (max-width: 800px) {
    flex-direction: row;
    width: 100%;
    justify-content: start;
    height: max-content;
  }
`
