import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { chipCarouselImages, chipImage } from '../assets/assets';

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % chipCarouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + chipCarouselImages.length) % chipCarouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  // Floating chips data with random positions and rotations
  const floatingChips = [
    { 
      id: 1, 
      top: '15%', 
      left: '8%', 
      size: 'w-16 h-16', 
      rotation: Math.random() * 360,
      parallaxSpeed: 0.2,
      opacity: 0.6 
    },
    { 
      id: 2, 
      top: '25%', 
      right: '12%', 
      size: 'w-12 h-12', 
      rotation: Math.random() * 360,
      parallaxSpeed: 0.4,
      opacity: 0.4 
    },
    { 
      id: 3, 
      bottom: '30%', 
      left: '15%', 
      size: 'w-14 h-14', 
      rotation: Math.random() * 360,
      parallaxSpeed: 0.3,
      opacity: 0.5 
    },
    { 
      id: 4, 
      bottom: '15%', 
      right: '10%', 
      size: 'w-18 h-18', 
      rotation: Math.random() * 360,
      parallaxSpeed: 0.25,
      opacity: 0.6 
    },
    { 
      id: 5, 
      top: '45%', 
      left: '20%', 
      size: 'w-10 h-10', 
      rotation: Math.random() * 360,
      parallaxSpeed: 0.35,
      opacity: 0.3 
    },
    { 
      id: 6, 
      top: '60%', 
      right: '25%', 
      size: 'w-12 h-12', 
      rotation: Math.random() * 360,
      parallaxSpeed: 0.45,
      opacity: 0.45 
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#F5F0E8] to-[#F7E6CA] overflow-hidden" id="products">
      {/* Parallax Background Elements - Floating Chips */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingChips.map((chip) => (
          <div
            key={chip.id}
            className={`absolute ${chip.size}`}
            style={{
              top: chip.top,
              bottom: chip.bottom,
              left: chip.left,
              right: chip.right,
              transform: `translateY(${scrollY * chip.parallaxSpeed}px) rotate(${chip.rotation}deg)`,
              opacity: chip.opacity,
            }}
          >
            <img 
              src={chipImage} 
              alt="Floating Chip" 
              className="w-full h-full object-contain animate-pulse transition-transform duration-1000 ease-in-out" 
              style={{ 
                animationDuration: `${3 + Math.random() * 2}s`,
                transform: `rotate(${Math.sin(Date.now() * 0.001 + chip.id) * 5}deg)`
              }}
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        {/* Header Text */}
        <div className="text-center mb-16 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-gray-800 mb-6 leading-tight">
            Not all chips are{' '}
            <span className="text-yellow-600">GOOD</span>.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 font-playfair">
            These are.
          </h2>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative w-full max-w-7xl">
          {/* 3D Carousel */}
          <div className="relative h-96 md:h-[500px] flex items-center justify-center">
            <div className="relative w-full flex items-center justify-center">
              {chipCarouselImages.map((image, index) => {
                const offset = index - currentSlide;
                const isActive = index === currentSlide;
                const isPrev = offset === -1 || (currentSlide === 0 && index === chipCarouselImages.length - 1);
                const isNext = offset === 1 || (currentSlide === chipCarouselImages.length - 1 && index === 0);
                const isVisible = isActive || isPrev || isNext;

                if (!isVisible) return null;

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
                      isActive
                        ? 'z-30 scale-100 opacity-100'
                        : 'z-10 scale-75 opacity-60 blur-xs hover:opacity-80'
                    }`}
                    style={{
                      transform: `translateX(${
                        isActive ? '0' : isPrev ? '-70%' : '70%'
                      }) scale(${isActive ? '1' : '0.75'})`,
                    }}
                    onClick={() => !isActive && goToSlide(index)}
                  >
                    <div className="w-80 h-96 md:w-96 md:h-[600px] flex items-center justify-center p-6">
                      <img
                        src={image}
                        alt={`Good Chips Product ${index + 1}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-40"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-40"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-4 relative z-50 sm:mb-20">
            {chipCarouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-transparent ${
                  index === currentSlide
                    ? 'bg-yellow-600 w-10 border-yellow-600'
                    : 'bg-gray-400 hover:bg-gray-600 hover:border-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;