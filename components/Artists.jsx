import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

function Artist({ artist }) {
    return (
        <Link href={`/artists/${artist.id}`} key={artist.id} className="inline-block">
            <div
                className={`max-w-xl overflow-hidden rounded-xl duration-300 ease-in-out  ${artist.id == 1 ? 'w-60' : "w-56"}`}
            >
                <div className='bg-transparent rounded-xl text-white flex items-center justify-start'>
                    <Image src={artist.picture_big} alt={artist.name} className={`rounded w-full h-52`} width={500} height={500} />
                </div>
                <div>
                    <h1 className='music_title mt-4'>{artist.name}</h1>
                </div>
            </div>
        </Link>
    )
}
export function HorizontalScrollArtist({ artists }) {
    return (
        <div
            className="flex mt-4 overflow-x-scroll scrollbar-hide"
        >
            <div className="flex flex-nowrap space-x-3">
                {
                    artists.map((artist, id) => <Artist key={artist.id} artist={artist} />)
                }
            </div>
        </div>
    )
}
export function ArtistsByGroup({ artists, title }) {
    return (
        <div className='mb-10'>
            <div className='flex justify-between items-end'>
                <div>
                    <h1 className='title'>
                        {title}
                    </h1>
                    <p className='counts'>{artists.length} Artists</p>
                </div>
                <div className="flex text-lg text-gray-500">
                    <button>
                        <TbChevronLeft />
                    </button>
                    <button>
                        <TbChevronRight />
                    </button>
                </div>
            </div>
            <HorizontalScrollArtist artists={artists} />
        </div>
    )
}