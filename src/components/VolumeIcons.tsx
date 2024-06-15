import React from 'react'
import styled from 'styled-components'
import soundOn from '../assets/images/icons/soundOn.svg'
import soundOff from '../assets/images/icons/soundOff.svg'
import musicOn from '../assets/images/icons/musicOn.svg'
import musicOff from '../assets/images/icons/musicOff.svg'

const VolumeWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 10px;
`

const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const VolumeCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`
const VolumeLabel = styled.label`
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const VolumeIcon = styled.img`
  width: 25px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
`

type Props = {
  music?: boolean
  sound?: boolean
  setMusic?: Function
  setSound?: Function
}

export default function VolumeIcons({
  music,
  setMusic,
  sound,
  setSound,
}: Props) {
  return (
    <>
      <VolumeWrapper>
        {setMusic && (
          <VolumeContainer>
            <VolumeLabel htmlFor='music'>
              <VolumeIcon
                className='volume-icon'
                src={music ? musicOn : musicOff}
                alt=''
              />
              <VolumeCheckbox
                id='music'
                defaultChecked={music}
                onClick={() => setMusic(music ? false : true)}
                type='checkbox'
              />
            </VolumeLabel>
          </VolumeContainer>
        )}

        {setSound && (
          <VolumeContainer className='hover:brightness-110'>
            <VolumeLabel
              htmlFor='sound'
              className={
                sound
                  ? 'bg-[var(--blue-850)] duration-200 rounded-md p-1 accent-white'
                  : 'bg-gray-400 duration-200 rounded-md p-1 accent-white'
              }
            >
              <VolumeIcon
                className='volume-icon'
                src={sound ? soundOn : soundOff}
                alt=''
              />
              <VolumeCheckbox
                id='sound'
                defaultChecked={sound}
                onClick={() => setSound(sound ? false : true)}
                type='checkbox'
              />
            </VolumeLabel>
          </VolumeContainer>
        )}
      </VolumeWrapper>
    </>
  )
}
