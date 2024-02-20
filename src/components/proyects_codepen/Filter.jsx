import React, { useState } from "react";
import styled from "styled-components";

const InputFilter = styled.input`
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  border: 4px solid #9cd9ff;
  &:focus{
    border-color: #3fb5ff;
    outline: 0px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--main-pink-250);
  width: 200px;
  font-weight: 800;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 20px;
  gap: 10px;
  text-align: center;
`;
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
      <p>FILTRO DE VERDURAS</p>

      <InputFilter placeholder="Busca tu verdura favorita!" onChange={FilterHandler} type="text" />
      <FilterContainer>
        {query && filteredProducts.map((item) => <p key={item}>{item}</p>)}
     {query === "" && "Ingresa una verdura!"}
      </FilterContainer>

    </>
  );
}
