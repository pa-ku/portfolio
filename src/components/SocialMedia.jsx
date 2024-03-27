import { useState } from "react";
import { styled } from "styled-components";
import gitSvg from "../assets/icons/github.svg";
import linkedSvg from "../assets/icons/linkedin.svg";
import emailSvg from "../assets/icons/email.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;

  position: relative;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
background-color: var(--pink-50);
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;
  transition: 0.3s;
`;
const MsjToolkit = styled.p`
  background-color: #0daabf;
  padding: 2px 8px;
  color: white;
  width: max-content;
  font-weight: 800;
  position: absolute;
  right: 100px;
  z-index: -1;
  animation: 4s toolkitanimation forwards;
  pointer-events: none;

  @keyframes toolkitanimation {
    0% {
      translate: 100px 0px;
    }
    10% {
      translate: -50px 0px;
    }
    80% {
      translate: -50px 0px;
    }
    100% {
      translate: 100px 0px;
    }
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  transition: 300ms;

  accent-color: #444;
  &:hover {
    scale: 1.1;
    filter: drop-shadow(0 0mm 2mm #9cd9ff);
  }
`;

export default function SocialBar() {
  const copymsj = "p4blo.kuhn@gmail.com";
  const [toolkit, setToolkit] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(copymsj);
    setToolkit(true);
    setTimeout(() => {
      setToolkit(false);
    }, 4000);
  }
  return (
    <>
      <Wrapper>
        {toolkit === true && <MsjToolkit>Email Copiado!</MsjToolkit>}
        <LinkContainer>
          <Link onClick={handleCopy} title="Copiar Email">
            <Icon src={emailSvg} alt="" />
          </Link>
          <Link
            href="https://github.com/pa-ku?tab=repositories"
            target="_blank"
            title="Github"
          >
            <Icon src={gitSvg} alt="" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pablokuhn/"
            target="_blank"
            title="LinkedIn"
          >
            <Icon src={linkedSvg} alt="" />
          </Link>
        </LinkContainer>
      </Wrapper>
    </>
  );
}
