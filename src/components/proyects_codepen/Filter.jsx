import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../ui/CheckBox";
import PokeBallLogo from '../../assets/img/logos/pokeball-logo.svg'
const InputFilter = styled.input`
  border-radius: 10px 10px 0px 0px;
  padding: 10px;
  padding-left: 40px;
  width: 250px;
  font-weight: 500;
  font-size: 18px;
  border: 4px solid #ff3f3f;
  
  &:focus {
    border-color: #ff3f3f;
    outline: 0px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background-color:#ff3f3f;
  width: 250px;
  height: 300px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius:0px 0px 10px 10px;
  padding: 20px;
 
  
  text-align: center;
  position: relative;
`;

const Item = styled.p`
color: #fff;
padding: 10px;
cursor: pointer;
font-weight: 800;
letter-spacing: 3px;
&:hover{
  color: #fff;
&:hover .poke-card{
translate: 85%;

border-radius: 10px 10px 10px 0px;
}
}
`

const PokeCard =styled.div`
background-color: #fd6565;
opacity: 1;
position: absolute;
opacity: 1;
top: -55px;
border-radius: 10px 10px 10px 10px;
left: 0px;
writing-mode: vertical-rl;
z-index: -1;
width: 250px;
height: 355px;
transition:500ms;
pointer-events: none;
text-align: center;
`
const PokeTitle = styled.h1`

`
const PokeLogo = styled.img`
position: absolute;
width: 60px;
translate: -20px -3px;
`


export default function Filter() {
  const arrProducts = [
    "🥕 zanahoria",
    "🥦 brócoli",
    "espinaca",
    "col rizada",
    "calabacín",
    "🥒 pepino",
    "🌶 pimiento",
    "🍅 tomate",
    "🧅 cebolla",
    "🧄 ajo",
    "🥔 papa",
    "🍆 berenjena",
    "apio",
    "🎃 calabaza",
    "judía verde",
    "remolacha",
    "repollo",
    "lechuga",
    "🍄 champiñón",
    "rábano",
  ];

  const [query, setQuery] = useState("");

  const filteredProducts = arrProducts.filter((product) => {
    return product.toLowerCase().includes(query.toLowerCase());
  });

  function FilterHandler(e) {
    setQuery(e.target.value);
  }

  return (
    <>
<div>

    <div>
<PokeLogo src={PokeBallLogo} alt="" />
      <InputFilter
        placeholder="Buscar..."
        onChange={FilterHandler}
        type="text"
        />
        </div>


      <FilterContainer>
        {query && filteredProducts.map((item) =>
          <>
            <Item key={item}>
              {item}
              <PokeCard className="poke-card">
            <PokeTitle>{item}</PokeTitle>
              </PokeCard>
              
              </Item>

          </>
        )
        
      }
      </FilterContainer>
      </div>
    </>
  );
}
