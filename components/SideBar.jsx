import React from 'react'
import { RoundedFulled } from './MyComponents/Rounded'
import Image from 'next/image'
import Link from 'next/link'
function SideBar() {
    return (
        <div className='w-52 flex flex-col  bg-white p-5'>
            <div className='flex items-center flex-col w-full'>
                <div className='w-24 overflow-hidden h-24 rounded-full bg-blue-500 shadow-xl shadow-slate-400 flex items-end justify-center'>
                    <Image alt='Profile' src={'/me.png'} width={80} height={80} />
                </div>
                <h2 className='mt-2'>Farzan Hulk</h2>
                <h4 className='text-xs text-gray-500'>farzanhulk@gmail.com</h4>
            </div>

            <div className='mt-12 px-3 '>
                <ul>
                    <li className='py-2'>
                        <Link href={'/home'}> Home </Link>
                    </li>
                    <li className='py-2'>
                        <Link href={'/browse'} className='text-blue-800'> Browse </Link>
                    </li>
                    <li className='py-2'>
                        <Link href={'/album'}> Album </Link>
                    </li>
                    <li className='py-2'>
                        <Link href={'/artists'}> Artists </Link>
                    </li>
                    <li className='py-2'>
                        <Link href={'/videos'}> Videos </Link>
                    </li>
                </ul>

                <p className='my-5 uppercase text-gray-400 text-xs font-semibold'>My Music</p>

                <ul>
                    <li className='py-2'>
                        <Link href={'/history'}> Recently Played </Link>
                    </li>
                    <li className='py-2'>
                        <Link href={'/local'}> Local Files </Link>
                    </li>
                </ul>
            </div>

            <div className='fixed bottom-5 h-16 rounded-xl w-40 bg-gray-300 px-2 flex items-center'>
                <div className='bg-white h-12 w-10 rounded-md'>

                </div>
                <div className='mx-2'>
                    <h3 className='text-xs'>Iphone X</h3>
                    <p className='text-gray-500 text-xs'>128 go</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar