import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import useLocalStorage from 'use-local-storage'
import { useCountDown } from '../../../hooks/useCountDown'
import startSound from '../../../assets/sound/clickSound.mp3'
import { usePokeNames } from '../../../hooks/usePokeNames'
import StartMenu from './StartMenu'
import PlayingUi from './PlayingUi'

export default function PokeGuess() {
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
  const { pokeNames } = usePokeNames(
    genSelected.pokeNumber,
    genSelected.pokeNumber
  )
  const [currentPoke, setCurrentPoke] = useState('')
  const [rolls, setRolls] = useState([])
  const [showImage, setShowImage] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [loading, setLoading] = useState(true)
  const [answers, setAnswers] = useState({
    right: 0,
    wrong: 0,
  })
  const [shuffle, setShuffle] = useState()
  const [endMsj, setEndMsj] = useState('')
  const { time, setTime, startTimer, resetTimer } = useCountDown(40)
  const [scoreUp, setScoreUp] = useState(false)
  /* SoundBank */
  const [oldSound, setOldSound] = useLocalStorage('Sound Generation', true)
  const [sound, setSound] = useLocalStorage('soundActive', true)
  const [actualSound, setActualSound] = useState()
  const startAudio = new Audio(startSound)
  const pokeAudio = new Audio(actualSound)

  useEffect(() => {
    startAudio.volume = sound ? 0.3 : 0
    pokeAudio.volume = sound ? 0.3 : 0
  }, [[], sound])

  function FindPokemon() {
    setLoading(true)
    let randomPokemon = Math.floor(Math.random() * pokeNames.length)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
      .then((res) => {
        const data = res.data
        setCurrentPoke(data)
        setLoading(false)
      })
  }

  function rollNumber() {
    const newRolls = []
    while (newRolls.length < 4) {
      const randomNumber = Math.floor(Math.random() * pokeNames.length)
      if (!newRolls.includes(randomNumber)) {
        newRolls.push(randomNumber)
      }
    }
    setRolls(newRolls)
    setShowImage(false)

    return newRolls[0]
  }

  useEffect(() => {
    if (currentPoke)
      setActualSound(
        oldSound ? currentPoke.cries.legacy : currentPoke.cries.latest
      )
  }, [currentPoke])

  useEffect(() => {
    if (time === 0) {
      switch (genSelected.selected) {
        case 'gen1':
          setMaxScore((prevScore) => ({
            ...prevScore,
            gen1: answers.right,
          }))
          break
        case 'gen2':
          setMaxScore((prevScore) => ({
            ...prevScore,
            gen2: answers.right,
          }))
          break
        case 'gen3':
          setMaxScore((prevScore) => ({
            ...prevScore,
            gen3: answers.right,
          }))
          break
      }
      setIsPlaying(false)
      resetTimer()
      setEndMsj('Correctas:' + answers.right + ' Incorrectas: ' + answers.wrong)
      stop()
    }
  }, [time])

  function startGame() {
    rollNumber()
    FindPokemon()
    startTimer()

    startAudio.play()
    setEndMsj('')
    setAnswers({
      right: 0,
      wrong: 0,
    })
    setIsPlaying(true)
  }

  function choiceHandler(e) {
    let value = e.target.value

    pokeAudio.play()
    setShowImage(true)

    setTimeout(() => {
      FindPokemon()
      setShowImage(false)
      rollNumber()
    }, 2000)
    if (value === currentPoke.name) {
      setAnswers((prevState) => ({ ...prevState, right: prevState.right + 1 }))
      correctBonus()
    } else {
      setAnswers((prevState) => ({ ...prevState, wrong: prevState.wrong + 1 }))
    }
  }
  function correctBonus() {
    setTime(time + 3)
    setScoreUp(true)

    setTimeout(() => {
      setScoreUp(false)
    }, 2000)
  }

  const shuffleArray = (array) => {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]
    }
    return shuffledArray
  }

  useEffect(() => {
    setShuffle(
      shuffleArray([
        currentPoke.name,
        pokeNames[rolls[1]],
        pokeNames[rolls[2]],
        pokeNames[rolls[3]],
      ])
    )
  }, [currentPoke])

  return (
    <>
      <PokeWrapper>
        {!isPlaying && (
          <StartMenu
            setGenSelected={setGenSelected}
            sound={sound}
            setOldSound={setOldSound}
            setSound={setSound}
            onClick={startGame}
            scoreUp={scoreUp}
            endMsj={endMsj}
            maxScore={maxScore}
            genSelected={genSelected}
            oldSound={oldSound}
          />
        )}
        {isPlaying && (
          <>
            <PlayingUi
              answersRight={answers.right}
              answersWrong={answers.wrong}
              scoreUp={scoreUp}
              setSound={setSound}
              sound={sound}
              time={time}
            />
          </>
        )}
        {isPlaying && !loading && (
          <>
            <ImageContainer>
              <PokeImage
                $show={showImage}
                src={currentPoke.sprites.front_default}
                alt=""
              />
              {showImage && <PokeName>Es {currentPoke.name}!</PokeName>}
            </ImageContainer>
            <OptionContainer>
              {shuffle &&
                !showImage &&
                shuffle.map((name, index) => (
                  <OptionButton
                    key={index}
                    value={name}
                    onClick={choiceHandler}
                  >
                    {name}
                  </OptionButton>
                ))}
            </OptionContainer>
          </>
        )}
      </PokeWrapper>
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

const PokeName = styled.p`
  width: 20ch;
  text-align: center;
  font-size: 30px;
  color: var(--pink-400);
  animation: glow 200ms ease forwards;
`

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;
  flex-direction: column;
`

const PokeImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  opacity: 0;
  animation: 600ms show forwards;
  object-fit: contain;
  filter: ${(props) => (props.$show ? ' brightness(1)' : ' brightness(0)')};

  @media (max-width: 700px) {
    width: 100%;
  }
`

const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  gap: 10px;
  opacity: 0;

  flex-wrap: wrap;
  animation: 600ms show forwards;
  @keyframes show {
    100% {
      scale: 1;
      opacity: 1;
    }
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const OptionButton = styled.button`
  width: 100%;
  background-color: #333;
  border: 0px;
  border-radius: 10px;
  font-size: 25px;
  color: #fff;
  transition: 200ms;
  padding: 10px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: #4ebdc7;
    scale: 1.05;
  }
`
