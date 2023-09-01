import { fetchNewTracks } from '@/const/songs'
import React from 'react'
import { LinearSong } from '../Song';

export async function PopularTracks() {
    const newTracks = await fetchNewTracks();
    return (
        <div>
            {
                newTracks.map((song, id) => <LinearSong key={song.id} song={song} number={id} />)
            }
        </div>
    )
}