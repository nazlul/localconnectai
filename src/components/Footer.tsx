'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faXTwitter,
  faLinkedinIn,
  faTelegramPlane,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-20 px-6 text-center rounded-t-3xl shadow-inner border-t border-gray-800 relative">
      <div className="container mx-auto flex flex-col items-center mt-25">
      <a
        href="#"
        className="absolute top-4 mt-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center group"
        aria-label="Back to top"
      >
        <div className="bg-cyan-400 group-hover:bg-cyan-600 text-[#000e4c] w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition text-2xl">
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
        <div className="mt-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-[#000e4c] px-4 py-1 rounded-full text-sm font-medium shadow transition">
          Back to Top
        </div>
      </a>

        <div className="flex items-center space-x-4 mb-6">
          <div className="h-13 w-auto flex items-center">
            <Image
              src="/logo.png"
              alt="LocalConnect AI Logo"
              width={60}
              height={60}
              className="object-contain h-full w-auto"
            />
          </div>
          <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            LocalConnect AI
          </span>
        </div>

        <p className="mb-8 text-base sm:text-xl font-light max-w-4xl mx-auto">
          Dedicated to building a future of unwavering financial integrity in South Africa through relentless AI innovation, secure methodologies, and a commitment to societal impact.
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-base sm:text-xl mb-8">
          <a href="/PP.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            Privacy Policy
          </a>
          <a href="/TOS.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            Terms of Service
          </a>
        </div>

        <div className="flex justify-center gap-10 mb-8 text-2xl sm:text-3xl text-gray-400">
          <a href="https://x.com/LocalConnectAi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="X">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100083309412412" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/company/localconnect-ai/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.t.me/LocalConnectAI_Official" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="Telegram">
            <FontAwesomeIcon icon={faTelegramPlane} />
          </a>
          <a href="https://www.instagram.com/localconnect_ai/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/@localconnectai/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="Youtube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        <p className="text-sm sm:text-lg">
          &copy; {new Date().getFullYear()} LocalConnect AI. All rights reserved. Built with passion in South Africa.
        </p>

        <div className="relative w-[300px] h-[100px]">
          <Image src="/sars.png" alt="SARS Logo" fill style={{ objectFit: 'contain' }} priority />
        </div>
      </div>
    </footer>
  )
}
