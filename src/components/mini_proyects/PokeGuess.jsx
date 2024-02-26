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
import VolumeIcons from '../ui/VolumeIcons'
import pokeLogo from '../../assets/icons/poke-logo.svg'



export default function PokeGuess() {
    const { pokeNames } = usePokeNames(300)
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
    const { time, setTime, startTimer, resetTimer } = useCountDown(49);

    /* SoundBank */
    const [sound, setSound] = useState(true)
    const [music, setMusic] = useState(false)
    const [playMusic, { stop }] = useSound(payingSound, { volume: music ? 0.2 : 0 })
    const [startSound] = useSound(startAudio, { volume: sound ? 0.3 : 0 })
    const pokeAudio = new Audio(currentPoke && currentPoke.cries.legacy)
    const [scoreUp, setScoreUp] = useState(false)

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


    function correntBonus() {
        setTime(time + 3)
        setScoreUp(true)
        setTimeout(() => {
            setScoreUp(false)
        }, 2000)
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
            correntBonus()
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

                            <StartButton onClick={startGame}><p>START</p><PokeLogo src={pokeLogo} alt="" /></StartButton>
                            <Score $scoreAnim={scoreUp} >Mejor Puntaje: {maxScore}</Score>
                            <PopUpText>{endMsj}</PopUpText>
                        </MenuWrapper>
                    </>
                )
                }

                {isPlaying && (<>

                    <AnswerContainer>
                        <div>

                            <Answer>✓: {answers.right} </Answer>
                            <Answer>𐌢: {answers.wrong}</Answer>
                            <VolumeIcons sound={sound} setSound={setSound} music={music} setMusic={setMusic} />
                        </div>
                        <TimeContainer>
                            <ScoreUp $scoreAnim={scoreUp}>+3</ScoreUp>
                            <Timer $scoreAnim={scoreUp}>{time}s</Timer>
                        </TimeContainer>
                    </AnswerContainer>
                </>)}

                {isPlaying && loading === false && (
                    <>


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

const StartButton = styled.button`
background-color: #fff;
border: 0px;
width: 80px;
height: 80px;
display: flex;
align-items: center;
cursor: pointer;
justify-content: center;
position: relative;
&:hover img{
rotate: 90deg;

}

& p{
    position: absolute;
    transition: 300ms ;
    left: 4px;
    font-size: 25px;
 color: #333;
}
&:hover p{
left: -80px;
border-radius: 10px;
padding: 4px 7px;
}
`

const PokeLogo = styled.img`
width: 70px;
margin: 0px;
height: 70px;
pointer-events: none;
object-fit: contain;
transition: 300ms;
animation: 1000ms rotate forwards;
animation: 3000ms scale infinite;
@keyframes scale {
    0%{
        scale: 1;
    }
    60%{
        scale:1.1;
    }
    100%{

    }
}
@keyframes rotate {
    100%{
        transform: rotate(360deg);
    }
}
`

const Score = styled.p`
  font-size: 25px;
  background: linear-gradient(to right, var(--pink-500),var(--pink-300) );
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

const TimeContainer = styled.div`
position: relative;

`

const ScoreUp = styled.p`
color: var(--pink-400);
font-weight: 800;
font-size: 30px;
position: absolute;
transform-origin: bottom right;
left: -30px;
top: -10px;
scale: 0.5;
opacity: 0;
${props => props.$scoreAnim ? 'animation:1500ms scoreup forwards;' : ''}


@keyframes scoreup {
    0%{
        top: -15px;
        scale: 0.5;
        opacity: 0;
    }
    50%{
        scale: 1;
        opacity: 1;
        top:-20px;
    }
    100%{
        scale: 0.5;
        opacity:0;
        top:-15px;
    }
}
`



const MenuWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
width: 300px;
flex-direction:column;
`


const AnswerContainer = styled.div`
width: 100%;
opacity: 1;
position: absolute;
display: flex;
align-items: start;
top: 0px;
justify-content: space-between;
@media(max-width:700px){
width: 300px;
}
`

const Answer = styled.p`
font-size: 20px;
text-transform: uppercase;
`

const Timer = styled.p`
font-size: 40px;
color:#111;
width: 70px;
${props => props.$scoreAnim ? 'animation:timerColor 1500ms forwards;' : ''}
@keyframes timerColor {
    0%{
color:#111;
    }
 30%{
    color: var(--pink-400);
 }   
 60%{
    color: var(--pink-400);
 }   

 100%{
    color:#111;
 }
}
`

const PokeWrapper = styled.div`
width: 400px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position: relative;
& *{
    font-family: "Pixelify Sans", sans-serif;
}
@media(max-width:800px){
    width: 300px;
}
`

const PokeName = styled.p`
width: 20ch;
text-align: center;
font-size: 30px;
color: var(--pink-400);
animation: glow 200ms  ease forwards;
`
const PopUpText = styled.p`
width: 20ch;
text-align: center;
font-size: 25px;
color: #333;
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