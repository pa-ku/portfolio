import { useState } from 'react'
import styled from 'styled-components'
import CheckBox from '../ui/CheckBox'
import Typing from './Typing'
import StartMenu from './PokeGuess/Menu'
import { useEffect } from 'react'
import Subtitle from '../ui/Subtitle'

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 30px;
  * {
    font-family: 'Pixelify', sans-serif;
  }
`

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, var(--checkbox-width));
  align-items: center;
  justify-content: center;
  background-color: var(--blue-100);
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
  background-color: var(--blue-600);
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

  function handleSelected(i) {
    setIndex(i)
  }

  return (
    <>
      <Wrapper>
        <Subtitle fontSize="3rem" altButton={true}>
          Mini Juegos
        </Subtitle>
        <NavContainer>
          <Selected
            className={
              (index == 1 && 'left-[var(--checkbox-width)]') || 'left-[0px]'
            }
          ></Selected>
          {proyects.map((project, i) => (
            <CheckBox
              key={project.name}
              content={project.name}
              name={'proyect'}
              checked={i === index}
              onClick={() => handleSelected(i)}
            ></CheckBox>
          ))}
        </NavContainer>
        <ProyectContainer>{proyects[index].component}</ProyectContainer>
      </Wrapper>
    </>
  )
}
