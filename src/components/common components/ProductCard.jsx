import React from "react";
import Image from "next/image";

const ProductCard = ({ post, isLarge = false, isMinimal = false, index = 0 }) => {
  return (
    <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div
        className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative ${
          isLarge ? "lg:flex lg:flex-row" : ""
        } ${
          (!isLarge && !isMinimal) || isLarge 
            ? "border-2 sm:border-4 border-dashed border-purple-200 p-2 sm:p-[18px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-102 hover:-translate-y-1" 
            : ""
        }`}
        style={(!isLarge && !isMinimal) || isLarge ? { animationDelay: `${index * 0.2}s` } : {}}
      >
        <div
          className={`relative ${post.bgColor} overflow-hidden ${
            isLarge
              ? "lg:w-1/2 h-48 lg:h-64"
              : isMinimal
              ? "h-[180px] sm:h-[270px]"
              : "h-[200px] sm:h-[282px]"
          } flex items-center justify-center`}
        >
          <div className="w-full h-full relative group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
            <Image
              src={post.image}
              alt="products"
              width={304}
              height={283}
              className="object-cover w-full h-full"
            />
          </div>

          {isMinimal && (
            <div className="absolute inset-0 bg-black/20 transition-all duration-300"></div>
          )}

          {isMinimal && (
            <div className="absolute inset-0 z-10 flex items-center justify-center px-2 sm:px-4">
              <div className="text-center px-2 sm:px-4 w-full">
                <div className="inline-block bg-white/70 backdrop-blur-sm px-3 py-2 sm:px-6 sm:py-4 md:px-8 md:py-4 lg:px-12 transform hover:scale-105 transition-all duration-500 shadow-lg w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto border border-white/20 rounded-lg">
                  <h4
                    style={{ fontFamily: "Sansation Light, sans-serif" }}
                    className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] uppercase tracking-widest text-gray-600 mb-1 sm:mb-2"
                  >
                    COSMETICS
                  </h4>
                  <h1
                    style={{ fontFamily: "Sansation Light, sans-serif" }}
                    className="text-sm sm:text-[16px] md:text-xl lg:text-2xl xl:text-3xl font-light mb-1 sm:mb-2 md:mb-3 text-gray-900 leading-tight"
                  >
                    {post.title}
                  </h1>
                  <button
                    style={{ fontFamily: "Sansation Light, sans-serif" }}
                    className="bg-black text-white px-3 sm:px-6 md:px-8 text-[8px] sm:text-[10px] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-[100px] sm:w-[120px] h-[25px] sm:h-[30px] rounded"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {!isLarge && !isMinimal && (
          <div className="p-2 sm:p-4 md:p-6 text-center">
            <h3
              style={{ fontFamily: "Sansation Light, sans-serif" }}
              className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3 tracking-wide leading-tight"
            >
              {post.title}
            </h3>
            <p
              style={{ fontFamily: "Sansation Light, sans-serif" }}
              className="text-gray-600 text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-4 md:mb-6 leading-relaxed line-clamp-2 sm:line-clamp-none"
            >
              {post.description}
            </p>
            <div className="flex justify-center">
              <button
                style={{ fontFamily: "Sansation Light, sans-serif" }}
                className="bg-black text-white px-3 sm:px-4 md:px-6 lg:px-8 text-[8px] sm:text-[9px] md:text-[10px] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-[100px] sm:w-[120px] md:w-[140px] h-[24px] sm:h-[28px] md:h-[30px] rounded"
              >
                READ MORE
              </button>
            </div>
          </div>
        )}

        {isLarge && (
          <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center p-4 sm:p-6 h-48 lg:h-64">
            <div className="text-center lg:text-left flex flex-col justify-center h-full">
              <h3
                style={{ fontFamily: "Sansation Light, sans-serif" }}
                className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-wide leading-tight"
              >
                {post.title}
              </h3>
              <p
                style={{ fontFamily: "Sansation Light, sans-serif" }}
                className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed"
              >
                {post.description}
              </p>
              <div className="flex justify-center lg:justify-start">
                <button
                  style={{ fontFamily: "Sansation Light, sans-serif" }}
                  className="bg-black text-white px-4 sm:px-6 md:px-8 text-[9px] sm:text-[10px] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-[100px] sm:w-[120px] h-[26px] sm:h-[30px] rounded"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;