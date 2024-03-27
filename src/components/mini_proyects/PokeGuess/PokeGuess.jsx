import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import useLocalStorage from "use-local-storage";
import { useCountDown } from "../../../hooks/useCountDown";
import useSound from "use-sound";
import startAudio from "../../../assets/sound/clickSound.mp3";
import { usePokeNames } from "../../../hooks/usePokeNames";
import StartMenu from "./StartMenu";
import PlayingUi from "./PlayingUi";

export default function PokeGuess() {
  const [pokeGeneration, setPokeGeneration] = useState(151);
  const [maxScore, setMaxScore] = useLocalStorage("gen1Score", {
    gen1: 0,
    gen2: 0,
    gen3: 0,
  });
  const [genSelected, setGenSelected] = useLocalStorage("genSelected", {
    gen1: true,
    gen2: false,
    gen3: false,
    selected: "gen1",
    value: maxScore.gen1,
  });
  const { pokeNames } = usePokeNames(pokeGeneration);
  const [currentPoke, setCurrentPoke] = useState("");
  const [rolls, setRolls] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({
    right: 0,
    wrong: 0,
  });
  const [shuffle, setShuffle] = useState();
  const [endMsj, setEndMsj] = useState("");
  const { time, setTime, startTimer, resetTimer } = useCountDown(60);
  const [scoreUp, setScoreUp] = useState(false);
  /* SoundBank */
  const [sound, setSound] = useState(true);
  const [startSound] = useSound(startAudio, { volume: sound ? 0.3 : 0 });
  const pokeAudio = new Audio(currentPoke && currentPoke.cries.legacy);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${rolls[0]}`).then((res) => {
      const data = res.data;
      setCurrentPoke(data);
      setLoading(false);
    });
  }, [rolls]);

  useEffect(() => {
    if (time === 0) {
      switch (genSelected.selected) {
        case "gen1":
          setMaxScore((prevScore) => ({
            ...prevScore,
            gen1: answers.right,
          }));
          break;
        case "gen2":
          setMaxScore((prevScore) => ({
            ...prevScore,
            gen2: answers.right,
          }));
          break;
        case "gen3":
          setMaxScore((prevScore) => ({
            ...prevScore,
            gen3: answers.right,
          }));
          break;
      }
      setIsPlaying(false);
      resetTimer();
      stop();
      setEndMsj(
        "Correctas:" + answers.right + " Incorrectas: " + answers.wrong
      );
    }
  }, [time]);

  function startGame() {
    rollNumber();
    startSound();
    setIsPlaying(true);
    startTimer();
    setEndMsj("");
    setAnswers({
      right: 0,
      wrong: 0,
    });
  }

  function rollNumber() {
    const newRolls = [];
    while (newRolls.length < 6) {
        const randomNumber = Math.floor(Math.random() * pokeNames.length);
        if (!newRolls.includes(randomNumber)) {
            newRolls.push(randomNumber);
            console.log(randomNumber + 'no esta en el array');
        }
    }
    setRolls(newRolls);
    setShowImage(false);
    console.log(newRolls);
    return newRolls[0];
  }

  function choiceHandler(e) {
    let value = e.target.value;
    pokeAudio.volume = sound ? 0.3 : 0;
    isPlaying && pokeAudio.play();
    setShowImage(true);
    setTimeout(() => {
      setShowImage(false);
      rollNumber();
    }, 2000);
    if (value === currentPoke.name) {
      setAnswers((prevState) => ({ ...prevState, right: prevState.right + 1 }));
      correctBonus();
    } else {
      setAnswers((prevState) => ({ ...prevState, wrong: prevState.wrong + 1 }));
    }
  }
  function correctBonus() {
    setTime(time + 3);
    setScoreUp(true);
    setTimeout(() => {
      setScoreUp(false);
    }, 2000);
  }
  
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    setShuffle(
      shuffleArray([
        currentPoke.name,
        pokeNames[rolls[1]],
        pokeNames[rolls[2]],
        pokeNames[rolls[3]],
        pokeNames[rolls[4]],
        pokeNames[rolls[5]],
      ])
    );
  }, [currentPoke]);

  return (
    <>
      <PokeWrapper>
        {isPlaying === false && (
          <StartMenu
            setGenSelected={setGenSelected}
            setPokeGeneration={setPokeGeneration}
            sound={sound}
            setSound={setSound}
            startGame={startGame}
            scoreUp={scoreUp}
            endMsj={endMsj}
            maxScore={maxScore}
            genSelected={genSelected} // Pasa genSelected como una prop separada
          />
        )}
        {isPlaying && (
          <>
            <PlayingUi
              answersRight={answers.right}
              answersWrong={answers.wrong}
              scoreUp={scoreUp}
              setSound={setSound}
              sound={sound}
              time={time}
            />
          </>
        )}
        {isPlaying && loading === false && (
          <>
            <ImageContainer>
              <PokeImage
                $show={showImage}
                src={currentPoke.sprites.front_default}
                alt=""
              />
              {showImage === true && (
                <PokeName>Es {currentPoke.name}!</PokeName>
              )}
            </ImageContainer>
            <OptionContainer>
              {shuffle &&
                showImage === false &&
                shuffle.map((name, index) => (
                  <OptionButton
                    key={index}
                    value={name}
                    onClick={choiceHandler}
                  >
                    {name}
                  </OptionButton>
                ))}
            </OptionContainer>
          </>
        )}
      </PokeWrapper>
    </>
  );
}

const PokeWrapper = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  & * {
    font-family: "Pixelify Sans", sans-serif;
  }
  @media (max-width: 800px) {
    width: 300px;
  }
`;

const PokeName = styled.p`
  width: 20ch;
  text-align: center;
  font-size: 30px;
  color: var(--pink-400);
  animation: glow 200ms ease forwards;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;
  flex-direction: column;
`;

const PokeImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  opacity: 0;
  animation: 600ms show forwards;
  object-fit: contain;
  filter: ${(props) => (props.$show ? " brightness(1)" : " brightness(0)")};

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  gap: 10px;
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
`;

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
  &:hover {
    color: #4ebdc7;
    scale: 1.05;
  }
`;
