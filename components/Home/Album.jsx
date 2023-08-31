import Image from 'next/image'
import React from 'react'

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

export default Album