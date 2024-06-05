import { useState } from 'react'
import styled from 'styled-components'
import pokeLogo from '../../../assets/images/icons/poke-logo.webp'
import VolumeIcons from '../../ui/VolumeIcons'
import useLocalStorage from 'use-local-storage'
import PokeGuess from './PokeGuess'
import PlayingUi from './PlayingUi'
import startSound from '../../../assets/sound/clickSound.mp3'
import { useCountDown } from '../../../hooks/useCountDown'
import { poke_names } from '../../../../data'
export default function StartMenu() {
  const startAudio = new Audio(startSound)
  const [sound, setSound] = useLocalStorage('soundActive', true)
  startAudio.volume = sound ? 0.3 : 0

  const [maxScore, setMaxScore] = useLocalStorage('gen1Score', {
    gen1: 0,
    gen2: 0,
    gen3: 0,
  })
  const [genSelected, setGenSelected] = useLocalStorage('genSelected', {
    gen1: true,
    gen2: false,
    gen3: false,
    selected: 'gen1',
    value: maxScore.gen1,
    pokeNumber: 151,
  })
  const [scoreUp, setScoreUp] = useState(false)
  const { time, setTime, startTimer, resetTimer } = useCountDown(25)
  const [answers, setAnswers] = useState({
    right: 0,
    wrong: 0,
  })
  const [currentPoke, setCurrentPoke] = useState([])
  const [loading, setLoading] = useState(false)

  const [endMsj, setEndMsj] = useState()
  const [isPlaying, setIsPlaying] = useState(false)
  const [rolls, setRolls] = useState([])
  const [legacySound, setLegacySound] = useLocalStorage(
    'Sound Generation',
    true
  )
  function rollNumber() {
    const newRolls = []
    while (newRolls.length < 4) {
      const randomNumber = Math.floor(Math.random() * genSelected.pokeNumber)
      if (!newRolls.includes(randomNumber)) {
        newRolls.push(randomNumber)
      }
    }
    setRolls(newRolls)
    /*  setShowImage(false) */
    return newRolls[0]
  }

  function selectGeneration(e) {
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

  function selectPokemonSound() {
    setLegacySound(legacySound ? false : true)
  }

  async function FindPokemon() {
    try {
      setLoading(true)
      let randomPokemon = Math.floor(Math.random() * genSelected.pokeNumber + 1)
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
      )
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const data = await res.json()
      setCurrentPoke(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  async function startGame() {
    try {
      startAudio.play()
      await FindPokemon()
      startTimer()
      rollNumber()
      setIsPlaying(true)
      setAnswers({
        right: 0,
        wrong: 0,
      })
    } catch (err) {
      console.error('Error starting game:', err)
    }
  }

  return (
    <>
      {!isPlaying && (
        <MenuWrapper>
          <VolumeIcons sound={sound} setSound={setSound} />
          <StartButton onClick={startGame}>
            <p>START</p>
            <PokeLogo src={pokeLogo} alt="" />
          </StartButton>

          <OptionsCtn>
            <CheckBox
              defaultChecked={legacySound}
              onChange={selectPokemonSound}
              type="checkbox"
            />

            <Select
              onChange={selectGeneration}
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
      )}
      {isPlaying && (
        <>
          <PokeWrapper>
            <PlayingUi
              answersRight={answers.right}
              answersWrong={answers.wrong}
              scoreUp={scoreUp}
              setSound={setSound}
              sound={sound}
              time={time}
            />

            <PokeGuess
              genSelected={genSelected}
              setMaxScore={setMaxScore}
              legacySound={legacySound}
              setScoreUp={setScoreUp}
              sound={sound}
              answers={answers}
              setAnswers={setAnswers}
              time={time}
              setTime={setTime}
              resetTimer={resetTimer}
              setEndMsj={setEndMsj}
              rolls={rolls}
              rollNumber={rollNumber}
              currentPoke={currentPoke}
              loading={loading}
              poke_names={poke_names}
              FindPokemon={FindPokemon}
              setIsPlaying={setIsPlaying}
            />
          </PokeWrapper>
        </>
      )}
    </>
  )
}
const PokeWrapper = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  @media (max-width: 800px) {
    width: 300px;
  }
`

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
