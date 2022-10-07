import React, { useEffect, useState } from 'react'
import { TailwindCSSPlayerTable } from '../components/PlayerTable'
import axios from 'axios'

export const Landing = () => {

    const [players, setPlayers] = useState([])
    const [refresh, toggleRefresh] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(response => setPlayers(response.data))
    }, [refresh])

    const refreshPage = () => {
        toggleRefresh(!refresh)
    }

    return (
        <div className='container mx-auto mt-5 bg-white p-5 border-4'>
            <TailwindCSSPlayerTable players={players} refreshPage={refreshPage} />
        </div>
    )
}