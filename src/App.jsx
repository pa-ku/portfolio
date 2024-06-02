import styled from 'styled-components'
import Header from './components/Header'
import './index.css'
import Conocimientos from './components/Conocimientos'
import Wave from './components/Wave'
import ProyectLayout from './components/ProyectLayout'
import MiniProyectsLayout from './components/mini_proyects/MiniProyectsLayout'
import Subtitle from './components/ui/Subtitle'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 6em;
  gap: 6em;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  padding-bottom: 10em;
`

const ProyectosCtn = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  padding-inline: 10px;
  @media (max-width: 800px) {
    gap: 80px;
  }
`

const ConocimientoCtn = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 70px;
`

function App() {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {}, [inView])

  return (
    <>
      <Wrapper>
        <Wave />
        <Header
          title={'Pablo Kuhn'}
          subtitle={'FullStack developer'}
          description={
            'Soy un desarrollador autodidacta, enfocado en la creación de experiencias digitales'
          }
        />
        <ProyectosCtn>
          <ProyectLayout />
        </ProyectosCtn>
        <ConocimientoCtn ref={ref}>
          <Subtitle altButton fontSize="3rem">
            Conocimientos
          </Subtitle>
          <Conocimientos />
        </ConocimientoCtn>
     
        <MiniProyectsLayout />
      </Wrapper>
    </>
  )
}

export default App
