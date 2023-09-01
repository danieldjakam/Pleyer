import { AlbumsByGroup } from '@/components/Albums';
import { fetchPopularAlbums } from '@/const/albums';
import React from 'react';

async function page() {
    const popularAlbums = await fetchPopularAlbums()
    return (
        <>
            <AlbumsByGroup title={'African Albums'} albums={popularAlbums} />
            <AlbumsByGroup title={'American Albums'} albums={popularAlbums} />
            <AlbumsByGroup title={'Features Albums'} albums={popularAlbums} />
            <AlbumsByGroup title={'New Albums'} albums={popularAlbums} />
        </>
    )
}

export default page