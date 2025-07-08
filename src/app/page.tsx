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
    <>
      <Navbar />
      <Hero />
      <LazySection><Mission /></LazySection>
      <LazySection><Problem /></LazySection>
      <LazySection><Solution /></LazySection>
      <LazySection><WhyUs /></LazySection>
      <LazySection><Join /></LazySection>
      <LazySection><Contact /></LazySection>
      <Footer />
    </>
  )
}
