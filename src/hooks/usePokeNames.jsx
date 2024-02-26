import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'


/**  
  @params nPokemons = cantidad de pokemons que se llaman a la api
  @params pokeNames = array de los nombres de los pokemons

 **/

export const usePokeNames = (mPokemons)=>{
    const [pokeNames, setPokeNames] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${mPokemons}&offset=0`)
            .then((res) => {
                setPokeNames([...res.data.results.map(poke => poke.name)
                ]);
            });
    }, [])
    return{pokeNames}
}
