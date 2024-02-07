import { formatTime, getPercentOfTime } from '@/const/utils';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function LectureCard({ isPlaying }) {
    const [time, setTime] = useState(0);
    const [percent, setPercent] = useState(0);
    const endTime = 270

    useEffect(() => {
        let interval
        if (isPlaying) {
            if (time < endTime) {
                interval = setInterval(() => { setTime(v => v + 1) }, 1000)
            } else {
                setTime(0);

            }
        } else {
            clearInterval(interval)
        }
        setPercent(getPercentOfTime(time, endTime));
    }, [isPlaying, time, percent])

    return (
        <div className='p-3 py-5 rounded-2xl shadow-2xl shadow-gray-300 w-80 flex flex-col items-center'>
            <div className={`relative w-32 h-32 rounded-full bg-blue-600 rotation ${isPlaying ? 'animate-spin' : 'animate-none'}`}>
                <Image src="/backgrounds/3.png" width={128} height={128} className='w-full h-full rounded-full ' alt="Coloring Book" />
                <div className='absolute bg-white w-12 h-12 rounded-full top-[calc(50%-1.5rem)] left-[calc(50%-1.5rem)]'></div>
            </div>

            <h1 className='music_title mt-4'>Starboy</h1>
            <p className='artist_name'>The Weekend</p>

            <div className='w-72 mt-5 relative'>
                <div className='h-1 rounded bg-gray-400 w-full'></div>
                <div className={`h-1 top-0 bottom-0 rounded bg-blue-700 absolute progress`} style={{ width: percent + '%' }}></div>
            </div>
            <div className='flex justify-between w-full mt-3 p-2 text-gray-400 font-thin'>
                <span>{formatTime(time)}</span>
                <span>{formatTime(endTime)}</span>
            </div>
        </div >
    )
}

export default LectureCard