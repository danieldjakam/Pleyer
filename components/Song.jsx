import { formatTime } from '@/const/utils'
import Image from 'next/image'
import React from 'react'
import { FaCaretLeft, FaHeart } from 'react-icons/fa'

export function LinearSong({ song, number }) {
    return (
        <div className='flex mb-4 items-center bg-white shadow-sm py-2 rounded-lg px-7'>
            <h2 className='music_title w-1/12'>{number + 1}</h2>
            <div className='  w-1/12 rounded'>
                <Image className='w-10 h-10' src={song.album.cover_small} width={40} height={30} alt={song.title} />
            </div>
            <div className='flex items-center w-1/2'>
                <span className='text-gray-400'><FaCaretLeft /></span>
                <h1 className='music_title'>{song.title}</h1>
            </div>
            <div className='w-1/2'>
                <p className='artist_name'>{song.artist.name}</p>
                <p className='artist_name'>
                    {song.contributors ? `feat ${contributors.map(c => c.name)}` : ''}
                </p>
            </div>
            <p className='artist_name w-1/6'>{formatTime(song.duration)}</p>
            <button className={` w-1/12 ${song.isLiked ? 'text-pink-600' : 'text-gray-400'}`}>
                <FaHeart />
            </button>
        </div>
    )
}


export function OneColumnForLinear({ songs }) {
    return (

        <div className=''>
            {
                songs.map((song, id) => <LinearSong key={song.id} song={song} number={id} />)
            }
        </div>
    )
}

export function ManyColumnForLinear({ songs }) {
    return (
        <div className='grid md:mb-12 md:grid-cols-2 gap-4'>
            {
                songs.map((song, id) => <LinearSong key={song.id} song={song} number={id} />)
            }
        </div>
    )
}