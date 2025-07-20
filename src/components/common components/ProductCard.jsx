import React from "react";
import Image from "next/image";

const ProductCard = ({ post, isLarge = false, isMinimal = false }) => {
  return (
    <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div
        className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative ${
          isLarge ? "lg:flex lg:flex-row" : ""
        }`}
      >
        {/* Image Container */}
        <div
          className={`relative ${post.bgColor} overflow-hidden ${
            isLarge
              ? "lg:w-1/2 h-48 lg:h-64"
              : isMinimal
              ? "h-[233px]"
              : "h-[282px]"
          } flex items-center justify-center`}
        >
          <div className="w-full h-full relative group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
            {/* Image */}
            <Image
              src={post.image}
              alt="products"
              width={304}
              height={283}
              className={`${
                isLarge
                  ? "object-cover w-full h-full"
                  : "object-cover w-full h-full"
              }`}
            />
          </div>

          {/* Overlay on hover - only for right side (isMinimal) */}
          {isMinimal && (
            <div className="absolute inset-0 bg-black/20 transition-all duration-300"></div>
          )}

          {/* Centered Content Overlay - only for right side (isMinimal) */}
          {isMinimal && (
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
              <div className="text-center px-4 w-full max-h-md max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                <div className="inline-block bg-white/70 backdrop-blur-sm px-6 py-4 sm:px-8 md:px-10 lg:px-12 transform hover:scale-105 transition-all duration-500 shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto border border-white/20">
                  <h4
                    style={{ fontFamily: "Sansation Light, sans-serif" }}
                    className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px] uppercase tracking-widest text-gray-600 mb-2"
                  >
                    COSMETICS
                  </h4>
                  <h1
                    style={{ fontFamily: "Sansation Light, sans-serif" }}
                    className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl font-light mb-2 sm:mb-3 text-gray-900"
                  >
                    {post.title}
                  </h1>
                  <button
                    style={{ fontFamily: "Sansation Light, sans-serif" }}
                    className="bg-black text-white px-6 sm:px-8 text-[10px] sm:text-[10px] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-[120px] h-[30px] sm:w-auto"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content for Regular Cards (Left Top 2 Cards) */}
        {!isLarge && !isMinimal && (
          <div className="p-6 text-center custom-border">
            <h3
              style={{ fontFamily: "Sansation Light, sans-serif" }}
              className="text-xl font-bold text-gray-900 mb-3 tracking-wide leading-tight"
            >
              {post.title}
            </h3>
            <p
              style={{ fontFamily: "Sansation Light, sans-serif" }}
              className="text-gray-600 text-sm mb-6 leading-relaxed"
            >
              {post.description}
            </p>
            <button
              style={{ fontFamily: "Sansation Light, sans-serif" }}
              className="bg-black text-white px-6 sm:px-8 text-[10px] sm:text-[10px] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-[140px] h-[30px] sm:w-auto"
            >
              READ MORE
            </button>
          </div>
        )}

        {/* Content for Large Card (Horizontal Layout) */}
        {isLarge && (
          <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center p-6 h-48 lg:h-64">
            <div className="text-center lg:text-left flex flex-col justify-center h-full">
              <h3
                style={{ fontFamily: "Sansation Light, sans-serif" }}
                className="text-xl font-bold text-gray-900 mb-3 tracking-wide leading-tight"
              >
                {post.title}
              </h3>
              <p
                style={{ fontFamily: "Sansation Light, sans-serif" }}
                className="text-gray-600 text-sm mb-6 leading-relaxed"
              >
                {post.description}
              </p>
              <button
                style={{ fontFamily: "Sansation Light, sans-serif" }}
                className="bg-black text-white px-6 sm:px-8 text-[10px] sm:text-[10px] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-[120px] h-[30px] sm:w-auto"
              >
                Read More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
