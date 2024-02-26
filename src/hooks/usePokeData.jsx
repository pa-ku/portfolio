import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'


export const usePokeData= ()=>{
    const [pokeNames, setPokeNames] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=180&offset=0`)
            .then((res) => {
                setPokeNames([...res.data.results.map(poke => poke.name)
                ]);
            });
    }, [])
    return{pokeNames}
}
