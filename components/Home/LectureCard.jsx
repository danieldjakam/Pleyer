import Image from 'next/image'
import React from 'react'

function LectureCard() {
    return (
        <div className='p-3 py-5 rounded-2xl shadow-2xl shadow-gray-300 w-80 flex flex-col items-center'>
            <div className='relative w-32 h-32 rounded-full bg-blue-600'>
                <Image src="/backgrounds/3.png" width={128} height={128} className='w-full h-full rounded-full' alt="Coloring Book" />
                <div className='absolute bg-white w-12 h-12 rounded-full top-[calc(50%-1.5rem)] left-[calc(50%-1.5rem)]'></div>
            </div>

            <h1 className='music_title mt-4'>Starboy</h1>
            <p className='artist_name'>The Weekend</p>

            <div className='w-72 mt-5 relative'>
                {/* <div className='h-1 rounded bg-gray-400 w-full'></div>
                <div className='h-1 w-40 top-0 bottom-0 rounded bg-blue-700 absolute relative LectureCard'></div> */}
                <audio controls>
                    <source src="https://cdns-preview-2.dzcdn.net/stream/c-2a2a808c0966c0952aa4f6bae6fa98de-6.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>




            </div>
            <div className='flex justify-between w-full mt-3 p-2 text-gray-400 font-thin'>
                <span>2:10</span>
                <span>4:30</span>
            </div>
        </div>
    )
}

export default LectureCard