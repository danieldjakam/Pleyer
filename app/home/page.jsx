import React from 'react'
import MostPopular from '@/components/Home/MostPopular'
import NowPlaying from '@/components/Home/NowPlaying'
import { AlbumsByGroup } from '@/components/Albums';
import { fetchPopularAlbums } from '@/const/albums';

async function page() {

    const popularAlbums = await fetchPopularAlbums()
    return (
        <>
            <AlbumsByGroup title={'Billboard Topchart'} albums={popularAlbums} />
            <div className='md:flex mt-9'>
                <div className='w-[calc(100%-408px)]'>
                    <MostPopular />
                </div>
                <div className='w-96 ml-6'>
                    <NowPlaying />
                </div>
            </div>
        </>
    )
}

export default page