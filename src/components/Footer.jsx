import React from 'react'

const Footer = () => {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#F7E6CA66' }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Quick Links Section */}
        <div className="mb-12">
          <h3 className="text-xl font-light text-gray-800 mb-8 font-playfair">
            Quick Links
          </h3>
          
          <nav className="flex flex-wrap items-center justify-center gap-8 md:gap-12 font-playfair">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base  decoration-gray-400 hover:decoration-gray-700"
            >
              Home
            </a>
            <a 
              href="#products" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base"
            >
              Products
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base"
            >
              Contact
            </a>
            <a 
              href="#policies" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base"
            >
              Policies
            </a>
          </nav>
        </div>

        {/* Social Media Icon */}
        <div className="mb-12">
          <a 
            href="#" 
            className="inline-block p-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            aria-label="Follow us on X (Twitter)"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        {/* Tagline */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-2 font-playfair">
            Crafted with intention.
          </h2>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm font-playfair">
          <p>2025 GOODCHIPS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer