import { useState,useEffect } from "react"
import axios from "axios"


export const usePokeData = (pokeNames, renderCondition) => {
    const [currentPoke, setCurrentPoke] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        let roll = Math.floor(Math.random() * pokeNames.length) + 1
        axios.get(`https://pokeapi.co/api/v2/pokemon/${roll}`)
            .then(res => {
                const data = res.data
                setCurrentPoke(data)
                setLoading(false)
            })

    }, [renderCondition && renderCondition])

    return { currentPoke, loading }
}