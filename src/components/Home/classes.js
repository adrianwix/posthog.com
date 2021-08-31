import React from 'react'
import cntl from 'cntl'

export const heading = (size = 'lg', color = 'primary', classes = '') => {
    const options = {
        lg: 'text-4xl md:text-6xl',
        md: 'text-3xl lg:text-5xl',
        sm: 'text-base md:text-xl font-semibold mt-2 lg:mt-4',
    }
    return cntl`
        m-0
        text-center
        ${options[size]}
        text-${color}
        ${classes}
    `
}

export const section = (className = '') => cntl`
    max-w-screen-2xl
    mx-auto
    my-16
    md:my-32
    px-4
    ${className}
`
