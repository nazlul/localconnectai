'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setMobileMenuOpen(false)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-gray-950/60 text-white shadow-xl sticky top-0 z-50 border-b border-gray-800 backdrop-blur-sm bg-opacity-80">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center relative">
        <Link
          href="#"
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight"
        >
          LocalConnect AI
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-all duration-300"
        >
          <svg
            className="w-9 h-9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        <ul className="hidden md:flex space-x-10 text-xl font-medium">
          <li><a href="#mission" className="hover:text-cyan-400 transition duration-300">Our Mission</a></li>
          <li><a href="#solution" className="hover:text-cyan-400 transition duration-300">The Solution</a></li>
          <li><a href="#differentiators" className="hover:text-cyan-400 transition duration-300">Why Us</a></li>
          <li><a href="#join-us" className="hover:text-cyan-400 transition duration-300">Join Us</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition duration-300">Contact</a></li>
        </ul>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 shadow-inner md:hidden animate-fade-in">
            <ul className="flex flex-col items-center space-y-5 text-xl py-6">
              <li><a href="#mission" className="block py-2 px-4 hover:text-cyan-400">Our Mission</a></li>
              <li><a href="#solution" className="block py-2 px-4 hover:text-cyan-400">The Solution</a></li>
              <li><a href="#differentiators" className="block py-2 px-4 hover:text-cyan-400">Why Us</a></li>
              <li><a href="#join-us" className="block py-2 px-4 hover:text-cyan-400">Join Us</a></li>
              <li><a href="#contact" className="block py-2 px-4 hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
