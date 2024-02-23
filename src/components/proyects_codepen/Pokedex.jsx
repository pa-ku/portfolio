import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckBox from "../ui/CheckBox";
import PokeBallLogo from '../../assets/img/logos/pokeball-logo.svg'
import axios from "axios";
import useSound from "use-sound";

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
font-family: "Pixelify Sans", sans-serif;
cursor: pointer;
font-weight: 800;
letter-spacing: 3px;
font-size: 20px;
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
const PokeTitle = styled.h2`
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
const PokeWrapper = styled.div`
width: 100%;
padding-inline: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media(max-width:700px){
display: block;
}
`

export default function Filter() {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState([])
  const [filterPoke, setFilteredPoke] = useState([])
  const [pokeSound, setPokeSound] = useState(``)
  const audio = new Audio(pokeSound);


  useEffect(() => {
    const dataPokemon = async () => {
      const pokeApi = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
      setPokemon(pokeApi.data.results)
    }
    dataPokemon()
  }, [query])


  useEffect(() => {
    setFilteredPoke(pokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(query.toLowerCase());
    }))
  }, [query])



  function handleSound() {
    audio.play();
  }

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
              <Item onMouseEnter={() => setPokeSound(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/${poke.url.split("/")[6]}.ogg`)} onClick={handleSound} key={poke.name}>
                {poke.name}
                <PokeCard className="poke-card">
                  <PokeTitle  >
                    {poke.name}

                    {/*  <PokeImg src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.split("/")[6]}.png`} alt="" /> */}
                    <PokeImg src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${poke.url.split("/")[6]}.gif`} alt="" />

                  </PokeTitle>
                  {/*                   https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg */}
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
