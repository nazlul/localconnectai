'use client'

import { useState } from 'react'

type Feature = {
  icon: string
  color: string
  title: string
  description1: string
  description2: string
}

const features: Feature[] = [
  {
    icon: '🛡️',
    color: 'text-cyan-400',
    title: 'Proactive Defense',
    description1:
      "We don't just react; our advanced Generative AI enables us to anticipate and simulate emerging threats before they materialize, building future-proof security.",
    description2:
      'By constantly modeling new criminal typologies and training on synthetic adversarial data, we ensure your defenses are always a step ahead — not just in response, but in strategic foresight. This creates a defensive posture that adapts dynamically, minimizing vulnerabilities as fraudsters evolve their techniques.'
  },
  {
    icon: '👓',
    color: 'text-teal-400',
    title: 'Explainability First (XAI)',
    description1:
      'Our AI provides transparent, auditable reasons for its decisions, fostering deep trust and streamlining regulatory compliance for every team member.',
    description2:
      'Each decision made by the AI is paired with clear visual and textual explanations, so teams can understand and trust every alert. This transparency is crucial for audits, investigations, and internal accountability — drastically reducing investigation time and boosting regulatory approval rates.'
  },
  {
    icon: '🧬',
    color: 'text-purple-400',
    title: 'Network-Centric Intelligence',
    description1:
      'Utilizing powerful GNNs, we uncover sophisticated, hidden criminal networks that easily bypass traditional, fragmented detection methods.',
    description2:
      'Our system focuses on how entities interact rather than isolated behavior. By mapping relationships using graph intelligence, we detect coordination, layering, and complex patterns that static models miss. The result: a real-time map of threats forming behind the scenes.'
  },
  {
    icon: '📍',
    color: 'text-emerald-400',
    title: 'South African Context & Compliance',
    description1:
      'Our deep understanding of FICA, POPIA, and local typologies ensures our solution is hyper-relevant, fully compliant, and uniquely effective for the region.',
    description2:
      'From transaction types to jurisdiction-specific behavior patterns, we embed local compliance directly into the intelligence layer. We integrate seamlessly with SARs, STRs, and SARB reporting standards, ensuring smooth operations and peace of mind for local institutions.'
  },
  {
    icon: '🤝',
    color: 'text-blue-400',
    title: 'Privacy-Preserving Collaboration',
    description1:
      'Our DLT-powered collective intelligence platform enables secure, anonymized information sharing among institutions, fostering unprecedented collaborative defense.',
    description2:
      'We use a zero-knowledge design that allows institutions to share alerts, threat scores, and behavioral patterns in real-time — without revealing underlying data. This approach builds an ecosystem of shared defense without legal or reputational risk.'
  },
  {
    icon: '🎮',
    color: 'text-pink-400',
    title: 'Engaging User Experience',
    description1:
      "We're transforming tedious compliance tasks into an intuitive and even rewarding experience, designed to attract, empower, and retain top analytical talent.",
    description2:
      'By introducing missions, challenges, and gamified progress tracking, we reduce burnout and build positive user habits. Analysts stay motivated, consistent, and faster in decision-making, increasing overall productivity and engagement.'
  }
]

export default function WhyUs() {
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null)

  return (
    <section
      id="why-us"
      className="relative py-24 px-6 text-[#F1F5F9] rounded-2xl shadow-xl animate-fade-in-scale-up my-4 md:mx-4 overflow-hidden"
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
      <div
        className="text-center mb-16 animate-fade-slide-up"
        style={{ animationDelay: '0.1s', animationFillMode: 'both' } as React.CSSProperties}
      >
        <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          What Makes Us Untouchable
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
        {features.map((f, i) => (
          <div
            key={i}
            onClick={() => setActiveFeature(f)}
            className="bg-gray-900/70 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.15)] cursor-pointer transition duration-300 animate-fade-slide-up"
            style={{ animationDelay: `${0.2 + i * 0.15}s`, animationFillMode: 'both' } as React.CSSProperties}
          >
            <div className="flex items-start space-x-4">
              <div className={`text-4xl ${f.color}`}>{f.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-300 text-base font-light leading-relaxed">{f.description1}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {activeFeature && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setActiveFeature(null)}
        >
          <div
            className="bg-gray-900 p-10 rounded-3xl max-w-3xl w-full mx-6 relative text-left border-l-4 border-orange-500"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveFeature(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <div className="text-6xl mb-6">{activeFeature.icon}</div>
            <h3 className="text-4xl font-bold mb-4 text-white">{activeFeature.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{activeFeature.description2}</p>
          </div>
        </div>
      )}
    </section>
  )
}
