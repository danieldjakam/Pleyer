import Header from '@/components/Header'
import Topchart from '@/components/Home/Topchart'
import SideBar from '@/components/SideBar'
import React from 'react'
import MostPopular from '@/components/Home/MostPopular'
import NowPlaying from '@/components/Home/NowPlaying'

function page() {
    return (
        <div className="min-h-screen bg-slate-100 flex relative overflow-hidden">
            <SideBar currentPage={'home'} />
            <div className='w-[calc(100%-16rem)] py-3 pb-7 px-8 ml-64'>
                <Header />
                <div class="bg-black text-gray-300 min-h-screen p-10">

                    <div class="flex">
                        <img class="mr-6" src="https://placekitten.com/g/200/200" />
                        <div class="flex flex-col justify-center">
                            <h4 class="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">Playlist</h4>
                            <h1 class="mt-0 mb-2 text-white text-4xl">Spotify Album Page with Tailwind CSS</h1>

                            <p class="text-gray-600 mb-2 text-sm">With J. Cole, Quavo, Ty Dollar $ign</p>
                            <p class="text-gray-600 text-sm">Created by <a>Spotify</a> - 50 songs, 3 hr 2 min</p>
                        </div>
                    </div>

                    <div class="mt-6 flex justify-between">
                        <div class="flex">
                            <button class="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full">Play</button>
                            <button class="mr-2 border border-white block p-2 rounded-full"><img src="https://image.flaticon.com/icons/svg/2485/2485986.svg" height="25" width="25" /></button>
                            <button class="mr-2 border border-white block p-2 rounded-full">...</button>
                        </div>
                        <div class="text-gray-600 text-sm tracking-widest text-right">
                            <h5 class="mb-1">Followers</h5>
                            <p>5,055</p>
                        </div>
                    </div>

                    <div class="mt-10">
                        <div class="flex text-gray-600">
                            <div class="p-2 w-8 flex-shrink-0"></div>
                            <div class="p-2 w-8 flex-shrink-0"></div>
                            <div class="p-2 w-full">Title</div>
                            <div class="p-2 w-full">Artist</div>
                            <div class="p-2 w-full">Album</div>
                            <div class="p-2 w-12 flex-shrink-0 text-right">⏱</div>
                        </div>

                        <div class="flex border-b border-gray-800 hover:bg-gray-800">
                            <div class="p-3 w-8 flex-shrink-0">▶️</div>
                            <div class="p-3 w-8 flex-shrink-0">❤️</div>
                            <div class="p-3 w-full">My Song Here</div>
                            <div class="p-3 w-full">Eminem</div>
                            <div class="p-3 w-full">Spotify</div>
                            <div class="p-3 w-12 flex-shrink-0 text-right">5:35</div>
                        </div>
                        <div class="flex border-b border-gray-800 hover:bg-gray-800">
                            <div class="p-3 w-8 flex-shrink-0">▶️</div>
                            <div class="p-3 w-8 flex-shrink-0">❤️</div>
                            <div class="p-3 w-full">My Song Here</div>
                            <div class="p-3 w-full">Eminem</div>
                            <div class="p-3 w-full">Spotify</div>
                            <div class="p-3 w-12 flex-shrink-0 text-right">5:35</div>
                        </div>
                        <div class="flex border-b border-gray-800 hover:bg-gray-800">
                            <div class="p-3 w-8 flex-shrink-0">▶️</div>
                            <div class="p-3 w-8 flex-shrink-0">❤️</div>
                            <div class="p-3 w-full">My Song Here</div>
                            <div class="p-3 w-full">Eminem</div>
                            <div class="p-3 w-full">Spotify</div>
                            <div class="p-3 w-12 flex-shrink-0 text-right">5:35</div>
                        </div>
                        <div class="flex border-b border-gray-800 hover:bg-gray-800">
                            <div class="p-3 w-8 flex-shrink-0">▶️</div>
                            <div class="p-3 w-8 flex-shrink-0">❤️</div>
                            <div class="p-3 w-full">My Song Here</div>
                            <div class="p-3 w-full">Eminem</div>
                            <div class="p-3 w-full">Spotify</div>
                            <div class="p-3 w-12 flex-shrink-0 text-right">5:35</div>
                        </div>
                        <div class="flex border-b border-gray-800 hover:bg-gray-800">
                            <div class="p-3 w-8 flex-shrink-0">▶️</div>
                            <div class="p-3 w-8 flex-shrink-0">❤️</div>
                            <div class="p-3 w-full">My Song Here</div>
                            <div class="p-3 w-full">Eminem</div>
                            <div class="p-3 w-full">Spotify</div>
                            <div class="p-3 w-12 flex-shrink-0 text-right">5:35</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page