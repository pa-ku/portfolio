import React, { useRef, useState } from 'react'
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
  const [showProyect, ShowProyect] = useState(false)

  const handleMouseEnter = () => {
    ShowProyect(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    ShowProyect(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0 // Reset el video al principio si es necesario
    }
  }

  return (
    <div className='flex items-center md:flex-row py-4 md:py-0 flex-col  shadow-lg shadow-gray-100 rounded-xl md:w-[40em] relative justify-between animate-slide '>
      <InfoCtn className='md:h-60 relative flex duration-500'>
        <div className='w-full md:ml-20'>
          <h2 className='text-xl font-bold text-gray-700'>{title}</h2>
          <p className='text-gray-600'>{description}</p>
          <ActionButtons
            githubLink={githubLink}
            href={href}
            LogoSrc={LogoSrc}
          />
        </div>

        <a
          title='sitio web'
          className={`${
            extraProyect ? 'bg-gray-600 ' : 'bg-black '
          }' peer outline z-20 outline-4 outline-white -left-14 absolute rounded-full w-max h-max duration-200 cursor-pointer b-2 bg-gradient-to-bl  shadow-sm hidden md:flex items-center justify-cente group'`}
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
      </InfoCtn>
      <video
        ref={videoRef}
        className={`${
          showProyect ? 'opacity-100' : 'opacity-0'
        } z-10 peer-hover:h-72 absolute object-cover object-top w-full duration-300  pointer-events-none h-full peer-hover:opacity-100 rounded-3xl`}
        width='800'
        height='600'
      >
        <source type='video/mp4' src={videoSrc} />
      </video>
      <div className='md:w-10 px-5 md:px-0 gap-x-3 md:gap-x-0 gap-y-3 flex bg-white w-full md:items-start justify-start md:flex-col'>
        {propIcons.map(({ image, name }, index) => (
          <div className=' relative group md:h-8 items-center flex' key={index}>
            <img
              className='size-8 object-contain'
              src={image}
              alt={`icono ${image}`}
            />
            <p className='absolute md:relative pointer-events-none w-max -translate-x-5 group-hover:opacity-100 opacity-0 duration-300  group-hover:translate-x-2 py-1 md:px-3 -z-20 rounded-r-lg shadow- bg-gray-900  text-white'>
              {name}
            </p>
          </div>
        ))}
      </div>
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
