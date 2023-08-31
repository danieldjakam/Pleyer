'use client'
import React, { useState } from 'react';
import { TbSquare } from 'react-icons/tb'
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay, FaRandom } from 'react-icons/fa'

function ButtonsLecture() {
    const [isLoop, setIsLoop] = useState(false);
    const [isPlay, setIsPlay] = useState(false);
    const [isRandom, setIsRandom] = useState(false);

    return (
        <div className="space-x-10 flex text-gray-400">
            <button onClick={() => { setIsRandom(!isRandom) }} className={isRandom ? 'text-blue-600' : ''}>
                < FaRandom />
            </button>
            <button>
                <FaArrowLeft />
            </button>
            <button onClick={() => { setIsPlay(!isPlay) }} className='shadow-lg w-12 h-12 bg-white flex items-center justify-center text-blue-600 font-bold rounded-full'>
                {isPlay ? <FaPause /> : <FaPlay />}
            </button>
            <button>
                <FaArrowRight />
            </button>
            <button onClick={() => { setIsLoop(!isLoop) }} className={isLoop ? 'text-blue-600' : ''}>
                < TbSquare />
            </button>
        </div>
    )
}

export default ButtonsLecture