import React, { useEffect, useState } from 'react'
import { PlayerForm } from '../components/PlayerForm'
import axios from 'axios'

export const NewPlayer = () => {
    return (
        <div className='container mx-auto mt-5 bg-white p-5 border-4'>
            <PlayerForm />
        </div>
    )
}