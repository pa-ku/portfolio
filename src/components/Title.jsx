import React from "react";
import styled from "@emotion/styled";

const TitleStyle = styled.p`
  text-align: center;
  font-size: ${(props) => props.$fontSize};
  font-weight: 300;
  padding: 0px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${(props) => props.$color};
  pointer-events: none;
  font-weight: ${(props) => props.$weight};
`;
export default function Title({ weight, children, $fontsize, $maintitle, $color }) {
  return (
    <>
      <TitleStyle
        $weight={weight}
        $color={$color}
        $maintitle={$maintitle}
        $fontSize={$fontsize}
      >
        {children}
      </TitleStyle>
    </>
  );
}
