import Header from '@/components/Header'
import Topchart from '@/components/Home/Topchart'
import SideBar from '@/components/SideBar'
import React from 'react'

function page() {
    return (
        <div class="min-h-screen bg-gray-200 flex relative overflow-hidden">
            <SideBar />
            <div className='w-full'>
                <Header />
                <Topchart />
            </div>
        </div>
    )
}

export default page