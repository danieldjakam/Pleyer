import Header from '@/components/Landing/Header'
import Main from '@/components/Landing/Main'
import Image from 'next/image'

export default function Home() {
	return (
		<div class="min-h-screen bg-dark  bg-gray-900 text-white relative overflow-hidden sm:py-8">
			<div class="max-full mx-12">

				<div class="absolute -inset-1 ounded-lg blur pointer-events-none bg-gradient-to-r from-gray-900 via-green-700 to-black opacity-20"></div>

				<div class="">
					<Header />
					<Main />
				</div>
			</div>
		</div>
	)
}
