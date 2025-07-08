'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ChatBot = dynamic(() => import('./ChatBot'), { ssr: false })

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen text-[#F1F5F9] py-27 px-6 md:py-35 mb-4 rounded-2xl overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          src="/bg-3.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
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
            <Link
              href="#join-us"
              className="bg-[#2DD4BF] hover:bg-[#26bfb2] text-gray-900 font-bold py-5 px-14 rounded-full text-xl md:text-2xl transition duration-300 transform hover:scale-105 shadow-xl"
            >
              Join the Mission
            </Link>
            <Link
              href="#differentiators"
              className="bg-transparent border-2 border-[#2DD4BF] hover:bg-[#2DD4BF] text-white hover:text-gray-900 font-bold py-5 px-14 rounded-full text-xl md:text-2xl transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
        <a
          href="https://wa.me/14155238886?text=join%20satisfied-inside"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 right-4 bg-[#25D366] hover:bg-[#1ebe57] rounded-full w-14 h-14 flex items-center justify-center z-50 shadow-lg transition-all duration-300 overflow-x-hidden"
          aria-label="Chat on WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl sm:text-3xl" />
        </a>
      </section>
      <ChatBot />
    </>
  )
}
