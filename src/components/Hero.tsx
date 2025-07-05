'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-[#0d1f3d] text-[#F1F5F9] py-15 px-6 md:py-20 overflow-hidden mb-4 md:mx-4 rounded-2xl">
      <div className="container mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 bg-gradient-to-r from-[#217EAA] to-[#6B46C1] text-transparent bg-clip-text drop-shadow-xl">
          Redefining Financial Integrity.
          <br />
          Unstoppable.
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl mb-12 max-w-5xl mx-auto opacity-90 font-light">
          Leveraging cutting-edge AI and secure blockchain technologies to predict, prevent, and decisively combat financial crime. We are building an impenetrable defense for our nation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
          <Link
            href="#join-us"
            className="bg-[#2DD4BF] hover:bg-[#26bfb2] text-gray-900 font-bold py-5 px-14 rounded-full text-xl md:text-2xl transition duration-300 transform hover:scale-105 shadow-xl"
          >
            Join the Mission
          </Link>
          <Link
            href="#about"
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
        className="fixed bottom-4 right-4 bg-[#25D366] hover:bg-[#1ebe57] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center z-50 shadow-lg transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-white text-3xl sm:text-4xl"></i>
      </a>
    </section>
  )
}
