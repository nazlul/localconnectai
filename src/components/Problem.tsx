'use client'

import { useState } from 'react'
import React from 'react'


type Card = {
  icon: string
  title: string
  description1: string
  description2: string
  color: string
  glow: string
}

const cards: Card[] = [
  {
    icon: '💸',
    title: 'Billions Lost Annually',
    description1:
      'Financial crime, fraud, and illicit flows continue to drain the economy, impacting businesses and citizens alike, hindering national growth and development.',
    description2:
      'Global financial crime results in annual losses exceeding trillions, impacting both public and private sectors. Businesses face growing costs for compliance and recovery, while citizens suffer economic and social consequences. These losses are further compounded by underreporting and inefficient systems struggling to keep up with emerging fraud techniques.',
    color: 'border-red-700',
    glow: 'hover:shadow-[0_0_20px_4px_rgba(220,38,38,0.7)]'
  },
  {
    icon: '⚠️',
    title: 'FATF Greylisting Burden',
    description1:
      "South Africa's greylisting pressures financial institutions to urgently enhance their AML/CTF capabilities, demanding robust and sophisticated solutions.",
    description2:
      'Being greylisted by the Financial Action Task Force brings reputational risks, increased scrutiny, and global financial constraints. South African banks and institutions now face elevated compliance demands, slowing international transactions and increasing operating overheads until advanced monitoring and intelligence frameworks are adopted.',
    color: 'border-yellow-700',
    glow: 'hover:shadow-[0_0_20px_4px_rgba(202,138,4,0.7)]'
  },
  {
    icon: '👻',
    title: 'Evolving Criminal Sophistication',
    description1:
      'Criminal networks adapt faster than traditional rule-based systems, leading to persistent missed threats and the rapid emergence of new, complex typologies.',
    description2:
      'Cybercriminals now leverage AI, blockchain, and cross-border laundering to evade detection. Traditional defenses are reactive and slow, relying on outdated typologies. Without proactive AI-driven systems, institutions remain vulnerable to highly adaptive fraud rings, insider threats, and money-laundering networks that continuously change patterns.',
    color: 'border-purple-700',
    glow: 'hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.7)]'
  }
]

function FadeSlideUp({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)

 React.useEffect(() => {
  const el = ref.current
  if (!el) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(el)
      }
    },
    {
      rootMargin: '0px 0px 50% 0px', 
      threshold: 0,
    }
  )

  observer.observe(el)
  return () => observer.disconnect()
}, [])


  return (
    <div
      ref={ref}
      className={`${className} ${
        visible ? 'animate-fade-slide-up' : 'opacity-0 translate-y-8'
      }`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '0.2s',
        animationFillMode: 'both',
        animationTimingFunction: 'ease-out',
      }}
    >
      {children}
    </div>
  )
}


export default function Problem() {
  const [activeCard, setActiveCard] = useState<Card | null>(null)

  return (
    <section
      id="problem"
      className="relative py-24 px-6 text-[#F1F5F9] rounded-2xl overflow-hidden shadow-2xl my-4 md:mx-4 glass-bg"
    >
      <div className="container mx-auto relative">
        <FadeSlideUp
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-20 text-[#ffca88]"
          delay={0.1}
        >
          The Problem: Traditional Defenses Are Falling
        </FadeSlideUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-10">
          {cards.map((card, i) => (
            <FadeSlideUp key={i} delay={0.1 + i * 0.2}>
              <div
                onClick={() => setActiveCard(card)}
                className={`bg-gray-900/70 p-8 sm:p-10 rounded-3xl shadow-xl border ${card.color} relative overflow-x-hidden group transition-shadow duration-300 cursor-pointer ${card.glow}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-300" />
                <div className="relative z-10 h-[320px] flex flex-col justify-center">
                  <div className="text-6xl sm:text-7xl mb-6 text-center">{card.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-50 text-center">{card.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed font-light text-base sm:text-lg">{card.description1}</p>
                </div>
              </div>
            </FadeSlideUp>
          ))}
        </div>
      </div>

      {activeCard && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setActiveCard(null)}
        >
          <div
            className="bg-gray-900 p-10 rounded-3xl max-w-3xl w-full mx-6 relative border-l-4 border-red-500 text-left"
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
