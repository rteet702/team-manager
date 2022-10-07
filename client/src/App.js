import React from 'react'
import { Landing } from './views/Landing'
import { NewPlayer } from './views/NewPlayer'
import { TailwindCSSLink } from './components/Link'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
    return (
        <BrowserRouter>

            <div className='container mx-auto p-5'>
                <TailwindCSSLink href={'/players/list'}>Manage Players</TailwindCSSLink>
                <TailwindCSSLink href={'/players/status'}>Manage Player Status</TailwindCSSLink>

                <div className='container mx-auto mt-5 bg-white p-5 border-4'>
                    <TailwindCSSLink href={'/players/list'}>List</TailwindCSSLink>
                    <TailwindCSSLink href={'/players/addplayer'}>Add Player</TailwindCSSLink>

                    <Routes>
                        <Route path='/players/list' element={<Landing />} />
                        <Route path='/players/addplayer' element={<NewPlayer />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}