import { useState } from "react";

import styled from "styled-components";

const ElementContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  pointer-events: none;

  opacity: 0;
  animation: 300ms show forwards 500ms;
  @keyframes show {
    to {
      opacity: 1;
    }
  }
`;

const LogoImg = styled.img`
  padding-inline: 1em;
  pointer-events: none;
  width: 100%;
  height: 100%;
  object-fit: contain;
  scale: 0.6;
  @media (max-width: 700px) {
    scale: 0.9;
  }
`;
export default function GridElement({
  imgSrc,
  alt,
  onClick,
  disabled,
  $spanColum,
  $spanRow,
  value,
  buttonStatus,
  bio,
  displayInfo,
  bgimg,
}) {
  const [showIcons, setShowIcons] = useState(true);
  function onHover() {
    setShowIcons(false);
  }
  function onLeave() {
    setShowIcons(true);
  }

  return (
    <>
      <ElementWrapper
        disabled={disabled}
        onClick={onClick}
        $spanColum={$spanColum}
        $spanRow={$spanRow}
        value={value}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {buttonStatus === "close" && (
          <>
            <ElementContainer>
              <LogoImg src={imgSrc} alt={alt} />
              <ImgBackground $showIcons={showIcons} src={bgimg} alt="" />
            </ElementContainer>
          </>
        )}

        {buttonStatus === "open" && displayInfo == value && (
          <ElementContent>{bio}</ElementContent>
        )}
      </ElementWrapper>
    </>
  );
}

const ImgBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0px;
  left: 0px;
  object-position: top;
  transition: 200ms;
  opacity: ${(props) => (props.$showIcons ? "0" : "1")};
`;

const ElementContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;

  opacity: 0;
  flex-direction: column;
  padding: 10px;
  pointer-events: none;
  animation: 300ms show forwards 500ms;
  @keyframes show {
    to {
      opacity: 1;
    }
  }
`;

const ElementWrapper = styled.button`
  cursor: pointer;
  z-index: 10;
  position: relative;
  flex-direction: column;
  border: none;
  padding: 0px;
  background-color: #fff;
  transition: 150ms;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  outline: 2px solid var(--main-pink-200);
  grid-column: ${(props) => props.$spanColum};
  grid-row: ${(props) => props.$spanRow};
  &:hover {
    outline: 2px solid var(--main-pink-250);
    z-index: 100;
  }

  @keyframes hoverIn1 {
    100% {
      grid-template-columns: 1fr 0fr 0fr 0fr;
      grid-template-rows: 1fr 0fr 0fr;
    }
  }
  @keyframes hoverIn2 {
    100% {
      grid-template-columns: 0fr 0fr 0fr 01fr;
      grid-template-rows: 1fr 0fr 0fr;
    }
  }
  @keyframes hoverIn3 {
    100% {
      grid-template-columns: 0fr 0fr 1fr 0fr;
      grid-template-rows: 0fr 1fr 0fr;
    }
  }
  @keyframes hoverIn4 {
    100% {
      grid-template-columns: 0fr 0fr 0fr 1fr;
      grid-template-rows: 0fr 1fr 0fr;
    }
  }
  @keyframes hoverIn5 {
    100% {
      grid-template-columns: 0fr 1fr 0fr 0fr;
      grid-template-rows: 0fr 0fr 1fr;
    }
  }
  @keyframes hoverIn6 {
    100% {
      grid-template-columns: 0fr 0fr 1fr 0fr;
      grid-template-rows: 0fr 0fr 1fr;
    }
  }
  @keyframes hoverOut1 {
    0% {
      grid-template-columns: 1fr 0fr 0fr 0fr;
      grid-template-rows: 1fr 0fr 0fr;
    }

    100% {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
  @keyframes hoverOut2 {
    0% {
      grid-template-columns: 0fr 0fr 0fr 01fr;
      grid-template-rows: 1fr 0fr 0fr;
    }

    100% {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
  @keyframes hoverOut3 {
    from {
      grid-template-columns: 0fr 0fr 1fr 0fr;
      grid-template-rows: 0fr 1fr 0fr;
    }

    to {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
  @keyframes hoverOut4 {
    from {
      grid-template-columns: 0fr 0fr 0fr 1fr;
      grid-template-rows: 0fr 1fr 0fr;
    }

    to {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
  @keyframes hoverOut5 {
    from {
      grid-template-columns: 0fr 1fr 0fr 0fr;
      grid-template-rows: 0fr 0fr 1fr;
    }

    to {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
  @keyframes hoverOut6 {
    0% {
      grid-template-columns: 0fr 0fr 1fr 0fr;
      grid-template-rows: 0fr 0fr 1fr;
    }

    to {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
`;
