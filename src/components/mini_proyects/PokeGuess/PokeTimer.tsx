import { useEffect } from 'react'
import React from 'react'

interface Props {
  answers: Number
  genSelected: Object
  time: Number
  setMaxScore: Function
  maxScore: Object
  setEndMsj: Function
  resetTimer: Function
  setIsPlaying: Function
}

export default function PokeTimer({
  answers,
  genSelected,
  time,
  setMaxScore,
  maxScore,
  setEndMsj,
  resetTimer,
  setIsPlaying,
}) {
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
      stop()
      setEndMsj('Correctas:' + answers.right + ' Incorrectas: ' + answers.wrong)
    }
  }, [time])
  return <div>PokeTimer</div>
}
