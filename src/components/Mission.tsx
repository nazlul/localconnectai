'use client'

import { motion } from 'framer-motion'

export default function Mission() {
  return (
    <section
      id="mission"
      className="py-24 px-6 bg-[#162131] text-[#F1F5F9] rounded-2xl shadow-xl my-4 md:mx-4"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 gradient-text bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text"
        >
          Our Mission: A Resilient Financial Future
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto leading-relaxed font-light"
        >
          South Africa is under siege by escalating financial crime, costing billions and impacting our global standing. At LocalConnect AI, our unwavering mission is to fundamentally transform how financial crime is fought. We aim to move beyond reactive measures, building an intelligent, proactive, and interconnected ecosystem that safeguards our nation&apos;s financial integrity, empowers institutions, and fosters a legacy of trust and prosperity.
        </motion.p>
      </div>
    </section>
  )
}
