import React, { useState } from 'react'
import { targetLogo, walmartLogo } from '../assets/assets'

const ChipRetail = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    // Handle email submission here
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex flex-col items-center justify-center px-6 py-16" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair text-gray-800 mb-16 leading-tight">
          Coming Soon to a retail near you.
        </h2>

        {/* Logo Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          {/* Walmart Logo Card */}
          <div className="bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 w-48 h-32 flex items-center justify-center border border-orange-100">
            <img 
              src={walmartLogo} 
              alt="Walmart" 
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Target Logo Card */}
          <div className="bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 w-48 h-32 flex items-center justify-center border border-orange-100">
            <img 
              src={targetLogo} 
              alt="Target" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* Email Signup Section */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4 font-playfair">
            Stay in the loop.
          </h3>
          
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto font-playfair">
            New flavors, giveaways, and GOOD ideas straight to your inbox.
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full sm:flex-1 px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent text-gray-700 placeholder-gray-400 bg-white shadow-sm"
            />
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-8 py-4 bg-orange-200 hover:bg-orange-300 text-gray-800 font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md
              font-playfair
              "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChipRetail