import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PokeBallLogo from '../../assets/img/logos/pokeball-logo.svg'
import { usePokeNames } from "../../hooks/usePokeNames";
import axios from "axios";

const PokeWrapper = styled.div`
width: 100%;
padding-inline: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
& *{
  font-family: "Pixelify Sans", sans-serif;
}
@media(max-width:700px){
display: block;
}
`
const InputFilter = styled.input`
  border-radius: 10px 10px 0px 0px;
  padding: 10px;
  padding-left: 40px;
  width: 250px;
  font-weight: 500;
  font-size: 18px;
  border: 8px solid #111;
  background-color: #333;
  color: #d9d9d9;
  font-family: "Pixelify Sans", sans-serif;
  box-shadow: -7px 5px 0px 1px #111;
  &:focus {
    background-color: #444;
    outline: 0px;
  }
  @media(max-width:700px){
width: 100%;
}
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background-color:#ff6363;
  width: 250px;
  height: 243px;
  font-weight: 500;
  text-transform: uppercase;
  
  border-radius:0px 0px 10px 10px;
  padding: 20px;
box-shadow: -7px 7px 0px 1px #641010;

text-align: center;
position: relative;
@media(max-width:700px){
width: 100%;
height: 240px;
padding: 10px;
border-radius:0px 0px 2px 2px;
box-shadow: -7px -1px 0px 1px #641010;
}
`;

const Item = styled.div`
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
@media(max-width:700px){
  translate: 0px 120%;
}
}
}
`
const PokeName = styled.p`
font-size: 20px;
opacity: 0;
animation: 500ms opacity forwards;
`

const PokeCard = styled.div`
background-color: #ff7171;
opacity: 1;
position: absolute;
opacity: 1;
top: -57px;
border-radius: 10px ;
left: 0px;
z-index: -1;
width: 250px;
height: 300px;
transition:400ms ease-out;
pointer-events: none;
text-align: center;
box-shadow: -7px 7px 0px 1px #641010;
@media(max-width:700px){
width: 100%;
height: 200px;
box-shadow: -7px 7px 0px 1px #641010;

}

`
const PokeCardTitle = styled.h2`
font-size: 20px;
color: #ffd6d6;
z-index: 5;
font-family: "Pixelify Sans", sans-serif;
height: 100%;
padding-top: 40px;
padding-left: 45px;
display: flex;
align-items: center;
justify-content: center;
@media(max-width:700px){
width: 100%;
}
`
const PokeLogo = styled.img`
position: absolute;
width: 60px;
translate: -20px -3px;
border-radius: 50%;


`
const PokeImg = styled.img`
width: 150px;
height: 150px;
padding: 15px;
position: absolute;
top: 10px;
right: -40px;

left: 0px;
background-color: #fff8f8;
border-radius: 20px;
z-index: -1;
margin: auto;
@media(max-width:700px){
  top: 65px;
  width: 130px;
height: 130px;
margin: 0px;
margin-left: 10px;
}
`


export default function Filter() {
  const { pokeNames } = usePokeNames(235)
  const [query, setQuery] = useState("");
  const [filterPoke, setFilteredPoke] = useState([])
  const [currentPoke, setCurrentPoke] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if (currentPoke)
      axios.get(`https://pokeapi.co/api/v2/pokemon/${currentPoke.name}`)
        .then(res => {
          const data = res.data
          setCurrentPoke(data)
          setLoading(false)
        })
  }, [currentPoke])

  useEffect(() => {

    setFilteredPoke(pokeNames.filter((pokemon) => {
      return pokemon.toLowerCase().includes(query.toLowerCase());
    }))
  }, [query])





  return (
    <>
      <PokeWrapper>

        <div>
          <PokeLogo src={PokeBallLogo} alt="" />
          <InputFilter
            placeholder="Buscar..."
            onChange={e => setQuery(e.target.value)}
            type="text"
          />
        </div>


        <FilterContainer>
          {query && filterPoke.slice(0, 5).map((poke) =>
            <>
              <Item onClick={() => setCurrentPoke(poke)} key={poke}>
                <PokeName >

                  {poke}
                </PokeName>

                <PokeCard className="poke-card">
                  <PokeCardTitle  >
                    {loading ? 'loading' : currentPoke.name}
                    {loading ? 'loading' : <PokeImg src={currentPoke.sprites.front_default} alt={"poke"} />}

                  </PokeCardTitle>
                </PokeCard>
              </Item>

            </>
          )

          }
        </FilterContainer>
      </PokeWrapper>
    </>
  );
}
