import React from 'react'
import LinearSong from './LinearSong'
import { fetchPopularTracks } from '@/const/songs'

async function MostPopular() {
    const popularTracks = await fetchPopularTracks()
    return (
        <div className=''>
            <div className='mb-4'>
                <h1 className='title'>
                    Most Popular
                </h1>
                <p className='counts'>{popularTracks.length} songs</p>
            </div>

            <div className=''>
                {
                    popularTracks.map((song, id) => <LinearSong key={song.id} song={song} number={id} />)
                }
            </div>
        </div>
    )
}

export default MostPopular