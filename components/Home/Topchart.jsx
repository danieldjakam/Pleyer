import React from 'react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import Album from './Album'
import { fetchPopularAlbums } from '@/const/albums'

async function Topchart() {
    const albums = await fetchPopularAlbums()
    return (
        <div className=''>
            <div className='flex justify-between items-end'>
                <div>
                    <h1 className='title'>
                        Billboard Topchart
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
            <div
                className="flex mt-4 overflow-x-scroll scrollbar-hide"
            >
                <div className="flex flex-nowrap space-x-3">
                    {
                        albums.map((album, id) => <Album key={album.id} album={album} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Topchart