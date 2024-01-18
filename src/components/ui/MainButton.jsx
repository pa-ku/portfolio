import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 15px;
  border: 0px;
  border-right: 2px;
  border-bottom: 2px;
  border-style: solid;
  border-color: #485c66;
  cursor: pointer;
  transition: 300ms;
  color: #485c66;
  background-color: #80d8ff;
  text-decoration: none;
  z-index: 200;
  font-size: 1rem;
  font-weight: 800;
  position: relative;
  gap: 5px;
  &:hover {
filter: brightness(1.1);
  }
`;

const MsjToolkit = styled.p`
  background-color: #777;
  padding: 8px 18px;
  border-radius: 15px 15px 0px 15px;
  color: white;
  font-weight: 800;
  width: max-content;
  scale: 2;
  font-size: 2rem;
  position: absolute;
  transform-origin: bottom right 60px;
  bottom: 50px;
  right: 150px;
  letter-spacing: 2px;
  opacity: 0;

  animation: 4s toolkitanimation;
  pointer-events: none;
  @keyframes toolkitanimation {
    0% {
      opacity: 0;
      scale: 0;
    }
    15% {
      opacity: 1;
      scale: 0.5;
    }
    80% {
      opacity: 1;
      scale: 0.5;
    }
    100% {
      opacity: 0;
      scale: 0;
    }
  }
`;

export default function MainButton({
  text,
  href,
  $delay,
  icon,
  onClick,
  $toolkit,
}) {
  const [toolkit, setToolkit] = useState(false);

  function handleCopy() {
    setToolkit(true);
    setTimeout(() => {
      setToolkit(false);
    }, 4000);
  }

  return (
    <>
      <Button
        onClick={$toolkit ? handleCopy : onClick}
        $delay={$delay}
        href={href}
        target="_blank"
      >
        {" "}
        {icon}
        {text}
        {toolkit === true && <MsjToolkit>En proceso!</MsjToolkit>}
      </Button>
    </>
  );
}
