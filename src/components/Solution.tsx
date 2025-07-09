'use client'

import { useState, useRef } from 'react'

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
      'Using deep learning, our AI continuously adapts to evolving criminal behavior by analyzing transaction metadata, velocity patterns, and behavioral biometrics. This system reduces false positives while catching nuanced fraud attempts previously missed by rule-based systems. Institutions benefit from higher detection rates and improved compliance workflows.',
    color: 'border-cyan-500',
    ring: 'hover:ring-cyan-400',
    shadow: 'hover:shadow-cyan-500/40',
  },
  {
    icon: '🕸️',
    title: 'Network Intelligence (GNNs)',
    description1: 'Uncover hidden criminal structures by analyzing complex networks.',
    description2:
      'Graph Neural Networks model transactional ecosystems as interconnected graphs, revealing links between shell accounts, mules, and laundering rings. Our engine visualizes these connections with risk weights and propagates intelligence across nodes, identifying fraud rings before they act. This capability is essential in targeting coordinated, large-scale financial crime.',
    color: 'border-teal-500',
    ring: 'hover:ring-teal-400',
    shadow: 'hover:shadow-teal-500/40',
  },
  {
    icon: '🔮',
    title: 'Proactive Threat Simulation',
    description1: 'Simulate evolving fraud and laundering techniques before they hit.',
    description2:
      'Generative AI models create synthetic threats based on emerging typologies, simulating next-gen attack vectors including AI-assisted laundering and cross-chain obfuscation. This proactive defense framework trains your team and systems against unseen threats, giving your institution a strategic head start against sophisticated adversaries.',
    color: 'border-purple-500',
    ring: 'hover:ring-purple-400',
    shadow: 'hover:shadow-purple-500/40',
  },
  {
    icon: '💡',
    title: 'Explainable AI (XAI)',
    description1: 'Get clear, human-readable explanations for every flagged anomaly.',
    description2:
      'Our XAI modules convert raw model predictions into readable justifications using natural language, graphs, and scoring metrics. Analysts can instantly understand “why” an alert was raised—ensuring trust, speed, and full auditability in high-stakes environments like KYC, AML, and regulatory reporting.',
    color: 'border-emerald-500',
    ring: 'hover:ring-emerald-400',
    shadow: 'hover:shadow-emerald-500/40',
  },
  {
    icon: '🤝',
    title: 'Privacy-Preserving Collaboration',
    description1: 'Enable secure collaboration without exposing private data.',
    description2:
      'Our blockchain-backed zero-knowledge layer enables multiple institutions to share signals, flags, and behavior patterns anonymously and immutably. Threats that cross borders or entities can now be tackled collectively, with no risk of data leaks or privacy violations.',
    color: 'border-blue-500',
    ring: 'hover:ring-blue-400',
    shadow: 'hover:shadow-blue-500/40',
  },
  {
    icon: '🎮',
    title: 'Gamified Compliance',
    description1: 'Make compliance intuitive, rewarding, and engaging.',
    description2:
      'Our platform introduces gamification into analyst workflows through point-based systems, progress bars, live leaderboards, and achievement badges. Designed to reduce fatigue and enhance performance, it transforms compliance from a checkbox task into an engaging and motivating challenge.',
    color: 'border-pink-500',
    ring: 'hover:ring-pink-400',
    shadow: 'hover:shadow-pink-500/40',
  },
]

export default function Solution() {
  const [activeCard, setActiveCard] = useState<Card | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section
      id="solution"
      className="relative py-24 px-6 text-[#b8b8b8] rounded-2xl shadow-xl my-4 md:mx-4 overflow-hidden"
    >
      <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          src="/bg-5.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      <div className="container mx-auto text-center relative z-10">
        <h2
          className="text-5xl lg:text-6xl font-bold mb-20 bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text animate-fade-slide-up"
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
            className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl object-cover cursor-pointer"
            muted
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => videoRef.current?.pause()}
            ref={videoRef}
            preload="metadata"
            playsInline
          />
        </div>
      </div>

      {activeCard && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setActiveCard(null)}
        >
          <div
            className="bg-gray-900 p-10 rounded-3xl max-w-3xl w-full mx-6 relative border-l-4 border-cyan-500 text-left"
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
    </section>
  )
}
