import React from 'react'
import styled from 'styled-components'
import VolumeIcons from '../../VolumeIcons'

type Props = {
  answersRight: string
  answersWrong: string
  scoreUp: boolean
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
        <div className="flex flex-col gap-2 items-start">
          <p className="flex stroke-gray-600 text-gray-600  text-xl justify-center items-center">
            <svg
              viewBox="0 0 24 24"
              stroke-width="1.5"
              width="30px"
              height="30px"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M3 12h6" />
              <path d="M15 12h6" />
            </svg>
            {answersRight}
          </p>
          <p className="flex stroke-gray-600 text-gray-600  text-xl justify-center items-center">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719" />
              <path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57 -3.441a3.012 3.012 0 0 0 -1.41 -1.39" />
              <path d="M3 12h6m7 0h5" />
              <path d="M3 3l18 18" />
            </svg>
            {answersWrong}
          </p>
        </div>
        <aside className="relative flex flex-col justify-end items-end">
          <Score scoreup={scoreUp}>+3</Score>
          <Timer scoreup={scoreUp}>{time}s</Timer>
          <VolumeIcons sound={sound} setSound={setSound} />
        </aside>
      </AnswerContainer>
    </>
  )
}

const Score = styled.p<{ scoreup: boolean }>`
  color: var(--primary-400);
  font-weight: 800;
  font-size: 25px;
  position: absolute;
  transform-origin: bottom right;
  left: -8px;
  top: -8px;
  scale: 0.5;
  opacity: 0;
  animation: ${(props) => (props.scoreup ? '1500ms score forwards' : '')};
  @keyframes score {
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

const Timer = styled.p<{ scoreup: boolean }>`
  font-size: 30px;
  color: #111;
  width: 70px;
  display: flex;
  align-items: end;
  justify-content: end;
  animation: ${(props) => (props.scoreup ? 'timerColor 1500ms forwards' : '')};
  @keyframes timerColor {
    0% {
      color: #111;
    }
    30% {
      color: var(--primary-400);
    }
    60% {
      color: var(--primary-400);
    }

    100% {
      color: #111;
    }
  }
`
