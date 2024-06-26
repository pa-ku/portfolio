import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useCountDown } from '../../hooks/useCountDown'
import useLocalStorage from 'use-local-storage'
import axios from 'axios'
import startAudio from '../../assets/sound/clickSound.mp3'

const GameWrapper = styled.div`
  background-color: #001f3e;
  border-radius: 10px;
  width: 400px;
  position: relative;
  padding-bottom: 10px;
  background: linear-gradient(to top, #001f3e, #006a91);
  @media (max-width: 800px) {
    width: 100%;
  }
`

const InputWord = styled.input`
  border: 5px solid #80d8ff;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  font-size: 25px;
  background-color: #94dfff;
  text-align: center;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
`

const Word = styled.p`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 20px;
  justify-content: center;
  text-transform: uppercase;
  color: #fff;
  font-size: 40px;
`

const Score = styled.p`
  color: #c8ff9e;
`

const Timer = styled.p`
  text-align: center;
  font-size: 25px;
  padding: 10px;
  color: var(--blue-100);
`
const Msj = styled.p`
  color: #fff;
  text-align: center;
  position: absolute;
  font-size: 25px;
  top: -80px;
  padding-inline: 20px;
  animation: 1s start infinite;
  @keyframes start {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.03;
    }
    100% {
      scale: 1;
    }
  }
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  width: 100%;

  padding: 10px;
  position: relative;
`

export default function Typing() {
  const startSound = new Audio(startAudio)

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const dataPokemon = async () => {
      const pokeApi = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=150`
      )
      setPokemon(pokeApi.data.results)
    }
    dataPokemon()
  }, [])

  const [currentWord, setCurrentWord] = useState('')
  const [score, setScore] = useState(0)
  const [inputWord, setInputWord] = useState('')
  const [playing, setPlaying] = useState(false)
  const { time, startTimer, resetTimer } = useCountDown(30)
  const [maxScore, setMaxScore] = useLocalStorage('maxSore', 0)

  function newWord() {
    const rollWord = pokemon[Math.floor(Math.random() * pokemon.length)].name
    setCurrentWord(rollWord)
  }
  function startGame() {
    startSound.volume = 0.5
    startSound.play()
    resetTimer()
    setScore(0)
    setInputWord('')
    newWord()
    setPlaying(true)
    startTimer()
  }

  function gameOver() {
    setPlaying(false)
    setCurrentWord('')
    setInputWord('')
    if (score > maxScore) {
      setMaxScore(score)
    }
  }

  function inputHandler(e) {
    const value = e.target.value
    setInputWord(value)
  }

  useEffect(() => {
    if (time === 0) {
      gameOver()
    }
  }, [time])

  useEffect(() => {
    const input = inputWord.toLowerCase()
    const current = currentWord.toLowerCase()
    if (input === current && input != 'start' && input != '') {
      setScore(score + 1)
      setInputWord('')
      newWord()
    } else if (input === 'start') {
      startGame()
    }
  }, [inputWord])

  return (
    <>
      <GameWrapper>
        <InputWord
          placeholder="Escribir..."
          value={inputWord}
          onChange={inputHandler}
          type="text"
        />
        <Timer>{time}s</Timer>
        <Word>{currentWord}</Word>
        <InfoContainer>
          {playing == false && <Msj>Escribe START para comenzar</Msj>}
          <Score>Puntaje: {score}</Score>
          <Score>Mejor Puntaje: {maxScore}</Score>
        </InfoContainer>
      </GameWrapper>
    </>
  )
}
