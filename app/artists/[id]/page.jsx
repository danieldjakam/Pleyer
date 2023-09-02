import { AlbumsByGroup } from '@/components/Albums'
import { ManyColumnForLinear } from '@/components/Song'
import { fetchAlbumsByArtist } from '@/const/albums'
import { fetchOneArtist } from '@/const/artists'
import { fetchSongsByArtist } from '@/const/songs'
import { formatNumber } from '@/const/utils'
import Image from 'next/image'
import React from 'react'
export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }]
}

export async function generateMetadata(
    { params, searchParams },
    parent
) {
    // read route params
    const id = params.id

    // fetch data

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: 'product.title',
        openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages],
        },
    }
}
export default async function page({ params }) {

    const tracks = await fetchSongsByArtist(params.id)
    const albums = await fetchAlbumsByArtist(params.id)
    const artist = await fetchOneArtist(params.id);
    return (
        <div>
            <div className='mb-10'>
                <div className='flex bg-blue-600 p-3 h-full items-center rounded-lg'>
                    <div className='w-[calc(100%-18rem)] h-full flex pl-10 flex-col justify-center'>
                        <h1 className='text-5xl mb-6 text-white'>
                            {artist.name}
                        </h1>
                        <p className='text-2xl text-gray-200 opacity-60'>{formatNumber(artist.nb_album)} albums</p>
                        <p className='text-2xl text-gray-200 opacity-60'>{formatNumber(artist.nb_fan)} listeners</p>
                    </div>
                    <div className='w-72 h-full rounded-lg'>
                        <Image src={artist.picture_big} alt={artist.name} width={200} className='w-full h-full rounded-lg' height={200} />
                    </div>
                </div>
            </div>
            <AlbumsByGroup title={'His Albums'} albums={albums} />


            <div className='mb-4'>
                <h1 className='title'>
                    His songs
                </h1>
                <p className='counts'>{tracks.length} songs</p>
            </div>
            <ManyColumnForLinear songs={tracks} />
        </div>
    )
}