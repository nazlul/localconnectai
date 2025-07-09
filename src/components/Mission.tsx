'use client'

import { useEffect, useRef, useState } from 'react'

export default function Mission() {
  const ref = useRef(null)
  const [showAnim, setShowAnim] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShowAnim(true),
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="mission"
      ref={ref}
      className="relative overflow-hidden py-24 px-6 text-[#b8b8b8] rounded-2xl shadow-xl my-4 md:mx-4"
    >
      <div className="relative container mx-auto text-center">
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text transition-opacity ${
            showAnim ? 'animate-fade-slide-up' : 'opacity-0 translate-y-8'
          }`}
          style={showAnim ? { animationFillMode: 'forwards' } : undefined}
        >
          Our Mission: A Resilient Financial Future
        </h2>
        <p
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto leading-relaxed font-light transition-opacity ${
            showAnim ? 'animate-fade-slide-up delay-150' : 'opacity-0 translate-y-8'
          }`}
          style={showAnim ? { animationFillMode: 'forwards', animationDelay: '0.15s' } : undefined}
        >
          South Africa is under siege by escalating financial crime, costing billions and impacting our global standing. At LocalConnect AI, our unwavering mission is to fundamentally transform how financial crime is fought. We aim to move beyond reactive measures, building an intelligent, proactive, and interconnected ecosystem that safeguards our nation&apos;s financial integrity, empowers institutions, and fosters a legacy of trust and prosperity.
        </p>
      </div>
    </section>
  )
}
