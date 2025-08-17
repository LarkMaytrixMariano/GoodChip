import React from 'react'
import { chipsVideo } from '../assets/assets'

const Hero = () => {
  // Debug function to check video loading
  const handleVideoLoad = () => {
    console.log('✅ Video loaded successfully!');
  };

  const handleVideoError = (e) => {
    console.error('❌ Video failed to load:', e);
    console.log('Video source:', chipsVideo);
  };

  const handleVideoPlay = () => {
    console.log('▶️ Video started playing');
  };

  const handleVideoCanPlay = () => {
    console.log('🎬 Video can start playing');
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
          preload="auto"
          src={chipsVideo}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onPlay={handleVideoPlay}
          onCanPlay={handleVideoCanPlay}
        >
          {/* Fallback content */}
          <div className="w-full h-full bg-black flex items-center justify-center text-white">
            Video not supported or failed to load
          </div>
        </video>
        
        {/* Debug info - you can remove this later */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded text-sm">
          Video Source: {chipsVideo ? 'Loaded' : 'Not found'}
        </div>
      </div>
      
      {/* Overlay for better text readability (optional)
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
       */}
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Hero Text Overlay - Center */}
        <div className="text-center mb-auto mt-auto px-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-2xl tracking-wider">
            GOOD
          </h1>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-2xl tracking-wider -mt-2 sm:-mt-4">
            CHIPS
          </h2>
        </div>
        
        {/* Button Container - Bottom */}
        <div className="flex flex-col sm:flex-row gap-4 px-6 pb-16">
          {/* Buy $CHIPS Button */}
          <button className="px-8 py-3 bg-[#F7E6CA] text-[#3C3C3C] font-medium rounded-full hover:bg-[#F0D9B8] hover:scale-105 transition-all duration-300 min-w-[160px] cursor-pointer">
            Buy $CHIPS
          </button>
          
          {/* Find in Stores Button */}
          <button className="px-8 py-3 bg-transparent text-white font-medium rounded-full border-2 border-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 min-w-[160px] cursor-pointer">
            Find in Stores
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero