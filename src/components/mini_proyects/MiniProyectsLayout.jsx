import { useState } from 'react'
import styled from 'styled-components'
import Typing from './Typing'
import StartMenu from './PokeGuess/Menu'

import Subtitle from '../Subtitle'

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, var(--checkbox-width));
  align-items: center;
  justify-content: center;
  z-index: 0;
  border-radius: 10px;
  position: relative;
`

const ProyectContainer = styled.div`
  opacity: 0;
  animation: 1s opacity forwards;
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const Selected = styled.div`
  position: absolute;
  height: 100%;
  border-radius: 10px;
  background-color: var(--primary-400);
  z-index: -11;
  bottom: 0px;
  width: var(--checkbox-width);
  transition: all 500ms;
  left: ${(props) => props.$left};
`

export default function MiniProyects() {
  const proyects = [
    {
      component: <StartMenu />,
      name: 'Poke Guess',
    },
    {
      component: <Typing />,
      name: 'Poke Type',
    },
  ]
  const [index, setIndex] = useState(0)

  return (
    <>
      <footer className='font-pixel w-full h-[35em] gap-5 flex items-center flex-col justify-start'>
        <Subtitle fontSize='3rem' altButton={true}>
          Fancy a break?
        </Subtitle>

        <NavContainer className=' bg-gray-200 text-gray-600'>
          <Selected
            className={
              (index == 1 && 'left-[var(--checkbox-width)]') || 'left-[0px]'
            }
          ></Selected>
          {proyects.map((project, i) => (
            <input
              className='
              flex
              h-10
              before:duration-700
            before:w-full
            before:h-full
            before:flex
            before:text-xl
            before:items-center
            before:justify-center
            before:text-center
            before:cursor-pointer
            before:content-[attr(content)]
            appearance-none
checked:before:text-white
            '
              type='checkbox'
              key={project.name}
              content={project.name}
              name={'proyect'}
              checked={i === index}
              onClick={() => setIndex(i)}
            ></input>
          ))}
        </NavContainer>
        <ProyectContainer>{proyects[index].component}</ProyectContainer>
      </footer>
    </>
  )
}
