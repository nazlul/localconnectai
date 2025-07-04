'use client'

export default function WhyUs() {
  return (
    <section
      id="differentiators"
      className="py-24 px-6 bg-[#0d1f3d] text-[#F1F5F9] rounded-2xl shadow-xl animate-fade-in-scale-up my-4 md:mx-4"
    >
      <div className="text-center mb-16">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent animate-fade-in-scale-up"
          style={{ '--animation-delay': '0.6s' } as React.CSSProperties}
        >
          What Makes Us Untouchable
        </h2>
      </div>

      <div
        className="flex justify-center items-center mb-16 animate-fade-in-scale-up"
        style={{ '--animation-delay': '0.8s' } as React.CSSProperties}
      >
        <div className="relative w-full max-w-5xl h-32 sm:h-36 md:h-40 rounded-2xl overflow-hidden hover:shadow-[0_0_25px_5px_rgba(167,139,250,0.7)] transform hover:scale-103 transition duration-300 z-10 bg-gray-900 flex items-center justify-center px-6 sm:px-10">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 text-center leading-snug">
            LocalConnect AI Intelligence
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg animate-slide-in-left"
            style={{ '--animation-delay': `${0.8 + index * 0.2}s` } as React.CSSProperties}
          >
            <div className="flex items-start space-x-4">
              <div className={`text-4xl ${feature.color}`}>{feature.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-base font-light leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const features = [
  {
    icon: '🛡️',
    color: 'text-cyan-400',
    title: 'Proactive Defense',
    description:
      'We don\'t just react; our advanced Generative AI enables us to anticipate and simulate emerging threats before they materialize, building future-proof security.',
  },
  {
    icon: '👓',
    color: 'text-teal-400',
    title: 'Explainability First (XAI)',
    description:
      'Our AI provides transparent, auditable reasons for its decisions, fostering deep trust and streamlining regulatory compliance for every team member.',
  },
  {
    icon: '🧬',
    color: 'text-purple-400',
    title: 'Network-Centric Intelligence',
    description:
      'Utilizing powerful GNNs, we uncover sophisticated, hidden criminal networks that easily bypass traditional, fragmented detection methods.',
  },
  {
    icon: '📍',
    color: 'text-emerald-400',
    title: 'South African Context & Compliance',
    description:
      'Our deep understanding of FICA, POPIA, and local typologies ensures our solution is hyper-relevant, fully compliant, and uniquely effective for the region.',
  },
  {
    icon: '🤝',
    color: 'text-blue-400',
    title: 'Privacy-Preserving Collaboration',
    description:
      'Our DLT-powered collective intelligence platform enables secure, anonymized information sharing among institutions, fostering unprecedented collaborative defense.',
  },
  {
    icon: '🎮',
    color: 'text-pink-400',
    title: 'Engaging User Experience',
    description:
      'We\'re transforming tedious compliance tasks into an intuitive and even rewarding experience, designed to attract, empower, and retain top analytical talent.',
  },
]
