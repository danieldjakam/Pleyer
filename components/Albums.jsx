import Image from 'next/image'
import React from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

function Album({ album }) {
    return (
        <div key={album.id} className="inline-block">
            <div
                className={`max-w-xl overflow-hidden rounded-xl duration-300 ease-in-out  ${album.id == 1 ? 'w-60' : "w-56"}`}
            >
                <div className='bg-transparent rounded-xl text-white flex items-center justify-start'>
                    <Image src={album.cover_big} alt='Coloring Book' className={`rounded w-full h-52`} width={500} height={500} />
                </div>
                <div>
                    <h1 className='music_title mt-4'>{album.title}</h1>
                    <p className='artist_name'>{album.artist.name}</p>
                </div>
            </div>
        </div>
    )
}
export function HorizontalScrollAlbums({ albums }) {
    return (
        <div
            className="flex mt-4 overflow-x-scroll scrollbar-hide"
        >
            <div className="flex flex-nowrap space-x-3">
                {
                    albums.map((album, id) => <Album key={album.id} album={album} />)
                }
            </div>
        </div>
    )
}
export function AlbumsByGroup({ albums, title }) {
    return (
        <div className='mb-10'>
            <div className='flex justify-between items-end'>
                <div>
                    <h1 className='title'>
                        {title}
                    </h1>
                    <p className='counts'>{albums.length} Albums</p>
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
            <HorizontalScrollAlbums albums={albums} />
        </div>
    )
}