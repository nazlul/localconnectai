'use client'

import Link from 'next/link'

export default function Join() {
  const roles = [
    {
        title: 'AML/Compliance Expert',
        icon: '⚖️',
        color: 'border-cyan-400',
        bg: 'bg-cyan-950/30',
        glow: 'hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.4)]', 
        description:
        'Deep FICA knowledge, regulatory foresight, and a passion for ethical AI integration to ensure unwavering legal and ethical standards.',
    },
    {
        title: 'Data Engineer/Architect',
        icon: '💾',
        color: 'border-teal-400',
        bg: 'bg-teal-950/30',
        glow: 'hover:shadow-[0_0_25px_5px_rgba(45,212,191,0.4)]', 
        description:
        'A master of scalable pipelines, robust data architecture, and distributed systems, ready to manage and transform petabytes of financial data.',
    },
    {
        title: 'AI/ML Virtuoso',
        icon: '🧠',
        color: 'border-purple-400',
        bg: 'bg-purple-950/30',
        glow: 'hover:shadow-[0_0_25px_5px_rgba(192,132,252,0.4)]',
        description:
        "An expert in GNNs, XAI, and Generative AI, eager to build models that don't just predict but understand, explain, and evolve proactively.",
    },
    {
        title: 'Growth/Impact Evangelist',
        icon: '📈',
        color: 'border-pink-400',
        bg: 'bg-pink-950/30',
        glow: 'hover:shadow-[0_0_25px_5px_rgba(244,114,182,0.4)]', 
        description:
        'A strategic thinker, master of partnerships, and visionary communicator to drive profound market adoption and maximize societal impact.',
    },
    ]


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
        <h2 className="text-5xl lg:text-6xl font-bold mb-10 drop-shadow-lg bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text animate-fade-in-scale-up">
          Dare to Build a Legacy? Join the Revolution.
        </h2>

        <p className="text-xl md:text-2xl lg:text-3xl mb-16 max-w-5xl mx-auto opacity-90 font-light animate-fade-in-scale-up">
          LocalConnect AI is more than a startup; it's a commitment to safeguarding South Africa's financial future. We're seeking visionary co-founders and core team members who are ready to make a profound impact with cutting-edge AI and own their part of this monumental journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 mb-16">
          {roles.map((role, i) => (
            <div
              key={i}
              className={`bg-gray-800 text-[#F1F5F9] p-10 rounded-3xl shadow-xl border hover:scale-105 relative overflow-hidden group card-3d-tilt grid-pattern animate-fade-in-scale-up ${role.color} ${role.bg} ${role.glow} bg-opacity-10 transform transition-all duration-300`}
              style={{ '--animation-delay': `${1.2 + i * 0.2}s` } as React.CSSProperties}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-300 group-hover-effect" />
              <div className="relative z-10">
                <div className="text-6xl mb-6 text-center icon-bounce-on-hover">{role.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{role.title}</h3>
                <p className="text-gray-300 leading-relaxed font-light">{role.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl mb-12 opacity-90 font-light animate-fade-in-scale-up">
          This is a singular opportunity for significant early equity and to redefine a nation's financial security for generations to come.
        </p>
        <Link
          href="#contact"
          className="text-gray-900 bg-[#2DD4BF] hover:bg-[#26bfb2] font-bold py-4 px-8 sm:py-6 sm:px-16 rounded-full text-xl sm:text-2xl transition duration-300 transform hover:scale-105 shadow-xl animate-glow-subtle animate-fade-in-scale-up"
        >
          Connect with Siyabonga
        </Link>
      </div>
    </section>
  )
}
