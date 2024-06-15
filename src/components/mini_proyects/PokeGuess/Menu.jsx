import { useState } from 'react'
import styled from 'styled-components'
import pokeLogo from '../../../assets/images/icons/poke-logo.webp'
import VolumeIcons from '../../VolumeIcons'
import useLocalStorage from 'use-local-storage'
import PokeGuess from './Game'
import PlayingUi from './UI'
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
          R,
          value: maxScore.gen3,
        })
        break
    }
  }

  function selectPokemonSound() {
    setLegacySound(!legacySound)
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
        <footer className=' flex flex-col items-center'>
          <StartButton onClick={startGame}>
            <p>START</p>
            <PokeLogo src={pokeLogo} alt='' />
          </StartButton>

          <section className='flex flex-col gap-4'>
            <VolumeIcons sound={sound} setSound={setSound} />

            <input
              className="h-10 relative w-full 
              cursor-pointer
              flex
              before:duration-200
              before:p-2
              before:text-gray-700
              before:bg-gray-400
               before:h-max 
               before:w-full
               before:text-xl
               before:text-center
               before:rounded-md
               before:content-['Legacy_Sounds']
               checked:before:bg-[var(--blue-850)]
               checked:before:text-white"
              defaultChecked={legacySound}
              onChange={selectPokemonSound}
              type='checkbox'
            />

            <select
              className='w-full cursor-pointer text-center text-xl bg-[var(--blue-300)] p-2 rounded-md'
              onChange={selectGeneration}
              name='Elegir generacion'
              id='poke-generation'
              value={genSelected.selected}
            >
              <option value='gen1'>Gen 1</option>
              <option value='gen2'>Gen 2</option>
              <option value='gen3'>Gen 3</option>
            </select>

            <p className=' text-xl text-[var(--pink-400)]'>
              Mejor Puntaje {genSelected.value}
            </p>
            <PopUpText>{endMsj}</PopUpText>
          </section>
        </footer>
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
const StartButton = styled.button`
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

const PopUpText = styled.p`
  width: 20ch;
  text-align: center;
  font-size: 25px;
  color: #333;
  animation: glow 200ms ease forwards;
`
