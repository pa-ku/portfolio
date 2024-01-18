import React, { useState } from "react";
import styled from "styled-components";

/* Sound */
import useSound from "use-sound";
import pigSound from "../assets/sound/pigSound.mp3";
import coinSound from "../assets/sound/coinSound.mp3";
import crownSound from "../assets/sound/crownSound.mp3";

/* Icon */
import pigIcon from "../assets/img/pig/pig.webp";
import coinIcon from "../assets/img/pig/coin.webp";
/* Accesories */
import gorra from "../assets/img/pig/gorra.webp";
import glasses from "../assets/img/pig/glasses.webp";
import colege from "../assets/img/pig/colege.webp";
import apple from "../assets/img/pig/apple.webp";
import gentle from "../assets/img/pig/hat.webp";
import threeD from "../assets/img/pig/3d.webp";

const Wrapper = styled.div`
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  user-select: none;

  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  animation: 5s pig infinite ease-in-out;
  @keyframes pig {
    0% {
      translate: 0px 0px;
    }
    50% {
      translate: -10px -10px;
    }
    100% {
      translate: 0px 0px;
    }
  }
`;

const PigIcon = styled.img`
  width: 100px;
height: 100px;
  top: 0px;
  right: 0px;
  opacity: 1;
  z-index: 10;
  cursor: pointer;

  filter: grayscale(${(props) => props.$grayScale});
  animation: 2s startPig forwards 300ms;
`;

const Coin = styled.img`
  width: 30px;
  z-index: -1;
  position: absolute;
  top: 20px;
  right: 40px;
  opacity: 0;
  animation: ${(props) => props.$animation};
  display: none;
  display: ${(props) => props.$animation};
  animation: 2s coin;
  @keyframes coin {
    0% {
      translate: 0px 0px;
    }
    10% {
      translate: 0px -50px;
      opacity: 1;
    }
    90% {
      translate: 0px -50px;
      opacity: 1;
    }
    100% {
      translate: 0px 0px;
      opacity: 0;
    }
  }
`;

const Crown = styled.img`
  width: 100px;
  z-index: 20;
  position: absolute;
  top: 0px;
  opacity: 0;
  right: 0px;
  pointer-events: none;
  translate: 0px -30px;
  animation: ${(props) => props.$animation};
  @keyframes crown {
    0% {
      translate: 0px -30px;
    }
    100% {
      translate: 0px 0px;
      opacity: 1;
    }
  }
`;

export default function FlyingPig() {
  const [pigColor, setPigColor] = useState(1);
  const [playbackRate, setPlaybackRate] = React.useState(0.75);
  const [coinAnimation, setCoinAnimation] = useState("");
  const [crownAnimation, setCrownAnimation] = useState("");
  const [pigCounter, setPigCounter] = useState(0);
  /* SOUND BANK */
  const [playPig] = useSound(pigSound, { playbackRate, volume: 0.5 });
  const [playCoin] = useSound(coinSound, { playbackRate, volume: 0.1 });
  const [playCrown] = useSound(crownSound, { volume: 0.1 });
  const [hat, setHat] = useState();
  const [rollDice, setRolldice] = useState(Math.floor(Math.random() * 6));

  function handlePig() {
    if (pigCounter < 21) {
      playPig();
      setPigColor((prevState) => pigColor - 0.1);
      setPlaybackRate(playbackRate + 0.1);
      setPigCounter((prevState) => pigCounter + 1);
    }

    switch (pigCounter) {
      case 4:
        playCoin();
        setCoinAnimation("block");
        break;
      case 9:
        setCoinAnimation("none");
        break;
      case 10:
        playCoin();
        setCoinAnimation("block");
        break;
      case 14:
        setCoinAnimation("none");
        break;
      case 15:
        playCoin();
        setCoinAnimation("block");
        break;
      case 20:
        setCoinAnimation("none");
        playCrown();
        setCrownAnimation("4s crown forwards");
        break;
    }

    switch (rollDice) {
      case 0:
        setHat(gorra);
        break;
      case 1:
        setHat(glasses);
        break;
      case 2:
        setHat(colege);
        break;
      case 3:
        setHat(apple);
        break;
      case 4:
        setHat(gentle);
        break;
      case 5:
        setHat(threeD);
        break;
    }
  }

  return (
    <>
      <Wrapper>
        <Coin $animation={coinAnimation} src={coinIcon}></Coin>

        <Crown $animation={crownAnimation} src={hat}></Crown>

        <PigIcon
          $grayScale={pigColor}
          onClick={handlePig}
          src={pigIcon}
          alt="Chancho volador"
        ></PigIcon>
      </Wrapper>
    </>
  );
}
