import React from 'react'
import { Link } from 'react-router-dom'

export const TailwindCSSLink = props => {

    const { href } = props

    return (
        <Link to={href} className="font-medium text-slate-500 text-lg mx-5 hover:underline">{props.children}</Link>
    )
}