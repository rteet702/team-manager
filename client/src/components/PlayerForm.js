import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const PlayerForm = () => {

    const [formState, setFormState] = useState(false)
    const [name, setName] = useState('')
    const [preferred_position, setPreferredPosition] = useState('')

    const nav = useNavigate()

    const formHandler = e => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/players', {
            name,
            preferred_position
        })
            .then(() => nav('/players/list'))
    }

    useEffect(() => {
        if (name.length < 2) {
            setFormState(false)
        }
        else {
            setFormState(true)
        }
    }, [name])

    return (
        <form onSubmit={formHandler}>
            <h1 className='font-bold text-3xl'>Add Player</h1>
            <div className='mt-5 grid grid-cols-3'>
                <label htmlFor="name" className=''>Player Name:</label>
                <input className="col-span-2" type="text" id="name" placeholder='name...' onChange={e => setName(e.target.value)} />
            </div>
            <div className='mt-5 grid grid-cols-3'>
                <label htmlFor="preferred_position" className=''>Preferred Position:</label>
                <input className="col-span-2" type="text" id="preferred_position" placeholder='position...' onChange={e => setPreferredPosition(e.target.value)} />
            </div>
            <input disabled={!formState} type="submit" value="Submit" className='w-full mt-5 cursor-pointer disabled:cursor-default bg-purple-600 hover:bg-purple-500 disabled:bg-gray-500 py-1 rounded-lg text-xl text-white' />
        </form>
    )
}