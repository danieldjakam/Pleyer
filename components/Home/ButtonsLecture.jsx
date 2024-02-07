'use client'
import React, { useState } from 'react';
import { TbRepeat, TbSquare, TbSquare1Filled, TbSquare9Filled, TbSquareChevronsRight } from 'react-icons/tb'
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay, FaRandom } from 'react-icons/fa'

function ButtonsLecture({ isPlaying, setIsPlaying }) {
    const [isLoop, setIsLoop] = useState(false);
    const [isRandom, setIsRandom] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);

    const setIsRepeatOrLoop = () => {
        if (!isRepeat) {
            setIsLoop(v => !v)
        } else {
            setIsRepeat(v => !v)
            setIsLoop(false)
        }

        if (isLoop) {
            setIsLoop(false)
            setIsRepeat(true)
        }
    }

    return (
        <div className="space-x-10 flex text-gray-400">
            <button onClick={() => { setIsRandom(!isRandom) }} className={isRandom ? 'text-blue-600' : ''}>
                < FaRandom />
            </button>
            <button>
                <FaArrowLeft />
            </button>
            <button onClick={() => { setIsPlaying(!isPlaying) }} className='shadow-lg w-12 h-12 bg-white flex items-center justify-center text-blue-600 font-bold rounded-full'>
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button>
                <FaArrowRight />
            </button>
            <button onClick={() => { setIsRepeatOrLoop() }} className={isLoop || isRepeat ? 'text-blue-600' : ''}>
                {!isRepeat ? < TbSquare /> : <TbRepeat />}
            </button>
        </div>
    )
}

export default ButtonsLecture