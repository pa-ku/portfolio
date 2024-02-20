import React from "react";
import styled from "styled-components";

const LoaderStyle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid rgb(221, 255, 188);
  border-top-color: #333;
  border-bottom-color: #333;
  animation: rotate 4s linear infinite;
  @keyframes rotate {
    0% {
      border:  5px solid var(--main-pink-200);
      border-top-color: #333;
      border-left-color: #333;
    }

    50% {
      border: 5px solid var(--main-pink-400);
      border-top-color: #333;
      border-left-color: #333;
    }

    to {
      rotate: 360deg;
      border:  5px solid var(--main-pink-200);
      border-top-color: #333;
      border-left-color: #333;
    }
  }
`;

export default function Loader() {
  return (
    <>
 
      <LoaderStyle></LoaderStyle>
    </>
  );
}
