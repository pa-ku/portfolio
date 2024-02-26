import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import useLocalStorage from 'use-local-storage'
import { useCountDown } from '../../hooks/useCountDown'
import payingSound from '../../assets/sound/pokeguess-playing-music2.mp3'
import soundOn from '../../assets/icons/soundOn.svg'
import soundOff from '../../assets/icons/soundOff.svg'
import musicOn from '../../assets/icons/musicOn.svg'
import musicOff from '../../assets/icons/musicOff.svg'
import useSound from 'use-sound'
import startAudio from '../../assets/sound/clickSound.mp3'

const PokeWrapper = styled.div`
width: 400px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

& *{
    font-family: "Pixelify Sans", sans-serif;
}
@media(max-width:700px){
width: 100%;
}
`

const PokeName = styled.p`
text-align: center;
font-size: 40px;
color: #999999;
z-index: -1;
text-transform: uppercase;
`
const ImageContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
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
animation: 400ms show forwards;
filter:${props => props.$show ? ' brightness(1)' : ' brightness(0)'};

@media(max-width:700px){
width: 100%;
}
`

const OptionContainer = styled.div`

display: grid;
grid-template-columns: repeat(2,200px);
gap: 10px;

opacity: 0;
scale: 0;
flex-wrap: wrap;
animation: 400ms show forwards ;
@keyframes show {
    100%{
        scale: 1;
        opacity: 1;
    }
}
@media(max-width:700px){
    grid-template-columns: repeat(2,1fr);
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
&:hover{
color: #4ebdc7;
scale: 1.05;
}
`

const StartButton = styled.button`
border: 0px;
padding: 10px;
font-size: 27px;
border-radius: 10px;
background-color: #a7ecfa;
cursor: pointer;
&:hover{
    background-color: #7ee9ff;
}
`

export function VolumeHandler({ music, setMusic, sound, setSound }) {
    return (<>
        <VolumeWrapper>
            <VolumeContainer>
                <VolumeLabel htmlFor="music">
                    <VolumeIcon src={music ? musicOn : musicOff} alt="" />

                    <VolumeCheckbox id='music' defaultChecked={music} onClick={() => setMusic(music ? false : true)} type="checkbox" />
                </VolumeLabel>
            </VolumeContainer>

            <VolumeContainer>
                <VolumeLabel htmlFor="sound">
                    <VolumeIcon src={sound ? soundOn : soundOff} alt="" />
                    <VolumeCheckbox id='sound' defaultChecked={sound} onClick={() => setSound(sound ? false : true)} type="checkbox" />
                </VolumeLabel>
            </VolumeContainer>
        </VolumeWrapper>
    </>
    )
}

export default function PokeGuess() {
    const [pokeNames, setPokeNames] = useState([])
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
    const [sound, setSound] = useState(true)
    const [music, setMusic] = useState(false)
    const [playMusic, { stop }] = useSound(payingSound, { volume: music ? 0.2 : 0 })
    const [startSound] = useSound(startAudio, { volume: sound ? 0.3 : 0 })
    const [maxScore, setMaxScore] = useLocalStorage('maxScoreGuessPokemon', answers.right)
    const { time, startTimer, resetTimer } = useCountDown(50);

    const pokeAudio = new Audio(currentPoke && currentPoke.cries.legacy)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=400&offset=0`)
            .then((res) => {
                setPokeNames([...res.data.results.map(poke => poke.name)
                ]);
            });
    }, [])


    useEffect(() => {
        setLoading(true)
        let roll = Math.floor(Math.random() * pokeNames.length) + 1
        axios.get(`https://pokeapi.co/api/v2/pokemon/${roll}`)
            .then(res => {
                const data = res.data
                setCurrentPoke(data)
                setLoading(false)
            })

    }, [rolls])





    useEffect(() => {
        if (time === 0) {
            setIsPlaying(false)
            resetTimer()
            stop()
            setEndMsj('Correctas:' + answers.right + ' Incorrectas: ' + answers.wrong)
        }
    }, [time])


    function startGame() {
        rollNumber()
        startSound()
        setIsPlaying(true)
        startTimer()
        setEndMsj('')
        playMusic()
        setAnswers({
            right: 0,
            wrong: 0,
        })
    }

    function rollNumber() {
        const newRolls = [];
        for (let index = 0; index < 3; index++) {
            newRolls.push(Math.floor(Math.random() * pokeNames.length));
        }
        setRolls(newRolls);
        setShowImage(false)
        return newRolls[0];
    }


    function choiceHandler(e) {
        let value = e.target.value
        pokeAudio.volume = sound ? 0.3 : 0
        pokeAudio.play()
        setShowImage(true)

        setTimeout(() => {
            setShowImage(false)
            rollNumber()
        }, 2000);
        if (value === currentPoke.name) {
            setAnswers(prevState => ({ ...prevState, right: prevState.right + 1 }))
            if (answers.right > maxScore) {
                setMaxScore(answers.right)
            }
        }
        else {
            setAnswers(prevState => ({ ...prevState, wrong: prevState.wrong + 1 }))
        }
    }


    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    // ...
    useEffect(() => {
        setShuffle(shuffleArray([currentPoke.name, pokeNames[rolls[0]], pokeNames[rolls[1]], pokeNames[rolls[2]]]))
    }, [currentPoke])







    return (
        <>
            <PokeWrapper>
                {isPlaying === false && (
                    <>
                        <MenuWrapper>
                            <StartButton onClick={startGame}>START</StartButton>
                            <VolumeHandler sound={sound} setSound={setSound} music={music} setMusic={setMusic} />
                            <Answer>Mejor Puntaje: {maxScore}</Answer>
                            {<PokeName>{endMsj}</PokeName>}
                        </MenuWrapper>
                    </>
                )
                }


                {isPlaying && loading === false && (
                    <>
                        <AnswerContainer>
                            <div>

                                <Answer>Correctas: {answers.right} </Answer>
                                <Answer>Incorrectas: {answers.wrong}</Answer>
                                <VolumeHandler sound={sound} setSound={setSound} music={music} setMusic={setMusic} />
                            </div>
                            <Timer>{time}s</Timer>
                        </AnswerContainer>

                        <ImageContainer >
                            <PokeImage $show={showImage} src={currentPoke.sprites.front_default} alt="" />
                            {showImage === true && <PokeName>Es {currentPoke.name}!</PokeName>}
                        </ImageContainer>
                        <OptionContainer>

                            {shuffle && showImage === false && shuffle.map((name, index) => (
                                <OptionButton key={index} value={name} onClick={choiceHandler}>
                                    {name}
                                </OptionButton>
                            ))}
                        </OptionContainer>
                    </>)
                }
            </PokeWrapper >
        </>
    )
}


const MenuWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
width: 100%;
flex-direction:column;
`

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
`

const AnswerContainer = styled.div`
width: 100%;
opacity: 0;
animation: 400ms show forwards 400ms;
display: flex;
align-items: start;
justify-content: space-between;
`

const Answer = styled.p`
font-size: 20px;
text-transform: uppercase;
`

const Timer = styled.p`
font-size: 40px;
`