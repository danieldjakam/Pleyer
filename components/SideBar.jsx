import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbBrowser, TbFile, TbFileMusic, TbHome, TbPlayerEjectFilled, TbTimeline, TbVideo } from "react-icons/tb";
import { GiAlarmClock, GiFaceToFace, GiPerson, GiWomanElfFace } from "react-icons/gi";

function SideBar({ currentPage }) {
    // const currentPage = window.location.href.split('/')[3];
    return (
        <div className='w-64 flex flex-col  bg-white p-5'>
            <div className='flex items-center flex-col w-full'>
                <div className='w-24 overflow-hidden h-24 rounded-full bg-blue-500 shadow-xl shadow-slate-400 flex items-end justify-center'>
                    <Image alt='Profile' src={'/me.png'} width={80} height={80} />
                </div>
                <h2 className='mt-2'>Farzan Hulk</h2>
                <h4 className='text-xs text-gray-500'>farzanhulk@gmail.com</h4>
            </div>

            <div className='mt-12 px-3 '>
                <ul>
                    <p className='py-2 flex'>
                        <Link href={'/home'} className={`flex items-center hover:text-blue-800 ${currentPage == 'home' ? `text-blue-600` : ``}`}>
                            <TbHome />
                            <span className="ml-3">Home</span>
                        </Link>
                    </p>
                    <li className='py-2'>
                        <Link href={'/browse'} className={`flex items-center hover:text-blue-800 ${currentPage == 'browse' ? `text-blue-600` : ``}`}>
                            < TbBrowser />
                            <span className="ml-3">Browse</span>
                        </Link>
                    </li>
                    <li className='py-2'>
                        <Link href={'/album'} className={`flex items-center hover:text-blue-800 ${currentPage == 'album' ? `text-blue-600` : ``}`}>
                            <TbFileMusic />
                            <span className="ml-3">Albums</span>
                        </Link>
                    </li>
                    <li className='py-2'>
                        <Link href={'/artists'} className={`flex items-center hover:text-blue-800 ${currentPage == 'artists' ? `text-blue-600` : ``}`}>
                            <GiFaceToFace />
                            <span className="ml-3">Artists</span>
                        </Link>
                    </li>
                    <li className='py-2'>
                        <Link href={'/videos'} className={`flex items-center hover:text-blue-800 ${currentPage == 'videos' ? `text-blue-600` : ``}`}>
                            <TbVideo />
                            <span className="ml-3">Videos</span>
                        </Link>
                    </li >
                </ul >

                <p className='my-5 uppercase text-gray-400 text-xs font-semibold'>My Music</p>

                <ul>
                    <li className='py-2'>
                        <Link href={'/history'} className={`flex items-center hover:text-blue-800 ${currentPage == 'history' ? `text-blue-600` : ``}`}>
                            <GiAlarmClock />
                            <span className="ml-3">Recently Played</span>
                        </Link>
                    </li>
                    <li className='py-2'>
                        <Link href={'/local'} className={`flex items-center hover:text-blue-800 ${currentPage == 'local' ? `text-blue-600` : ``}`}>
                            <TbFile />
                            <span className="ml-3">Local Files</span>
                        </Link>
                    </li >
                </ul >
            </div >

            <div className='fixed bottom-5 h-16 rounded-xl w-auto shadow-2xl shadow-gray-300 bg-gray-300 px-2 flex items-center'>
                <div className='bg-white h-12 w-10 rounded-md'>

                </div>
                <div className='mx-2'>
                    <h3 className='text-xs'>Iphone X</h3>
                    <p className='text-gray-500 text-xs'>128 go</p>
                </div>
                <button className="ml-4 text-gray-500">
                    <TbPlayerEjectFilled />
                </button>
            </div>
        </div >
    )
}

export default SideBar