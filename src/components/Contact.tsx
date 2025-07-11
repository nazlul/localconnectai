'use client'

import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function FadeSlideUp({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? 'animate-fade-slide-up' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-6 text-[#F1F5F9] overflow-hidden rounded-2xl shadow-xl my-4 md:mx-4 text-center relative glass-bg"
    >
      <div className="relative container mx-auto text-center">
        <FadeSlideUp
          threshold={0.1}
          delay={0.02}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-[#ffca88]"
        >
          Let&apos;s Connect & Build
        </FadeSlideUp>

        <FadeSlideUp
          threshold={0.1}
          delay={0.02}
          className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto opacity-90 font-light"
        >
          Whether you&apos;re a visionary ready to join our core team, a financial
          institution interested in a pilot program, or a strategic partner
          seeking to collaborate, we want to hear from you. Your expertise and
          passion can help shape the future of financial integrity.
        </FadeSlideUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          

          <FadeSlideUp
            threshold={0.1}
            delay={0.03}
            className="bg-gray-800/70 hover:shadow-[0_0_25px_5px_rgba(99,102,241,0.5)] transition duration-300 p-10 rounded-3xl shadow-xl border border-indigo-600 relative overflow-x-hidden group"
          >
            <div className="absolute inset-0 bg-indigo-500 opacity-10 blur-xl transition duration-300 group-hover:opacity-15 z-0" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-50">
                Siyabonga Ayanda Khumalo (Founder)
              </h3>
              <div className="space-y-4">
                <p className="text-xl text-gray-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400 text-lg md:text-2xl mr-3" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=siyabongakhumalo602@gmail.com"
                    className="hover:text-cyan-400 transition text-[1rem]"
                  >
                    siyabongakhumalo602@gmail.com
                  </a>
                </p>
                <p className="text-xl text-gray-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhoneVolume} className="text-cyan-400 text-2xl mr-3" />
                  <a href="tel:+27641356433" className="hover:text-cyan-400 transition text-[1rem]">
                    +27 6413 56433
                  </a>
                </p>
                <p className="text-xl text-gray-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-cyan-400 text-2xl mr-3" />
                  <a
                    href="https://wa.me/27641356433"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition text-[1.1rem]"
                  >
                    Message on WhatsApp
                  </a>
                </p>
                <a
                  href="https://www.linkedin.com/in/siyabonga-khumalo-7b9a25254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-md mt-6"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="mr-3" /> LinkedIn
                </a>
              </div>
            </div>
          </FadeSlideUp>

          <FadeSlideUp
            threshold={0.1}
            delay={0.02}
            className="bg-gray-800/70 p-10 rounded-3xl shadow-xl border border-cyan-500 hover:shadow-[0_0_25px_5px_rgba(6,182,212,0.5)] transition duration-300 relative overflow-x-hidden group"
          >
            <div className="absolute inset-0 bg-cyan-500 opacity-10 blur-xl transition duration-300 group-hover:opacity-15 z-0" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-50">General Inquiries</h3>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                For all other queries, potential collaborations, or media inquiries,
                please reach out via our general contact email.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@localconnectai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 shadow-md"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" /> Email Us
              </a>
              <p className="text-xl text-gray-300 flex items-center justify-center mt-10">
                <FontAwesomeIcon icon={faWhatsapp} className="text-cyan-400 text-2xl mr-3" />
                <a
                  href="https://wa.me/27641356433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition text-[1.1rem]"
                >
                  WhatsApp Us
                </a>
              </p>
            </div>
          </FadeSlideUp>

          <FadeSlideUp
            threshold={0.1}
            delay={0.04}
            className="bg-gray-800/70 hover:shadow-[0_0_25px_5px_rgba(99,102,241,0.5)] transition duration-300 p-10 rounded-3xl shadow-xl border border-indigo-600 relative overflow-x-hidden group"
          >
            <div className="absolute inset-0 bg-indigo-500 opacity-10 blur-xl transition duration-300 group-hover:opacity-15 z-0" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-50">
                Ankur Kumar <br /> (Cofounder)
              </h3>
              <div className="space-y-4">
                <p className="text-xl text-gray-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400 text-lg md:text-2xl mr-3" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ankurkumar102003@gmail.com"
                    className="hover:text-cyan-400 transition text-[1rem]"
                  >
                    ankurkumar102003@gmail.com
                  </a>
                </p>
                <p className="text-xl text-gray-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhoneVolume} className="text-cyan-400 text-2xl mr-3" />
                  <a href="tel:+919473314831" className="hover:text-cyan-400 transition text-[1rem]">
                    +91 94733 14831
                  </a>
                </p>
                <p className="text-xl text-gray-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-cyan-400 text-2xl mr-3" />
                  <a
                    href="https://wa.me/919473314831"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition text-[1.1rem]"
                  >
                    Message on WhatsApp
                  </a>
                </p>
                <a
                  href="https://www.linkedin.com/in/ankur-kumar-828591250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-md mt-6"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="mr-3" /> LinkedIn
                </a>
              </div>
            </div>
          </FadeSlideUp>
        </div>
      </div>
    </section>
  )
}
