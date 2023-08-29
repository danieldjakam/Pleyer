import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='flex w-full justify-between p-3 py-4'>
            <input type='text' placeholder='Search for song, artist, etc..' className='bg-transparent border border-gray-400 px-3 py-2 pl-7 rounded-lg w-64 text-xs focus:outline-none' />

            <div>
                <Link className='bg-gradient-to-r r from-pink-600 to-red-400 text-white px-3 py-3 rounded-xl opacity-70 hover:opacity-100' href={'/upgrade'}>
                    Upgrade plan
                </Link>
            </div>
        </div>
    )
}

export default Header