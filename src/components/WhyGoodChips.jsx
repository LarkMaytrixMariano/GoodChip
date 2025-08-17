import React from 'react'
import { Zap, Ban, CheckCircle, Leaf, Heart } from 'lucide-react'
import { chipWhyImage } from '../assets/assets'

const WhyGoodChips = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-gray-700" />,
      text: "10g Protein from Chickpeas"
    },
    {
      icon: <Ban className="w-5 h-5 text-gray-700" />,
      text: "No Seed Oils"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-gray-700" />,
      text: "Non-GMO"
    },
    {
      icon: <Leaf className="w-5 h-5 text-gray-700" />,
      text: "Naturally Flavored"
    },
    {
      icon: <Heart className="w-5 h-5 text-gray-700" />,
      text: "Baked with intention"
    }
  ]

  return (
    <div className=" py-20 px-6 bg-[#F9EDD5]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-2/3 mb-12 lg:mb-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={chipWhyImage} 
                alt="Good Chips on plate" 
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 text-[#1C1C1C]">
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-playfair text-[#1C1C1C] mb-2 leading-tight">
                Why <span className="text-[#1C1C1C] font-playfair font-bold">GOOD CHIPS</span>
              </h2>
              <h3 className="text-4xl lg:text-5xl text-[#1C1C1C] font-playfair leading-tight">
                are good?
              </h3>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <p className="text-[#1C1C1C] text-lg font-poppins font-light">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      
    </div>
  )
}

export default WhyGoodChips