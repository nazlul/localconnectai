import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-20 px-6 text-center rounded-t-3xl shadow-inner border-t border-gray-800 relative">
      <div className="container mx-auto flex flex-col items-center mt-25">
        <a
          href="#"
          className="absolute top-4 mt-14 left-1/2 text-2xl transform -translate-x-1/2 bg-cyan-400 hover:bg-cyan-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition"
          aria-label="Back to top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </a>
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-13 w-auto flex items-center">
            <Image
              src="/logo.png"
              alt="LocalConnect AI Logo"
              width={60}
              height={80}
              className="object-contain h-full w-auto"
            />
          </div>
          <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            LocalConnect AI
          </span>
        </div>

        <p className="mb-8 text-base sm:text-xl font-light max-w-4xl mx-auto">
          Dedicated to building a future of unwavering financial integrity in South Africa through relentless AI
          innovation, secure methodologies, and a commitment to societal impact.
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-base sm:text-xl mb-8">
          <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-400 transition">Terms of Service</a>
        </div>

        <div className="flex justify-center gap-10 mb-8 text-2xl sm:text-3xl text-gray-400">
          <a href="#" className="hover:text-cyan-400 transition" aria-label="X">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/localconnect-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:text-cyan-400 transition" aria-label="Telegram">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="#" className="hover:text-cyan-400 transition" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p className="text-sm sm:text-lg">
          &copy; {new Date().getFullYear()} LocalConnect AI. All rights reserved. Built with passion in South Africa.
        </p>
      </div>
    </footer>
  )
}
