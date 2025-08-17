import React from 'react'
import { chipCycleImage } from '../assets/assets'

const AboutChip = () => {
  return (
    <div className="bg-[#F7E6CA] py-16 overflow-hidden">
      {/* Marquee Section */}
      <div 
        className="mb-25 font-playfair text-center text-4xl md:text-5xl font-bold text-gray-800"
        style={{ 
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.15)' 
        }}
      >
        {/* First Marquee - Left to Right */}
        <div className="relative overflow-hidden whitespace-nowrap mb-4">
          <div className="animate-marquee-ltr inline-block">
            <span className="marquee-text">A BRAND POWERED BY APPETITE</span>
            <span className="marquee-text">A BRAND POWERED BY APPETITE</span>
            <span className="marquee-text">A BRAND POWERED BY APPETITE</span>
          </div>
        </div>

        {/* Second Marquee - Right to Left */}
        <div className="relative overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-rtl inline-block">
            <span className="marquee-text">A BRAND POWERED BY APPETITE</span>
            <span className="marquee-text">A BRAND POWERED BY APPETITE</span>
            <span className="marquee-text">A BRAND POWERED BY APPETITE</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
              What is $CHIPS?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-playfair">
              $CHIPS is the reward token for the GOOD CHIPS brand. An #Eat2Earn project soon to launch on the Solana chain. Yada yada yada, yada yada yada yada yada yada yada.
            </p>
          </div>

          {/* Right Side - Cycle Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative max-w-lg w-full">
              <img 
                src={chipCycleImage} 
                alt="GOOD CHIPS Cycle Diagram" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Marquee Animations */}
      <style>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes marquee-rtl {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee-ltr {
          animation: marquee-ltr 30s linear infinite; /* slower */
        }

        .animate-marquee-rtl {
          animation: marquee-rtl 30s linear infinite; /* slower */
        }

        .marquee-text {
          display: inline-block;
          font-size: clamp(2rem, 6vw, 6rem);
          font-weight: bold;
          color: #1f2937; /* text-gray-800 */
          letter-spacing: 0.2em;
          margin: 0 2rem;
        }
      `}</style>
    </div>
  )
}

export default AboutChip;
