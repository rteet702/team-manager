import React from 'react'

export const TailwindCSSDeleteButton = props => {

    const { clickHandler } = props

    return (
        <button className='bg-red-600 hover:bg-red-500 px-3 py-1 text-white' onClick={clickHandler}>{props.children}</button>
    )
}