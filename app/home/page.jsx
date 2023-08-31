import Header from '@/components/Header'
import Topchart from '@/components/Home/Topchart'
import SideBar from '@/components/SideBar'
import React from 'react'
import MostPopular from '@/components/Home/MostPopular'
import NowPlaying from '@/components/Home/NowPlaying'

function page() {
    return (
        <>
            <Topchart />
            <div className='md:flex mt-9'>
                <div className='w-[calc(100%-408px)]'>
                    <MostPopular />
                </div>
                <div className='w-96 ml-6'>
                    <NowPlaying />
                </div>
            </div>
        </>
    )
}

export default page