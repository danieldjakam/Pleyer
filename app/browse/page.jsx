import Header from '@/components/Header'
import Topchart from '@/components/Home/Topchart'
import SideBar from '@/components/SideBar'
import React from 'react'

function page() {
    return (
        <div className="min-h-screen bg-gray-200 flex relative overflow-hidden">
            <SideBar currentPage={'browse'} />
            <div className='w-full p-3'>
                <Header />
                <Topchart />
            </div>
        </div>
    )
}

export default page