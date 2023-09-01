import { ArtistsByGroup } from '@/components/Artists';
import { fetchNewArtists } from '@/const/artists'
import React from 'react'

async function page() {
    const newArtists = await fetchNewArtists();
    return (
        <>
            <ArtistsByGroup title={'African artists'} artists={newArtists} />
            <ArtistsByGroup title={'American artists'} artists={newArtists} />
            <ArtistsByGroup title={'Features artists'} artists={newArtists} />
            <ArtistsByGroup title={'New artists'} artists={newArtists} />
        </>
    )
}

export default page