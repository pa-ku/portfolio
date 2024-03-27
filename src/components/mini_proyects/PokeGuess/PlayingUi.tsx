import React from 'react'
import styled from 'styled-components'
import VolumeIcons from '../../ui/VolumeIcons'

type Props = {
  answersRight: string
  answersWrong: string
  scoreUp: string
  setSound: Function
  sound: boolean
  time: string
}

export default function PlayingUi({
  answersRight,
  answersWrong,
  scoreUp,
  setSound,
  sound,
  time,
}: Props) {
  return (
    <>
      <AnswerContainer>
        <div>
          <Answer>✓: {answersRight} </Answer>
          <Answer>𐌢: {answersWrong}</Answer>
          <VolumeIcons sound={sound} setSound={setSound} />
        </div>
        <TimeContainer>
          <ScoreUp $scoreAnim={scoreUp}>+3</ScoreUp>
          <Timer $scoreAnim={scoreUp}>{time}s</Timer>
        </TimeContainer>
      </AnswerContainer>
    </>
  )
}

const TimeContainer = styled.div`
  position: relative;
`

const ScoreUp = styled.p<{ $scoreAnim: boolean }>`
  color: var(--pink-400);
  font-weight: 800;
  font-size: 25px;
  position: absolute;
  transform-origin: bottom right;
  left: -8px;
  top: -8px;
  scale: 0.5;
  opacity: 0;
  ${(props) => (props.$scoreAnim ? 'animation:1500ms scoreup forwards;' : '')}
  @keyframes scoreup {
    0% {
      top: -15px;
      scale: 0.5;
      opacity: 0;
    }
    30% {
      scale: 1;
      opacity: 1;
      top: -20px;
    }
    70% {
      scale: 1;
      opacity: 1;
      top: -20px;
    }
    100% {
      scale: 0.5;
      opacity: 0;
      top: -15px;
    }
  }
`

const AnswerContainer = styled.div`
  width: 100%;
  opacity: 1;
  position: absolute;
  display: flex;
  align-items: start;
  top: 0px;
  justify-content: space-between;
  @media (max-width: 700px) {
    width: 300px;
  }
`

const Answer = styled.p`
  font-size: 20px;
  text-transform: uppercase;
`

const Timer = styled.p<{ $scoreAnim: boolean }>`
  font-size: 30px;
  color: #111;
  width: 70px;
  display: flex;
  align-items: end;
  justify-content: end;
  ${(props) =>
    props.$scoreAnim ? 'animation:timerColor 1500ms forwards;' : ''}
  @keyframes timerColor {
    0% {
      color: #111;
    }
    30% {
      color: var(--pink-400);
    }
    60% {
      color: var(--pink-400);
    }

    100% {
      color: #111;
    }
  }
`
