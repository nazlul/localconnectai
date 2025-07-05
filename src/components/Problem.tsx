'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type ProblemCard = {
  icon: string
  title: string
  short: string
  long: string
  color: string
  glow: string
}

const cards: ProblemCard[] = [
  {
    icon: '💸',
    title: 'Billions Lost Annually',
    short:
      'Financial crime, fraud, and illicit flows continue to drain the economy, impacting businesses and citizens alike, hindering national growth and development.',
    long:
      'Global financial crime results in annual losses exceeding trillions, impacting both public and private sectors. Businesses face growing costs for compliance and recovery, while citizens suffer economic and social consequences. These losses are further compounded by underreporting and inefficient systems struggling to keep up with emerging fraud techniques.',
    color: 'border-red-700',
    glow: 'hover:shadow-[0_0_20px_4px_rgba(220,38,38,0.7)]'
  },
  {
    icon: '⚠️',
    title: 'FATF Greylisting Burden',
    short:
      "South Africa's greylisting pressures financial institutions to urgently enhance their AML/CTF capabilities, demanding robust and sophisticated solutions.",
    long:
      'Being greylisted by the Financial Action Task Force brings reputational risks, increased scrutiny, and global financial constraints. South African banks and institutions now face elevated compliance demands, slowing international transactions and increasing operating overheads until advanced monitoring and intelligence frameworks are adopted.',
    color: 'border-yellow-700',
    glow: 'hover:shadow-[0_0_20px_4px_rgba(202,138,4,0.7)]'
  },
  {
    icon: '👻',
    title: 'Evolving Criminal Sophistication',
    short:
      'Criminal networks adapt faster than traditional rule-based systems, leading to persistent missed threats and the rapid emergence of new, complex typologies.',
    long:
      'Cybercriminals now leverage AI, blockchain, and cross-border laundering to evade detection. Traditional defenses are reactive and slow, relying on outdated typologies. Without proactive AI-driven systems, institutions remain vulnerable to highly adaptive fraud rings, insider threats, and money-laundering networks that continuously change patterns.',
    color: 'border-purple-700',
    glow: 'hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.7)]'
  }
]

const variants = {
  left: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  },
  middle: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  }
}

export default function Problem() {
  const [activeCard, setActiveCard] = useState<ProblemCard | null>(null)

  return (
    <section
      id="problem"
      className="py-24 px-6 bg-[#0d1f3d] text-[#F1F5F9] rounded-2xl shadow-xl my-4 md:mx-4"
    >
      <div className="container mx-auto">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-20 gradient-text bg-gradient-to-r from-red-400 to-orange-500 text-transparent bg-clip-text"
          style={{ '--animation-delay': '0.2s' } as React.CSSProperties}
        >
          The Problem: Traditional Defenses Are Falling
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {cards.map((card, index) => {
            let variantName: 'left' | 'middle' | 'right' = 'middle'
            if (index === 0) variantName = 'left'
            else if (index === 2) variantName = 'right'

            return (
              <motion.div
                key={index}
                onClick={() => setActiveCard(card)}
                variants={variants[variantName]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.2 }}
                className={`bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border ${card.color} relative overflow-hidden group transition-shadow duration-300 cursor-pointer ${card.glow}`}
                style={{ [`--animation-delay`]: `${0.4 + index * 0.2}s` } as React.CSSProperties}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-300" />
                <div className="relative z-10">
                  <div className="text-6xl sm:text-7xl mb-6 text-center">{card.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-50 text-center">{card.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed font-light text-base sm:text-lg">
                    {card.short}
                  </p>
                </div>
              </motion.div>
            )
          })}
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
            <div className="text-6xl mb-6">{activeCard.icon}</div>
            <h3 className="text-4xl font-bold mb-6 text-white">{activeCard.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{activeCard.long}</p>
          </div>
        </div>
      )}
    </section>
  )
}
