import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import useLocalStorage from 'use-local-storage'
import { useCountDown } from '../../hooks/useCountDown'
import payingSound from '../../assets/sound/pokeguess-playing-music2.mp3'
import useSound from 'use-sound'
import startAudio from '../../assets/sound/clickSound.mp3'
import { usePokeNames } from '../../hooks/usePokeNames'
import MainButton from '../ui/MainButton'
import pokeLogo from '../../assets/icons/pokeLogo.webp'
import VolumeIcons from '../ui/VolumeIcons'



export default function PokeGuess() {
    const { pokeNames } = usePokeNames(251)
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
    const [maxScore, setMaxScore] = useLocalStorage('maxScoreGuessPokemon', answers.right)
    const { time, startTimer, resetTimer } = useCountDown(49);

    /* SoundBank */
    const [sound, setSound] = useState(true)
    const [music, setMusic] = useState(false)
    const [playMusic, { stop }] = useSound(payingSound, { volume: music ? 0.2 : 0 })
    const [startSound] = useSound(startAudio, { volume: sound ? 0.3 : 0 })
    const pokeAudio = new Audio(currentPoke && currentPoke.cries.legacy)


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
            if (answers.right >= maxScore) {
                setMaxScore(answers.right)
            }
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
        for (let index = 0; index < 5; index++) {
            newRolls.push(Math.floor(Math.random() * pokeNames.length));
        }
        setRolls(newRolls);
        setShowImage(false)
        return newRolls[0];
    }


    function choiceHandler(e) {
        let value = e.target.value
        pokeAudio.volume = sound ? 0.3 : 0
        isPlaying && pokeAudio.play()
        setShowImage(true)

        setTimeout(() => {
            setShowImage(false)
            rollNumber()
        }, 2000);
        if (value === currentPoke.name) {
            setAnswers(prevState => ({ ...prevState, right: prevState.right + 1 }))

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
        setShuffle(shuffleArray([currentPoke.name, pokeNames[rolls[0]], pokeNames[rolls[1]], pokeNames[rolls[2]], pokeNames[rolls[3]], pokeNames[rolls[0]]]))
    }, [currentPoke])







    return (
        <>
            <PokeWrapper>
                {isPlaying === false && (
                    <>
                        <MenuWrapper>

                            <VolumeIcons sound={sound} setSound={setSound} music={music} setMusic={setMusic} />
                            <MainButton $background={'var(--blue-100), var(--blue-800)'} $fontsize={'2rem'} icon={<PokeLogo src={pokeLogo} alt="" />} onClick={startGame} >START</MainButton>
                            <Score>Mejor Puntaje: {maxScore}</Score>
                            <PopUpText>{endMsj}</PopUpText>
                        </MenuWrapper>
                    </>
                )
                }

                {isPlaying && (<>

                    <AnswerContainer>
                        <div>

                            <Answer>Correctas: {answers.right} </Answer>
                            <Answer>Incorrectas: {answers.wrong}</Answer>
                            <VolumeIcons sound={sound} setSound={setSound} music={music} setMusic={setMusic} />
                        </div>
                        <Timer>{time}s</Timer>
                    </AnswerContainer>
                </>)}

                {isPlaying && loading === false && (
                    <>


                        <ImageContainer >
                            <PokeImage $show={showImage} src={currentPoke.sprites.front_default} alt="" />
                            {showImage === true && <PopUpText>Es {currentPoke.name}!</PopUpText>}
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


const Score = styled.p`
  font-size: 30px;
  background: linear-gradient(to right, #ff8400, #fda94e);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: glow 2s  ease forwards;
@keyframes glow {
    0%{
        opacity: 0;
        filter: invert(0.5);
    }

    20%{
        opacity: 1;
        filter: invert(0.5);
    }
    100%{
       
        filter: invert(0);
    }

    }
`

const PokeLogo = styled.img`
width: 35px;
margin: 0px;
height: 35px;
pointer-events: none;
object-fit: contain;
animation: 2s rotate forwards;
@keyframes rotate {
    100%{
        transform: rotate(180deg);
    }
}
`

const MenuWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
width: 100%;
flex-direction:column;
`


const AnswerContainer = styled.div`
width: 100%;
opacity: 1;

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

const PokeWrapper = styled.div`
width: 450px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

& *{
    font-family: "Pixelify Sans", sans-serif;
}
@media(max-width:700px){
width:100%;
}
`

const PopUpText = styled.p`
width: 20ch;
text-align: center;
font-size: 30px;
color: var(--pink-400);
animation: glow 200ms  ease forwards;

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
animation: 400ms show forwards;
object-fit: contain;
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
scale: 0.5;
flex-wrap: wrap;
animation: 400ms show forwards ;
@keyframes show {
    100%{
        scale: 1;
        opacity: 1;
    }
}
@media(max-width:700px){
    grid-template-columns: repeat(2,200px);
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