import React from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import { HorizontalScrollAlbums } from '../Albums'
import { fetchNewAlbums } from '@/const/albums'

export async function NewReleases() {
    const albums = await fetchNewAlbums()
    return (
        <div className=''>
            <div className='flex justify-between items-end'>
                <div>
                    <h1 className='title'>
                        New Releases
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
