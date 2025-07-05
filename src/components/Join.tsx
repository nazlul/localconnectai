'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
    bg: 'bg-cyan-950/30',
    glow: 'hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.4)]',
    description:
      'Deep FICA knowledge and a passion for ethical AI to uphold the highest legal and compliance standards.',
    detail:
      'You will architect our compliance AI logic, ensure alignment with FICA and POPIA, and collaborate with regulators and stakeholders. Your insight ensures our models are not just powerful, but accountable and auditable in every deployment.',
  },
  {
    title: 'Data Engineer/Architect',
    icon: '💾',
    color: 'border-teal-400',
    bg: 'bg-teal-950/30',
    glow: 'hover:shadow-[0_0_25px_5px_rgba(45,212,191,0.4)]',
    description:
      'A master of scalable pipelines and real-time distributed systems to handle massive financial data.',
    detail:
      'You’ll design fault-tolerant, scalable ingestion pipelines and architect the data infrastructure that fuels our AI. You’ll work across Kafka, Snowflake, ClickHouse, and streaming systems to build a world-class data backbone.',
  },
  {
    title: 'AI/ML Virtuoso',
    icon: '🧠',
    color: 'border-purple-400',
    bg: 'bg-purple-950/30',
    glow: 'hover:shadow-[0_0_25px_5px_rgba(192,132,252,0.4)]',
    description:
      'Expert in GNNs, XAI, and Generative AI to build models that not only predict but explain and adapt.',
    detail:
      'You will build models using GNNs, Transformers, and explainable AI layers. From fraud detection to anomaly simulation, your models will learn, adapt, and clarify their own reasoning for human auditors.',
  },
  {
    title: 'Growth/Impact Evangelist',
    icon: '📈',
    color: 'border-pink-400',
    bg: 'bg-pink-950/30',
    glow: 'hover:shadow-[0_0_25px_5px_rgba(244,114,182,0.4)]',
    description:
      'A visionary communicator to lead partnerships, adoption, and maximize impact across the continent.',
    detail:
      'You will shape our narrative, forge partnerships with banks, regulators, and media, and drive adoption. From thought leadership to commercial deals, you’ll put LocalConnect AI on the fintech map.',
  },
]

export default function Join() {
  const [activeRole, setActiveRole] = useState<Role | null>(null)

  return (
    <section
      id="join-us"
      className="py-24 px-6 bg-[#162131] text-[#F1F5F9] rounded-2xl shadow-xl animate-fade-in-scale-up my-4 md:mx-4 text-center relative"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 blur-3xl rounded-full animate-glow-subtle delay-0" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 blur-3xl rounded-full animate-glow-subtle delay-2000" />
      </div>

      <div className="relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
          Dare to Build a Legacy? Join the Revolution.
        </h2>

        <p className="text-xl md:text-2xl lg:text-3xl mb-16 max-w-5xl mx-auto opacity-90 font-light">
          LocalConnect AI isn&apos;t just a company — it&apos;s a mission to secure South Africa&apos;s financial future. We&apos;re building a founding
          team ready to lead a global transformation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 mb-16">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveRole(role)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className={`bg-gray-800 text-[#F1F5F9] p-10 rounded-3xl shadow-xl border hover:scale-105 relative overflow-hidden group card-3d-tilt grid-pattern animate-fade-in-scale-up ${role.color} ${role.bg} ${role.glow} bg-opacity-10 transform transition-all duration-300 cursor-pointer`}
              style={{ '--animation-delay': `${1.2 + i * 0.2}s` } as React.CSSProperties}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-300" />
              <div className="relative z-10">
                <div className="text-6xl mb-6 text-center">{role.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{role.title}</h3>
                <p className="text-gray-300 leading-relaxed font-light">{role.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xl md:text-2xl mb-12 opacity-90 font-light">
          This is a rare equity opportunity to co-create a generational venture. Let’s build the AI guardrails for an entire continent.
        </p>

        <Link
          href="#contact"
          className="text-gray-900 bg-[#2DD4BF] hover:bg-[#26bfb2] font-bold py-4 px-8 sm:py-6 sm:px-16 rounded-full text-xl sm:text-2xl transition duration-300 transform hover:scale-105 shadow-xl animate-glow-subtle"
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
