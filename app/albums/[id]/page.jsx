import { fetchOneAlbum } from '@/const/albums'
import { fetchSongsByAlbum } from '@/const/songs'
import { formatNumber, formatTime } from '@/const/utils'
import Image from 'next/image'
import React from 'react'
import { TbHeart, TbHeartFilled } from 'react-icons/tb'
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

    const tracks = await fetchSongsByAlbum(params.id)
    const album = await fetchOneAlbum(params.id);

    console.log(tracks);
    const contributors = () => {
        {
            return album.contributors &&
                album.contributors.filter(r => r.id !== album.artist.id).length > 0 ?
                `Ft ${album.contributors.filter(r => r.id !== album.artist.id).map(ar => ` ${ar.name}`)}`
                : ''
        }
    }

    return (

        <div class="min-h-screen p-10">

            <div class="flex bg-blue-600 p-3 rounded-lg">
                <Image class="mr-6" src={album.cover_big} alt={album.title} width={200} height={200} />
                <div class="flex flex-col justify-center">
                    <h4 class="mt-0 mb-2 uppercase text-white opacity-60 tracking-widest text-xs">Playlist</h4>
                    <h1 class="mt-0 mb-2 text-4xl text-white">{album.title}</h1>

                    <p class="text-white opacity-60 mb-2 text-sm">{contributors() ? `Ft ${contributors().trimEnd(',')}` : ''}</p>
                    <p class="text-white opacity-40 text-sm">Created by <a>{album.artist ? album.artist.name : ''}</a> - {album.nb_tracks} songs, {formatTime(album.duration)}</p>
                </div>
            </div>

            <div class="mt-6 flex justify-between">
                <div class="flex">
                    <button class="mr-2 bg-blue-500 text-blue-100 block py-2 px-8 rounded-full">Play</button>
                </div>
                <div class="text-gray-600 text-sm tracking-widest text-right">
                    <h5 class="mb-1">Listeners</h5>
                    <p>{formatNumber(album.fans)}</p>
                </div>
            </div>

            <div class="mt-10">
                <div className='mb-6'>
                    <h1 className='title'>
                        All associed songs
                    </h1>
                    <p className='counts'>{tracks.length} songs</p>
                </div>
                <div class="flex text-gray-600">
                    <div class="p-2 w-full">Title</div>
                    <div class="p-2 w-full">Artist</div>
                    <div class="p-2 w-full">Album</div>
                    <div class="p-2 w-full">⏱</div>
                    <div class="p-2 w-12 flex-shrink-0 text-pink-500 text-right"><TbHeartFilled /></div>
                </div>

                {
                    tracks ?
                        tracks.map(track => {
                            return <div key={track.id} class="flex border-b items-center mb-1 cursor-pointer bg-blue-100 hover:bg-blue-300 rounded-lg">
                                <div class="p-3 w-full">{track.title}</div>
                                <div class="p-3 w-full">{track.artist ? track.artist.name : ''}</div>
                                <div class="p-3 w-full">{album.title}</div>
                                <div class="p-3 w-full">{formatTime(track.duration)}</div>
                                <div class="p-2 w-12 flex-shrink-0 text-pink-500 text-right"><TbHeartFilled /></div>
                            </div>
                        })
                        :
                        <div class="flex border-b">
                            <div class="p-3 w-full">no</div>
                            <div class="p-3 w-full">track</div>
                            <div class="p-3 w-full">in this</div>
                            <div class="p-3 w-12 flex-shrink-0 text-right">album</div>
                            <div class="p-2 w-8 flex-shrink-0"></div>
                        </div>
                }
            </div>
        </div>
        // <>

        //     {params.id}
        // </>
    )
}