'use client'

export default function Solution() {
  return (
    <section
      id="solution"
      className="py-24 px-6 bg-[#162131] text-[#F1F5F9] rounded-2xl shadow-xl animate-fade-in-scale-up my-4 md:mx-4"
    >
      <div className="container mx-auto text-center">
        <h2
          className="text-5xl lg:text-6xl font-bold mb-20 gradient-text bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text animate-fade-in-scale-up"
          style={{ '--animation-delay': '0.4s' } as React.CSSProperties}
        >
          Our Solution: Intelligent, Proactive, Connected AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          <div
            className="bg-gray-800 p-10 rounded-3xl shadow-xl border border-cyan-700 relative overflow-hidden group card-3d-tilt grid-pattern animate-fade-in-scale-up hover:shadow-[0_0_20px_4px_rgba(14,165,233,0.7)] transition-shadow duration-300"
            style={{ '--animation-delay': '0.6s' } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-cyan-900 opacity-0 group-hover:opacity-10 transition duration-300 group-hover-effect"></div>
            <div className="relative z-10 inner-content">
              <div className="text-7xl mb-6 text-cyan-400 text-center icon-bounce-on-hover">🧠</div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-50 text-center">
                Predictive Anomaly Detection
              </h3>
              <p className="text-gray-300 text-center leading-relaxed font-light">
                Move beyond static rules. Our AI learns dynamic, complex
                patterns to identify suspicious activities with far greater
                accuracy and minimal false positives.
              </p>
            </div>
          </div>
          <div
            className="bg-gray-800 p-10 rounded-3xl shadow-xl border border-teal-700 relative overflow-hidden group card-3d-tilt grid-pattern animate-fade-in-scale-up hover:shadow-[0_0_20px_4px_rgba(20,184,166,0.7)] transition-shadow duration-300"
            style={{ '--animation-delay': '0.8s' } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-teal-900 opacity-0 group-hover:opacity-10 transition duration-300 group-hover-effect"></div>
            <div className="relative z-10 inner-content">
              <div className="text-7xl mb-6 text-teal-400 text-center icon-bounce-on-hover">🕸️</div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-50 text-center">
                Network Intelligence (GNNs)
              </h3>
              <p className="text-gray-300 text-center leading-relaxed font-light">
                Uncover hidden criminal organizations and complex illicit
                networks by mapping and analyzing intricate relationships
                between accounts, individuals, and transactions.
              </p>
            </div>
          </div>
          <div
            className="bg-gray-800 p-10 rounded-3xl shadow-xl border border-purple-700 relative overflow-hidden group card-3d-tilt grid-pattern animate-fade-in-scale-up hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.7)] transition-shadow duration-300"
            style={{ '--animation-delay': '1.0s' } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-10 transition duration-300 group-hover-effect"></div>
            <div className="relative z-10 inner-content">
              <div className="text-7xl mb-6 text-purple-400 text-center icon-bounce-on-hover">🔮</div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-50 text-center">
                Proactive Threat Simulation
              </h3>
              <p className="text-gray-300 text-center leading-relaxed font-light">
                Leveraging advanced Generative AI, we simulate novel money
                laundering and fraud typologies to build formidable defenses
                against future threats before they emerge.
              </p>
            </div>
          </div>
          <div
            className="bg-gray-800 p-10 rounded-3xl shadow-xl border border-emerald-700 relative overflow-hidden group card-3d-tilt grid-pattern animate-fade-in-scale-up hover:shadow-[0_0_20px_4px_rgba(5,150,105,0.7)] transition-shadow duration-300"
            style={{ '--animation-delay': '1.2s' } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-emerald-900 opacity-0 group-hover:opacity-10 transition duration-300 group-hover-effect"></div>
            <div className="relative z-10 inner-content">
              <div className="text-7xl mb-6 text-emerald-400 text-center icon-bounce-on-hover">💡</div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-50 text-center">
                Explainable AI (XAI)
              </h3>
              <p className="text-gray-300 text-center leading-relaxed font-light">
                Our AI doesn&apos;t just flag anomalies; it provides crystal-clear,
                human-readable explanations, empowering analysts to make
                faster, more informed decisions and generate fully compliant
                reports.
              </p>
            </div>
          </div>
          <div
            className="bg-gray-800 p-10 rounded-3xl shadow-xl border border-blue-700 relative overflow-hidden group card-3d-tilt grid-pattern animate-fade-in-scale-up hover:shadow-[0_0_20px_4px_rgba(37,99,235,0.7)] transition-shadow duration-300"
            style={{ '--animation-delay': '1.4s' } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 transition duration-300 group-hover-effect"></div>
            <div className="relative z-10 inner-content">
              <div className="text-7xl mb-6 text-blue-400 text-center icon-bounce-on-hover">🤝</div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-50 text-center">
                Privacy-Preserving Collaboration
              </h3>
              <p className="text-gray-300 text-center leading-relaxed font-light">
                Pioneering a secure Distributed Ledger Technology (DLT) layer
                for anonymized, immutable information sharing, fostering
                collective intelligence across institutions without compromising
                sensitive data.
              </p>
            </div>
          </div>
          <div
            className="bg-gray-800 p-10 rounded-3xl shadow-xl border border-pink-700 relative overflow-hidden group card-3d-tilt grid-pattern animate-fade-in-scale-up hover:shadow-[0_0_20px_4px_rgba(219,39,119,0.7)] transition-shadow duration-300"
            style={{ '--animation-delay': '1.6s' } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-pink-900 opacity-0 group-hover:opacity-10 transition duration-300 group-hover-effect"></div>
            <div className="relative z-10 inner-content">
              <div className="text-7xl mb-6 text-pink-400 text-center icon-bounce-on-hover">🎮</div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-50 text-center">
                Gamified Compliance
              </h3>
              <p className="text-gray-300 text-center leading-relaxed font-light">
                Transforming tedious compliance into an intuitive and rewarding
                experience through engaging interfaces, challenges, and
                &apos;Anomaly Hunter&apos; gamification elements, attracting top analytical
                talent.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
          Business Analytics Dashboard
        </h3>
        <img
          src="/dash.jpg"
          alt="Business Analytics Dashboard"
          className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl object-cover"
        />
      </div>
    </section>
  )
}
