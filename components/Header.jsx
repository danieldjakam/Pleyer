import Link from 'next/link'
import React from 'react'
import { TbSearch } from 'react-icons/tb'

function Header() {
    return (
        <div className='flex w-full justify-between py-4'>
            <div className='relative'>
                <span className='absolute top-2 left-2 text-gray-400'>
                    <TbSearch />
                </span>
                <input type='text' className='bg-transparent border border-gray-400 px-3 py-2 pl-7
                                    rounded-lg w-64 text-xs focus:outline-none text-blue-800 caret-blue-800'
                    placeholder='Search for song, artist, etc..' />
            </div>

            <div>
                <Link className='bg-gradient-to-r r from-pink-600 to-red-400 text-white px-3 py-3 rounded-xl opacity-70 hover:opacity-100' href={'/upgrade'}>
                    Upgrade plan
                </Link>
            </div>
        </div>
    )
}

export default Header