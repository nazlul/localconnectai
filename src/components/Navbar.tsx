'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setMobileMenuOpen(false)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="bg-gray-950/60 text-white shadow-xl sticky top-0 z[999] border-b border-gray-800 backdrop-blur-sm bg-opacity-80">
      <nav className="container mx-auto px-6 py-5 relative">
        <div className="flex justify-between items-center w-full">
          <Link href="#" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="LocalConnect AI Logo"
              width={40}
              height={40}
              className="object-contain h-10 w-auto"
            />
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight whitespace-nowrap">
              LocalConnect AI
            </span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-all duration-300"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>

          <ul className="hidden lg:flex space-x-10 text-lg font-medium">
            <li><a href="#mission" className="hover:text-cyan-400 transition">Our Mission</a></li>
            <li><a href="#solution" className="hover:text-cyan-400 transition">The Solution</a></li>
            <li><a href="#differentiators" className="hover:text-cyan-400 transition">Why Us</a></li>
            <li><a href="#join-us" className="hover:text-cyan-400 transition">Join Us</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 shadow-inner rounded-b-xl transition-all duration-300 overflow-x-hidden ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 text-lg py-6 transition-opacity duration-300">
            <li><a onClick={closeMenu} href="#mission" className="hover:text-cyan-400">Our Mission</a></li>
            <li><a onClick={closeMenu} href="#solution" className="hover:text-cyan-400">The Solution</a></li>
            <li><a onClick={closeMenu} href="#differentiators" className="hover:text-cyan-400">Why Us</a></li>
            <li><a onClick={closeMenu} href="#join-us" className="hover:text-cyan-400">Join Us</a></li>
            <li><a onClick={closeMenu} href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
