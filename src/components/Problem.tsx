'use client'

export default function Problem() {
  return (
    <section
      id="problem"
      className="py-24 px-6 bg-[#0d1f3d] text-[#F1F5F9] rounded-2xl shadow-xl animate-fade-in-scale-up my-4 md:mx-4"
    >
      <div className="container mx-auto">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-20 gradient-text bg-gradient-to-r from-red-400 to-orange-500 text-transparent bg-clip-text animate-fade-in-scale-up"
          style={{ '--animation-delay': '0.2s' } as React.CSSProperties}
        >
          The Problem: Traditional Defenses Are Falling
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          <div
            className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-red-700 relative hover:shadow-[0_0_20px_4px_rgba(220,38,38,0.7)] transition-shadow duration-300 overflow-hidden group card-3d-tilt grid-pattern animate-fade-in-scale-up"
            style={{ '--animation-delay': '0.4s' } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-10 transition duration-300 group-hover-effect"></div>
            <div className="relative z-10 inner-content">
              <div className="text-6xl sm:text-7xl mb-6 text-red-400 text-center icon-bounce-on-hover">💸</div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-50 text-center">
                Billions Lost Annually
              </h3>
              <p className="text-gray-300 text-center leading-relaxed font-light text-base sm:text-lg">
                Financial crime, fraud, and illicit flows continue to drain the economy, impacting businesses and citizens alike, hindering national growth and development.
              </p>
            </div>
          </div>

          <div
            className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-yellow-700 hover:shadow-[0_0_20px_4px_rgba(202,138,4,0.7)] relative overflow-hidden group card-3d-tilt grid-pattern animate-fade-in-scale-up transition-shadow duration-300"
            style={{ '--animation-delay': '0.6s' } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-yellow-800 opacity-0 group-hover:opacity-10 transition duration-300 group-hover-effect"></div>
            <div className="relative z-10 inner-content">
              <div className="text-6xl sm:text-7xl mb-6 text-yellow-400 text-center icon-bounce-on-hover">⚠️</div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-50 text-center">
                FATF Greylisting Burden
              </h3>
              <p className="text-gray-300 text-center leading-relaxed font-light text-base sm:text-lg">
                South Africa&apos;s greylisting pressures financial institutions to urgently enhance their AML/CTF capabilities, demanding robust and sophisticated solutions.
              </p>
            </div>
          </div>

          <div
            className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-purple-700 hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.7)] relative overflow-hidden group card-3d-tilt grid-pattern animate-fade-in-scale-up transition-shadow duration-300"
            style={{ '--animation-delay': '0.8s' } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-purple-800 opacity-0 group-hover:opacity-10 transition duration-300 group-hover-effect"></div>
            <div className="relative z-10 inner-content">
              <div className="text-6xl sm:text-7xl mb-6 text-purple-400 text-center icon-bounce-on-hover">👻</div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-50 text-center">
                Evolving Criminal Sophistication
              </h3>
              <p className="text-gray-300 text-center leading-relaxed font-light text-base sm:text-lg">
                Criminal networks adapt faster than traditional rule-based systems, leading to persistent missed threats and the rapid emergence of new, complex typologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
