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
    <div className='px-4 animate-slide'>
      <InfoCtn className='shadow-lg shadow-gray-100 h-60 relative flex  duration-500'>
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
              <p className='pointer-events-none w-max left-6 group-hover:opacity-100 opacity-0 duration-300  absolute group-hover:left-11 py-1 px-3 -z-10 rounded-r-lg shadow- bg-secundary-600  text-white'>
                {name}
              </p>
            </span>
          ))}
        </StackContainer>

        <a
          className={`${
            extraProyect
              ? 'from-secundary-600 to-secundary-300 '
              : 'to-primary-300 from-primary-200'
          }' peer outline  outline-4 outline-white -left-14 z-10 absolute rounded-full w-max h-max duration-200 cursor-pointer b-2 bg-gradient-to-bl from-primary-200  shadow-sm hidden hover:animate-balance md:flex items-center justify-cente group'`}
          href={href}
          target='_blank'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className='  object-contain drop-shadow-md p-6 brightness-140 w-28 h-28 peer'
            loading='lazy'
            src={LogoSrc}
            alt={`logo de ${title}`}
          />
        </a>
        <span
          className={`${
            extraProyect ? 'text-secundary-600' : 'text-primary-600'
          } -left-36 pointer-events-none peer-hover:opacity-100 duration-200  opacity-0 absolute`}
        >
          Ir a la web
        </span>

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
        <a
          className='size-10 hover:bg-secundary-200 rounded-full'
          title='Proyecto en Github'
          target='blank'
          href={githubLink}
        >
          <img
            src={gitSvg}
            className=' drop-shadow-md p-1 brightness-140 w-full h-full'
            alt='Github Link'
          />
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
  width: 660px;
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
