'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

type Role = {
  title: string
  icon: string
  color: string
  bg: string
  glow: string
  description: string
  detail: string
}

const roles: Role[] = [
  {
    title: 'AML/Compliance Expert',
    icon: '⚖️',
    color: 'border-cyan-400',
    bg: 'bg-cyan-400/5',
    glow: '0 0 40px rgba(34,211,238,0.4)',
    description:
      'Deep FICA knowledge and a passion for ethical AI to uphold the highest legal and compliance standards.',
    detail:
      'You will architect our compliance AI logic, ensure alignment with FICA and POPIA, and collaborate with regulators and stakeholders. Your insight ensures our models are not just powerful, but accountable and auditable in every deployment.',
  },
  {
    title: 'Data Engineer/Architect',
    icon: '💾',
    color: 'border-teal-400',
    bg: 'bg-teal-950/20',
    glow: '0 0 40px rgba(20,184,166,0.4)',
    description:
      'A master of scalable pipelines and real-time distributed systems to handle massive financial data.',
    detail:
      'You’ll design fault-tolerant, scalable ingestion pipelines and architect the data infrastructure that fuels our AI. You’ll work across Kafka, Snowflake, ClickHouse, and streaming systems to build a world-class data backbone.',
  },
  {
    title: 'AI/ML Virtuoso',
    icon: '🧠',
    color: 'border-purple-400',
    bg: 'bg-purple-950/20',
    glow: '0 0 40px rgba(192,132,252,0.4)',
    description:
      'Expert in GNNs, XAI, and Generative AI to build models that not only predict but explain and adapt.',
    detail:
      'You will build models using GNNs, Transformers, and explainable AI layers. From fraud detection to anomaly simulation, your models will learn, adapt, and clarify their own reasoning for human auditors.',
  },
  {
    title: 'Growth/Impact Evangelist',
    icon: '📈',
    color: 'border-pink-400',
    bg: 'bg-pink-950/20',
    glow: '0 0 40px rgba(244,114,182,0.4)',
    description:
      'A visionary communicator to lead partnerships, adoption, and maximize impact across the continent.',
    detail:
      'You will shape our narrative, forge partnerships with banks, regulators, and media, and drive adoption. From thought leadership to commercial deals, you’ll put LocalConnect AI on the fintech map.',
  },
]

export default function Join() {
  const [activeRole, setActiveRole] = useState<Role | null>(null)
  const ref = useRef<HTMLElement>(null)
  const [showAnim, setShowAnim] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShowAnim(true),
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="join-us"
      ref={ref}
      className="relative py-24 px-6 text-[#b8b8b8] overflow-hidden rounded-2xl shadow-xl my-4 md:mx-4 text-center"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 will-change-transform"
        src="/bg-3.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="relative z-10">
        <h2
          className={`text-5xl lg:text-6xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text transition-opacity duration-700 ease-out ${
            showAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Dare to Build a Legacy? Join the Revolution.
        </h2>

        <p
          className={`text-xl md:text-2xl lg:text-3xl mb-16 max-w-5xl mx-auto opacity-90 font-light transition-opacity duration-700 ease-out ${
            showAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          LocalConnect AI isn&apos;t just a company — it&apos;s a mission to secure South Africa&apos;s financial future. We&apos;re building a founding team ready to lead a global transformation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 mb-16">
          {roles.map((role, i) => (
            <div
              key={i}
              onClick={() => setActiveRole(role)}
              className={`text-[#F1F5F9] p-10 rounded-3xl shadow-xl border cursor-pointer border-opacity-60 bg-opacity-20 transform transition duration-300 hover:scale-105 ${role.color} ${role.bg} ${
                showAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${200 * i}ms`,
                transition: 'box-shadow 0.5s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = role.glow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <div className="text-6xl mb-6 text-center">{role.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{role.title}</h3>
              <p className="text-gray-300 leading-relaxed font-light">{role.description}</p>
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl mb-12 opacity-90 font-light">
          This is a rare equity opportunity to co-create a generational venture. Let&apos;s build the AI guardrails for an entire continent.
        </p>

        <Link
          href="#contact"
          className="gradient-hover rounded-full py-4 px-8 sm:py-6 sm:px-16 text-xl sm:text-2xl font-bold shadow-xl inline-block"
        >
          Connect with Siyabonga
        </Link>
      </div>

      {activeRole && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setActiveRole(null)}
        >
          <div
            className="bg-gray-900 p-10 rounded-3xl max-w-3xl w-full mx-6 relative text-left border-l-4 border-cyan-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveRole(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <div className="text-5xl mb-6">{activeRole.icon}</div>
            <h3 className="text-4xl font-bold mb-4 text-white">{activeRole.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{activeRole.detail}</p>
          </div>
        </div>
      )}
    </section>
  )
}
