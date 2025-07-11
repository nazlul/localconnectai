'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SplitText from "./ui/Text";
import Sphere from './ui/sphere'

const ChatBot = dynamic(() => import('./ChatBot'), { ssr: false })

export default function Hero() {
  return (
    <>
      <section className="relative text-[#F1F5F9] py-24 px-6 md:py-28 overflow-hidden">
        <Sphere />
        <div className="container mx-auto relative z-10 text-center">
          <SplitText
            text="Redefining Financial Integrity. Unstoppable."
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center text-[#c0c9ff] mt-6 sm:mt-10 leading-snug tracking-tight px-4 sm:px-0 max-w-[90vw] sm:max-w-4xl mx-auto"
            delay={20}
            duration={0.5}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-5xl my-20 mx-auto font-light text-[#c0c9ff]">
            Using AI + blockchain to predict and stop financial crime. Our mission: safeguard South Africa’s economy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
           <Link
              href="#join-us"
              className="glass-shimmer-btn"
            >
              Join the Mission
            </Link>

            <Link
              href="#solution"
              className="glass-shimmer-btn"
            >
              Learn More
            </Link>
          </div>
        </div>

        <a
          href="https://wa.me/14155238886?text=join%20satisfied-inside"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-5 bg-[#25D366] hover:bg-[#1ebe57] rounded-full w-14 h-14 flex items-center justify-center z-50 shadow-lg transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl sm:text-3xl" />
        </a>
      </section>
      <ChatBot />
    </>
  )
}
