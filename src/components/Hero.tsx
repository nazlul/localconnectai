'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Silk = dynamic(() => import('./ui/Silk'), { ssr: false })
const ChatBot = dynamic(() => import('./ChatBot'), { ssr: false })

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen text-[#F1F5F9] py-27 px-6 md:py-35 mb-4 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Silk
            speed={5}
            scale={1.5}
            color="#0d1f3d"
            noiseIntensity={1.2}
            rotation={0.2}
          />
        </div>
        <div className="container mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-white drop-shadow-xl">
            Redefining Financial Integrity.
            <br />
            Unstoppable.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto font-light">
            Using AI + blockchain to predict and stop financial crime. Our mission: safeguard South Africa’s economy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link href="#join-us" className="bg-[#2DD4BF] hover:bg-[#26bfb2] text-gray-900 font-bold py-5 px-14 rounded-full text-xl md:text-2xl transition duration-300 transform hover:scale-105 shadow-xl">
              Join the Mission
            </Link>
            <Link href="#differentiators" className="bg-transparent border-2 border-[#2DD4BF] hover:bg-[#2DD4BF] text-white hover:text-gray-900 font-bold py-5 px-14 rounded-full text-xl md:text-2xl transition duration-300 transform hover:scale-105 shadow-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <ChatBot />
    </>
  )
}
