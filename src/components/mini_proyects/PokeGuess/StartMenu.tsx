import React from 'react'
import styled from 'styled-components'
import pokeLogo from '../../../assets/images/icons/poke-logo.webp'
import VolumeIcons from '../../ui/VolumeIcons'

type Props = {
  setGenSelected: Function
  setSound: Function
  setPokeGeneration: Function
  pokeGeneration: any
  sound: boolean
  onClick?: any
  scoreUp: Function
  endMsj: string
  genSelected: any
  maxScore: any
  setOldSound: any
  oldSound: Boolean
}

export default function StartMenu({
  setGenSelected,
  sound,
  setSound,
  onClick,
  endMsj,
  maxScore,
  genSelected,
  setOldSound,
  oldSound,
}: Props) {
  function handleSelectedGen(e) {
    let value = e.target.value
    switch (value) {
      case 'gen1':
        setGenSelected({
          selected: 'gen1',
          pokeNumber: 151,
          value: maxScore.gen1,
        })
        break
      case 'gen2':
        setGenSelected({
          selected: 'gen2',
          pokeNumber: 251,
          value: maxScore.gen2,
        })
        break
      case 'gen3':
        setGenSelected({
          selected: 'gen3',
          pokeNumber: 386,
          value: maxScore.gen3,
        })
        break
    }
  }

  function handleOldSound() {
    setOldSound(oldSound ? false : true)
  }

  return (
    <>
      <MenuWrapper>
        <VolumeIcons sound={sound} setSound={setSound} />
        <StartButton onClick={onClick}>
          <p>START</p>
          <PokeLogo src={pokeLogo} alt="" />
        </StartButton>

        <OptionsCtn>
          <CheckBox
            defaultChecked={oldSound}
            onChange={handleOldSound}
            type="checkbox"
          />

          <Select
            onChange={handleSelectedGen}
            name="Elegir generacion"
            id="poke-generation"
            value={genSelected.selected}
          >
            <Option value="gen1">Generacion 1</Option>
            <Option value="gen2">Generacion 2</Option>
            <Option value="gen3">Generacion 3</Option>
          </Select>

          <Score>Mejor Puntaje: {genSelected.value}</Score>
          <PopUpText>{endMsj}</PopUpText>
        </OptionsCtn>
      </MenuWrapper>
    </>
  )
}

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  flex-direction: column;
`

const OptionsCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`

const CheckBox = styled.input`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  &::before {
    position: absolute;
    content: 'Old Pokemon Sounds';
    padding: 12px;
    font-family: Pixelify;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: 20px;
    color: #999999;
    border-radius: 8px;
    background-color: #e6e6e6;
    border: 2px solid #c6c6c6;
    font-size: 19px;
    transition: 200ms;
    font-weight: 600;
  }
  &:checked::before {
    background-color: var(--blue-100);
    color: var(--blue-900);
    border: 2px solid var(--blue-900);
  }
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
      filter: invert(0.5);
    }

    20% {
      filter: invert(0.5);
    }
    100% {
      filter: invert(0);
    }
  }
`
