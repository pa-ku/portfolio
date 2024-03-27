import React from 'react'
import styled from 'styled-components'
import pokeLogo from '../../../assets/icons/poke-logo.svg'
import VolumeIcons from '../../ui/VolumeIcons'

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 300px;
  flex-direction: column;
`

const StartButton = styled.button`
  background-color: #fff;
  border: 0px;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  position: relative;
  &:hover img {
    rotate: 25deg;
  }

  & p {
    position: absolute;
    transition: 300ms;
    left: 4px;
    font-size: 25px;
    color: #333;
  }
  &:hover p {
    left: -80px;
    border-radius: 10px;
    padding: 4px 7px;
  }
`

const PokeLogo = styled.img`
  width: 70px;
  margin: 0px;
  height: 70px;
  pointer-events: none;
  object-fit: contain;
  transition: 300ms;
  animation: 1000ms rotate forwards;
  animation: 3000ms scale infinite;
  @keyframes scale {
    0% {
      scale: 1;
    }
    60% {
      scale: 1.1;
    }
    100% {
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`

type Props = {
  setGenSelected: Function
  setSound: Function
  setPokeGeneration: Function
  pokeGeneration: any
  sound: boolean
  startGame: Function
  scoreUp: Function
  endMsj: string
  genSelected: any
  maxScore: any
}

export default function StartMenu({
  setGenSelected,
  pokeGeneration,
  sound,
  setSound,
  startGame,
  scoreUp,
  endMsj,
  maxScore,
  genSelected,
}: Props) {
  function handleSelectedGen(e) {
    let value = e.target.value
    switch (value) {
      case 'Gen1':
        console.log(pokeGeneration)
        setGenSelected({
          gen1: true,
          gen2: false,
          gen3: false,
          selected: 'gen1',
          pokeNumber: 151,
          value: maxScore.gen1,
        })
        break
      case 'Gen2':
        console.log(pokeGeneration)
        setGenSelected({
          gen1: false,
          gen2: true,
          gen3: false,
          selected: 'gen2',
          pokeNumber: 251,
          value: maxScore.gen2,
        })
        break
      case 'Gen3':
  
        console.log(pokeGeneration)
        setGenSelected({
          gen1: false,
          gen2: false,
          gen3: true,
          selected: 'gen3',
          pokeNumber: 386,
          value: maxScore.gen3,
        })
        break
    }
  }
  return (
    <>
      <MenuWrapper>
        <VolumeIcons sound={sound} setSound={setSound} />
        <StartButton onClick={startGame}>
          <p>START</p>
          <PokeLogo src={pokeLogo} alt="" />
        </StartButton>
        <Select
          onChange={handleSelectedGen}
          name="Elegir generacion"
          id="poke-generation"
        >
          <Option selected={genSelected.gen1} value="Gen1">
            Generacion 1
          </Option>
          <Option selected={genSelected.gen2} value="Gen2">
            Generacion 2
          </Option>
          <Option selected={genSelected.gen3} value="Gen3">
            Generacion 3
          </Option>
        </Select>
        <Score $scoreAnim={scoreUp}>Mejor Puntaje: {genSelected.value}</Score>
        <PopUpText>{endMsj}</PopUpText>
      </MenuWrapper>
    </>
  )
}

const Option = styled.option`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  border: 0px;
`
const PopUpText = styled.p`
  width: 20ch;
  text-align: center;
  font-size: 25px;
  color: #333;
  animation: glow 200ms ease forwards;
`

const Select = styled.select`
  font-size: 20px;
  border: 0px;
  cursor: pointer;
  &:hover {
    color: var(--blue-900);
  }
`

const Score = styled.p`
  font-size: 25px;
  background: linear-gradient(to right, var(--pink-500), var(--pink-300));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 2s ease forwards;
  @keyframes glow {
    0% {
      opacity: 0;
      filter: invert(0.5);
    }

    20% {
      opacity: 1;
      filter: invert(0.5);
    }
    100% {
      filter: invert(0);
    }
  }
`
