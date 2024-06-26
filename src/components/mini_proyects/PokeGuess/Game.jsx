import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Subtitle from '../../Subtitle'

export default function PokeGuess({
  genSelected,
  setMaxScore,
  legacySound,
  setScoreUp,
  setIsPlaying,
  answers,
  setAnswers,
  time,
  setTime,
  resetTimer,
  sound,
  setEndMsj,
  rolls,
  rollNumber,
  currentPoke,
  loading,
  poke_names,
  FindPokemon,
}) {
  const [showImage, setShowImage] = useState(false)
  const [shuffle, setShuffle] = useState()
  const [actualSound, setActualSound] = useState()
  const pokeAudio = new Audio(actualSound)

  useEffect(() => {
    pokeAudio.volume = sound ? 0.3 : 0
  }, [[], sound])

  useEffect(() => {
    if (currentPoke)
      setActualSound(
        legacySound ? currentPoke.cries.legacy : currentPoke.cries.latest
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
    if (currentPoke.name) {
      setShuffle(
        shuffleArray([
          currentPoke.name,
          poke_names[rolls[1]],
          poke_names[rolls[2]],
          poke_names[rolls[3]],
        ])
      )
    }
  }, [currentPoke, rolls])

  return (
    <>
      {!loading && (
        <>
          <ImageContainer>
            <PokeImage
              $show={showImage}
              src={currentPoke.sprites.front_default}
              alt=""
            />
            {showImage && (
              <Subtitle fontSize='2em'>
                Es {currentPoke.name}!
              </Subtitle>
            )}
          </ImageContainer>

          <OptionContainer>
            {shuffle &&
              !showImage &&
              shuffle.map((name, index) => (
                <button
                  className="text-white px-3 py-2 text-xl rounded-md  hover:duration-200 bg-slate-600
                   duration-500 hover:bg-[var(--blue-900)] uppercase"
                  key={index}
                  value={name}
                  onClick={choiceHandler}
                >
                  {name}
                </button>
              ))}
          </OptionContainer>
        </>
      )}
    </>
  )
}


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
  gap: 5px;
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
