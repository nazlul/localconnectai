'use client'

import { useState, useRef, useEffect } from 'react'

type Card = {
  icon: string
  title: string
  description1: string
  description2: string
  color: string
  ring: string
  shadow: string
}

const cards: Card[] = [
  {
    icon: '🧠',
    title: 'Predictive Anomaly Detection',
    description1: 'Our AI learns complex patterns to detect suspicious activities with high accuracy.',
    description2:
      'Using deep learning, our AI continuously adapts to evolving criminal behavior by analyzing transaction metadata, velocity patterns, and behavioral biometrics...',
    color: 'border-cyan-500',
    ring: 'hover:ring-cyan-400',
    shadow: 'hover:shadow-cyan-500/40',
  },
  {
    icon: '🕸️',
    title: 'Network Intelligence (GNNs)',
    description1: 'Uncover hidden criminal structures by analyzing complex networks.',
    description2:
      'Graph Neural Networks model transactional ecosystems as interconnected graphs...',
    color: 'border-teal-500',
    ring: 'hover:ring-teal-400',
    shadow: 'hover:shadow-teal-500/40',
  },
  {
    icon: '🔮',
    title: 'Proactive Threat Simulation',
    description1: 'Simulate evolving fraud and laundering techniques before they hit.',
    description2:
      'Generative AI models create synthetic threats based on emerging typologies...',
    color: 'border-purple-500',
    ring: 'hover:ring-purple-400',
    shadow: 'hover:shadow-purple-500/40',
  },
  {
    icon: '💡',
    title: 'Explainable AI (XAI)',
    description1: 'Get clear, human-readable explanations for every flagged anomaly.',
    description2:
      'Our XAI modules convert raw model predictions into readable justifications...',
    color: 'border-emerald-500',
    ring: 'hover:ring-emerald-400',
    shadow: 'hover:shadow-emerald-500/40',
  },
  {
    icon: '🤝',
    title: 'Privacy-Preserving Collaboration',
    description1: 'Enable secure collaboration without exposing private data.',
    description2:
      'Our blockchain-backed zero-knowledge layer enables multiple institutions to share signals...',
    color: 'border-blue-500',
    ring: 'hover:ring-blue-400',
    shadow: 'hover:shadow-blue-500/40',
  },
  {
    icon: '🎮',
    title: 'Gamified Compliance',
    description1: 'Make compliance intuitive, rewarding, and engaging.',
    description2:
      'Our platform introduces gamification into analyst workflows...',
    color: 'border-pink-500',
    ring: 'hover:ring-pink-400',
    shadow: 'hover:shadow-pink-500/40',
  },
]

export default function Solution() {
  const [activeCard, setActiveCard] = useState<Card | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  useEffect(() => {
    if (!isMobile || !videoRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {})
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [isMobile])

  const handleMouseEnter = () => {
    if (!isMobile) videoRef.current?.play().catch(() => {})
  }

  const handleMouseLeave = () => {
    if (!isMobile) videoRef.current?.pause()
  }

 return (
    <>
      <section
        id="solution"
        className="relative py-24 px-6 text-[#b8b8b8] rounded-2xl shadow-xl my-4 md:mx-4 glass-bg"
      >
        <div className="container mx-auto text-center relative z-10">
          <h2
            className="text-5xl lg:text-6xl font-bold mb-20 text-[#a2b0ff] animate-fade-slide-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' } as React.CSSProperties}
          >
            Our Solution: Intelligent, Proactive, Connected AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {cards.map((card, i) => (
              <div
                key={i}
                onClick={() => setActiveCard(card)}
                className={`bg-gray-800/70 p-10 rounded-3xl border-2 ${card.color} ${card.ring} ${card.shadow} transition-all duration-300 shadow-xl hover:shadow-2xl hover:ring-1 cursor-pointer animate-fade-slide-up`}
                style={{ animationDelay: `${0.2 + i * 0.15}s`, animationFillMode: 'both' } as React.CSSProperties}
              >
                <div className="text-7xl mb-6 text-center">{card.icon}</div>
                <h3 className="text-3xl font-semibold mb-4 text-gray-50 text-center">{card.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed font-light">{card.description1}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
              Business Analytics Dashboard
            </h3>
            <video
              src="/dash.mp4"
              title="Business Analytics Dashboard"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl object-cover"
              muted
              playsInline
              preload="metadata"
              ref={videoRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </section>

      {activeCard && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]"
          onClick={() => setActiveCard(null)}
        >
          <div
            className="bg-gray-900 p-10 rounded-3xl max-w-3xl w-full mx-6 relative border-l-4 border-cyan-500 text-left overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-5 text-white text-3xl hover:text-red-400 transition"
            >
              &times;
            </button>
            <div className="text-5xl mb-6">{activeCard.icon}</div>
            <h3 className="text-3xl font-bold mb-6 text-white">{activeCard.title}</h3>
            <p className="text-gray-300 text-md leading-relaxed">{activeCard.description2}</p>
          </div>
        </div>
      )}
    </>
  )
}
