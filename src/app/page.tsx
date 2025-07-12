'use client'

import dynamic from 'next/dynamic'
import LazySection from '@/components/LazySection'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Mission = dynamic(() => import('@/components/Mission'))
const Problem = dynamic(() => import('@/components/Problem'))
const Solution = dynamic(() => import('@/components/Solution'))
const WhyUs = dynamic(() => import('@/components/WhyUs'))
const Join = dynamic(() => import('@/components/Join'))
const Contact = dynamic(() => import('@/components/Contact'))

export default function HomePage() {
  return (
    <div className="bg-animated-gradient bg-pattern min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <svg className="w-full h-full opacity-5">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0 L0 0 0 60" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 flex justify-center">
        <Navbar />
        <div className="w-full max-w-[1440px] overflow-hidden">
          <Hero />
          <LazySection><Mission /></LazySection>
          <LazySection><Problem /></LazySection>
          <LazySection><Solution /></LazySection>
          <LazySection><WhyUs /></LazySection>
          <LazySection><Join /></LazySection>
          <LazySection><Contact /></LazySection>
        </div>
      </div>
      <Footer />
    </div>
  )
}
