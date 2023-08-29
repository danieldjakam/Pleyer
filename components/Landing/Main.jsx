import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Main() {
    return (
        <div className='flex h-100 py-8'>
            <div className='flex flex-col h-full py-32 justify-center w-1/2'>
                <div className='text-white font-semibold text-6xl'>
                    <h1>
                        Listening for your
                    </h1>
                    <h1>
                        better mood
                    </h1>
                </div>
                <div className='mt-8'>
                    <p>
                        100 million+ original songs and remixes.
                    </p>
                    <p>
                        No credit card needed
                    </p>
                </div>
                <div className='my-3 flex mt-8 items-center'>
                    <Link href={'/home'} className='bg-white hover:bg-blue-400 duration-500 transition-colors  cursor-pointer bg-opacity-30 px-4 py-3 rounded-lg'>
                        Play now
                    </Link>

                    <Link href={'/'} className='ml-10 duration-500 transition-colors cursor-pointer hover:text-blue-400'>
                        Download the app
                    </Link>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='border-8 border-blue-600 h-full rounded-3xl'>
                    <Image alt="" width={500} height={500} className='w-full h-full rounded-2xl' src='/ko.png' />
                </div>
            </div>
        </div>
    )
}

export default Main