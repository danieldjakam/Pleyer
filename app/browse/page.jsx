import React from 'react';
import { ManyColumnForLinear } from '@/components/Song'
import { fetchNewTracks } from '@/const/songs'
import Link from 'next/link';
import { AlbumsByGroup } from '@/components/Albums';
import { fetchNewAlbums } from '@/const/albums';

async function page() {
    const newTracks = await fetchNewTracks();
    const newAlbums = await fetchNewAlbums()
    return (
        <>
            <AlbumsByGroup title={'New Albums'} albums={newAlbums} />
            <div className='mt-6'>
                <div className='flex justify-between items-end mb-4'>
                    <div>
                        <h1 className='title'>
                            New songs
                        </h1>
                        <p className='counts'>{newTracks.length} songs</p>
                    </div>
                    <div className="flex text-lg text-gray-500">
                        <Link href={'/'} className='hover:text-blue-600 transition-colors duration-500'>See all</Link>
                    </div>
                </div>
                <ManyColumnForLinear songs={newTracks} />
            </div>
        </>
    )
}

export default page