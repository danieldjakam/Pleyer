import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='flex justify-between items-center h-20'>
            <Link href={'/'} className='flex items-center'>
                <Image
                    src={'/logo.png'}
                    alt='Pleyer'
                    width={40}
                    height={10}
                />
                <h1 className='mx-2 text-xl font-medium hover:text-blue-400 duration-500 transition-colors'>Pleyer</h1>
            </Link>

            <ul className='flex'>
                <li className='mx-3 cursor-pointer'>
                    <Link href={'/'} className='hover:text-blue-400 duration-500 transition-colors'>Download</Link>
                </li>
                <li className='mx-3'>
                    <Link href={'/'} className='hover:text-blue-400 duration-500 transition-colors'>Premium</Link>
                </li>
                <li className='mx-3'>
                    <Link href={'/'} className='hover:text-blue-400 duration-500 transition-colors'>Support</Link>
                </li>
                <li className='mx-5 w-1 font-thin'>
                    <div className='w-2/3 h-5 bg-white'></div>
                </li>
                <li className='mx-3'>
                    <Link href={'/'} className='hover:text-blue-400 duration-500 transition-colors'>Register</Link>
                </li>
                <li className='mx-3'>
                    <Link href={'/'} className='hover:text-blue-400 duration-500 transition-colors'>Login</Link>
                </li>
            </ul>
        </div >
    )
}

export default Header