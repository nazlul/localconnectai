'use client'

import Link from 'next/link'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#0d1f3d] text-[#F1F5F9] rounded-2xl shadow-xl animate-fade-in-scale-up my-4 md:mx-4 text-center relative"
    >
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent animate-fade-in-scale-up"
          style={{ '--animation-delay': '0.8s' } as React.CSSProperties}
        >
          Let's Connect & Build
        </h2>
        <p
          className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto opacity-90 font-light animate-fade-in-scale-up"
          style={{ '--animation-delay': '1.0s' } as React.CSSProperties}
        >
          Whether you're a visionary ready to join our core team, a financial institution interested in a pilot program,
          or a strategic partner seeking to collaborate, we want to hear from you. Your expertise and passion can shape
          the future of financial integrity.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-10 md:space-y-0 md:space-x-12">
          <div
            className="text-center bg-gray-800 hover:shadow-[0_0_25px_5px_rgba(99,102,241,0.5)] transition duration-300 p-10 rounded-3xl shadow-xl border border-indigo-600 relative overflow-hidden group animate-fade-in-scale-up"
            style={{ '--animation-delay': '1.2s' } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-indigo-500 opacity-10 blur-xl transition duration-500 group-hover:opacity-15 z-0" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-50">
                Siyabonga Ayanda Khumalo (Founder)
              </h3>
              <div className="space-y-4">
                <p className="text-xl text-gray-300 flex items-center justify-center">
                  <i className="fas fa-envelope text-cyan-400 text-lg md:text-2xl mr-3" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=siyabongakhumalo602@gmail.com"
                    target="_blank"
                    className="hover:text-cyan-400 transition"
                  >
                    siyabongakhumalo602@gmail.com
                  </a>
                </p>
                <p className="text-xl text-gray-300 flex items-center justify-center">
                  <i className="fas fa-phone-alt text-cyan-400 text-2xl mr-3" />
                  <a href="tel:+27641356433" className="hover:text-cyan-400 transition">
                    064 135 6433
                  </a>
                </p>
                <p className="text-xl text-gray-300 flex items-center justify-center">
                  <i className="fab fa-whatsapp text-cyan-400 text-2xl mr-3" />
                  <a
                    href="https://wa.me/27641356433"
                    target="_blank"
                    className="hover:text-cyan-400 transition"
                  >
                    WhatsApp Me
                  </a>
                </p>
                <a
                  href="https://www.linkedin.com/in/siyabonga-khumalo-7b9a25254"
                  target="_blank"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-md mt-6"
                >
                  <i className="fab fa-linkedin-in mr-3" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div
            className="text-center bg-gray-800 p-10 rounded-3xl shadow-xl border border-cyan-500 hover:shadow-[0_0_25px_5px_rgba(6,182,212,0.5)] transition duration-300 relative overflow-hidden group animate-fade-in-scale-up"
            style={{ '--animation-delay': '1.4s' } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-cyan-500 opacity-10 blur-xl transition duration-500 group-hover:opacity-15 z-0" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-50">General Inquiries</h3>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                For all other queries, potential collaborations, or media inquiries, please reach out via our general
                contact email.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@localconnectai.com"
                target="_blank"
                className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 shadow-md"
              >
                <i className="fas fa-paper-plane mr-3" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
