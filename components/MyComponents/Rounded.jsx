import Image from 'next/image'
import React from 'react'

export function RoundedFulled({ backColor, w, h, children }) {
    return (
        <div className={`w-${w} h-${h} bg-${backColor} flex items-center justify-center rounded-full`} >
            {children}
        </div >
    )
}