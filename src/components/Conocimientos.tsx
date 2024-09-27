import React from 'react'

import jsIcon from '../assets/images/stack_logos/javascripticon.svg'
import CssIconn from '../assets/images/stack_logos/cssicon.svg'
import ReactIcon from '../assets/images/stack_logos/reacticon.svg'
import HtmlIcon from '../assets/images/stack_logos/htmlicon.svg'
import styledicon from '../assets/images/stack_logos/styledicon.svg'
import nodejsicon from '../assets/images/stack_logos/nodejsicon.svg'
import figmaIcon from '../assets/images/stack_logos/figmaicon.svg'
import photoshopIcon from '../assets/images/stack_logos/photoshopicon.svg'
import githubIcon from '../assets/images/stack_logos/githubicon.svg'
import mongo from '../assets/images/stack_logos/mongo.svg'
import sql from '../assets/images/stack_logos/sql.svg'
import TypeIcon from '../assets/images/stack_logos/typescript-ico.svg'
import ExpressIcon from '../assets/images/stack_logos/express-ico.svg'
import tailwindIco from '../assets/images/stack_logos/tailwind.svg'
import NextjsIcon from '../assets/images/stack_logos/nextjs.svg'
import prismaIcon from '../assets/images/stack_logos/prisma.svg'
import electron from '../assets/images/stack_logos/electron.svg'
import puppeterIcon from '../assets/images/stack_logos/puppeteer.svg'
import jest from '../assets/images/stack_logos/jest.svg'


export default function Conocimientos() {
  const design = new Map([
    ['Figma', figmaIcon],
    ['Photoshop', photoshopIcon],
  ])
  const frontend = new Map([
    ['NextJs', NextjsIcon],
    ['React', ReactIcon],
    ['JavaScript', jsIcon],
    ['Electron', electron],
    ['Tailwind', tailwindIco],
    ['Styled', styledicon],
    ['Css', CssIconn],
    ['TypeScript', TypeIcon],
    ['Html', HtmlIcon],
    ['Jest', jest],
  ])
  const backend = new Map([
    ['Express', ExpressIcon],
    ['Prisma', prismaIcon],
    ['NodeJs', nodejsicon],
    ['MongoDb', mongo],
    ['SQL', sql],
    ['Github', githubIcon],
    ['Puppeteer', puppeterIcon],

  ])

  return (
    <section className=' rounded-xl pb-20 flex flex-col flex-wrap items-center justify-center w-full gap-12 px-2 '>
      <h2 className='border-b-2 border-black text-4xl font-bold'>
        Conocimientos
      </h2>
      <RenderIcons icons={frontend} />
      <RenderIcons icons={backend} />
      <RenderIcons icons={design} />
    </section>
  )
}

export function RenderIcons({ icons }: RenderIconsProps) {
  return (
    <div className='animate-opacity  p-2 relative md:w-[40em] flex flex-col justify-start items-start   '>
      <div className='size-22 flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 '>
        {[...icons].map(([name, component]) => (
          <div
            key={name}
            className='size-16 rounded-full flex flex-col items-center justify-center'
          >
            <img
              className='size-10 object-contain'
              key={name}
              src={component}
              alt={`icono ${name}`}
            />

            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

type RenderIconsProps = {
  icons?: any
  description?: string
  iconName?: string
}
