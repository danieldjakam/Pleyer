import React from 'react'
import { fetchPopularTracks } from '@/const/songs'
import { OneColumnForLinear } from '../Song'

async function MostPopular() {
    const popularTracks = await fetchPopularTracks()
    return (
        <div className=''>
            <div className='mb-4'>
                <h1 className='title'>
                    Most Popular Tracks
                </h1>
                <p className='counts'>{popularTracks.length} songs</p>
            </div>
            <OneColumnForLinear songs={popularTracks} />
        </div>
    )
}

export default MostPopular