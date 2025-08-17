import React from 'react'
import { Zap, Ban, CheckCircle, Leaf, Heart } from 'lucide-react'
import { chipWhyImage } from '../assets/assets'

const WhyGoodChips = () => {
  const features = [
    {
      icon: <Zap className="w-4 h-4 text-gray-600" />,
      text: "10g Protein from Chickpeas"
    },
    {
      icon: <Ban className="w-4 h-4 text-gray-600" />,
      text: "No Seed Oils"
    },
    {
      icon: <CheckCircle className="w-4 h-4 text-gray-600" />,
      text: "Non-GMO"
    },
    {
      icon: <Leaf className="w-4 h-4 text-gray-600" />,
      text: "Naturally Flavored"
    },
    {
      icon: <Heart className="w-4 h-4 text-gray-600" />,
      text: "Baked with Intention"
    }
  ]

  return (
    <div className="bg-[#F7E6CA] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img 
                src={chipWhyImage} 
                alt="Good Chips on plate" 
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-1 font-playfair">
                  Why <span className="text-yellow-600">GOOD CHIPS</span>
                </h2>
                <h3 className="text-2xl md:text-3xl text-gray-800 font-playfair font-medium">
                  are good?
                </h3>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <p className="text-gray-600 text-[18px] font-light font-playfair">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyGoodChips