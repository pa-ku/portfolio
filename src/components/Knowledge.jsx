import { React, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 700px;
  height: 200px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 10px 1px #f7f7f7;
  transition: 500ms;
  position: relative;
background-color: #ffffff;
  &:hover {
    cursor: pointer;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
      border-radius: 15px;
      animation: 400ms showBackground forwards;
      background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 0) 0%,
        ${(props) => props.$color} 200%
      );
    }
  }

  @keyframes showBackground {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  padding: 50px;
  width: 400px;
  height: 100%;
  object-fit: contain;
`;

const Description = styled.p`
  animation: 400ms show forwards;
  text-align: center;
  font-size: 16px;
  color: #333;
  padding-inline: 1em;
  text-decoration: dotted;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Anchor = styled.a`
text-decoration: none;
`

export default function Knowledge({ description, ImgSrc, alt, $color, href }) {
  const [hover, setHover] = useState(false);

  return (
    <Anchor href={href} target="_Blank">
      <Container
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        $color={$color}
      >
        {hover ? (
          <Description>{description}</Description>
        ) : (
          <Image src={ImgSrc} alt={alt} />
        )}
      </Container>
    </Anchor>
  );
}
