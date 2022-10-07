import axios from 'axios'
import React from 'react'
import { TailwindCSSDeleteButton } from './DeleteButton'

export const TailwindCSSPlayerTable = props => {

    const { players, refreshPage } = props

    const deleteClick = (e, player) => {
        if (window.confirm(`Are you sure you want to delete ${player.name}?`)) {
            axios.delete('http://localhost:8000/api/players/' + player._id)
                .then(() => refreshPage())
        }
    }

    return (
        <table className='mx-5 w-full table-auto text-slate-600 text-left'>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.preferred_position}</td>
                            <td>
                                <TailwindCSSDeleteButton clickHandler={(e) => deleteClick(e, player)}>
                                    Delete
                                </TailwindCSSDeleteButton>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
