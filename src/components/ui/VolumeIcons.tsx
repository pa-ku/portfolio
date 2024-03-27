import React from 'react'
import styled from 'styled-components'
import soundOn from '../../assets/icons/soundOn.svg'
import soundOff from '../../assets/icons/soundOff.svg'
import musicOn from '../../assets/icons/musicOn.svg'
import musicOff from '../../assets/icons/musicOff.svg'


const VolumeWrapper = styled.div`
display: flex;
align-items: start;
justify-content: start;

gap: 10px;
width: 100%;
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
&:hover .volume-icon{
    scale: 1.1;
}
`

const VolumeIcon = styled.img`
width: 25px;
height: 25px;

display: flex;
align-items: center;
justify-content: center;
transition: 200ms;
`

type Props ={
    music?:boolean;
    sound?:boolean;
    setMusic?:Function;
    setSound?:Function;
}

export default function VolumeIcons({ music, setMusic, sound, setSound}:Props) {
    return (<>
        <VolumeWrapper>
            {setMusic && <VolumeContainer>
                <VolumeLabel htmlFor="music">
                    <VolumeIcon className='volume-icon' src={music ? musicOn : musicOff} alt="" />
                    <VolumeCheckbox id='music' defaultChecked={music} onClick={() => setMusic(music ? false : true)} type="checkbox" />
                </VolumeLabel>
            </VolumeContainer>}

       {setSound && <VolumeContainer>
                <VolumeLabel htmlFor="sound">
                    <VolumeIcon className='volume-icon' src={sound ? soundOn : soundOff} alt="" />
                    <VolumeCheckbox id='sound' defaultChecked={sound} onClick={() => setSound(sound ? false : true)} type="checkbox" />
                </VolumeLabel>
            </VolumeContainer>}
        </VolumeWrapper>
    </>
    )
}
