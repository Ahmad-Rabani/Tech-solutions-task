import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute bg-cover bg-center">
          <Image
            src="/images/Hero.jpg"
            alt="Hero"
            width={1000}
            height={1000}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-8">
          <div className="text-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-4 sm:px-6 md:px-8">
            <div className="inline-block bg-white/70 backdrop-blur-sm w-full px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-6 lg:px-12 lg:py-8 transform hover:scale-105 transition-all duration-500 shadow-lg border border-white/20">
              <h4 className="style={{ fontFamily: 'Sansation Light, sans-serif' }} text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] uppercase tracking-widest text-gray-600 mb-2">
                COSMETICS
              </h4>
              <h1 className="style={{ fontFamily: 'Sansation Light, sans-serif' }} text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mb-3 sm:mb-4 text-gray-900">
                BEST MAKE-UP PRODUCTS
              </h1>
              <p className="style={{ fontFamily: 'Sansation Light, sans-serif' }} text-[20px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 mb-4 sm:mb-6 font-light">
                2023
              </p>
              <button
                style={{ fontFamily: "Sansation Light, sans-serif" }}
                className="bg-black text-white px-4 sm:px-6 text-[10px] sm:text-[10px] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-[100px] h-[25px] sm:w-auto"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
