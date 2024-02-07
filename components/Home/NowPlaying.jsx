'use client'
import React, { useState } from 'react'
import LectureCard from './LectureCard'
import ButtonsLecture from './ButtonsLecture'

function NowPlaying({ src }) {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div>
            <div className='mb-4'>
                <h1 className='title'>
                    Now Playing
                </h1>
                <p className='counts'>10 Items in Lists</p>
            </div>

            <div className='h-auto w-full bg-white p-3 shadow-md rounded-lg flex flex-col items-center'>
                <LectureCard src={src} isPlaying={isPlaying} />
                <div className='my-8'>
                    <ButtonsLecture isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                </div>
            </div>
        </div>
    )
}

export default NowPlaying