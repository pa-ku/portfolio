import React from 'react'
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
  ImgSrc,
  title,
  description,
  href,
  githubLink,
  propIcons,
}: ProyectTemplate) {
  return (
    <div className='px-4'>
      <InfoCtn className='relative flex gap-2 h-56'>
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
          {propIcons.map((item, index) => (
            <img key={index} src={item} alt={`icono ${item}`} />
          ))}
        </StackContainer>

        <a
          title='Ver pagina'
          className='peer outline outline-4 outline-white -left-14 z-10 absolute rounded-full w-max h-max duration-200 cursor-pointer b-2 bg-gradient-to-bl from-[var(--pink-250)] to-[var(--pink-300)] shadow-sm hidden md:flex items-center justify-cente  group'
          href={href}
          target='_blank'
        >
          <img
            className=' object-contain drop-shadow-md p-6 brightness-140 w-28 h-28 peer'
            loading='lazy'
            src={LogoSrc}
            alt={`logo de ${title}`}
          />
        </a>

        <img
          className='absolute object-cover object-top w-full h-full duration-200 opacity-0 pointer-events-none peer-hover:opacity-100 rounded-3xl '
          src={ImgSrc}
          alt={`imagen de ${title}`}
        />
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

        {/*      <a
          className="accent-button text-white shadow-inner shadow-slate-700 "
          title="Proyecto en Github"
          target="blank"
          href={href}
        >
          <span className="drop-shadow-sm"> Saber mas</span>
        </a> */}

        <a
          className='button'
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
  box-shadow: 20px 20px 30px 0px #f3f3f3;
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
