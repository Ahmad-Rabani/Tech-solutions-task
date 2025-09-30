import React from "react";
import Image from "next/image";

const ProductCard = ({ post, isLarge = false, isMinimal = false, index = 0 }) => {
  return (
    <div className="group cursor-pointer transition-all duration-300">
      <div
        className={`bg-transparent rounded-lg overflow-hidden shadow-none hover:shadow-none transition-all duration-300 h-full relative ${
          isLarge ? "lg:flex lg:flex-row" : ""
        } ${
          (!isLarge && !isMinimal) || isLarge 
            ? "custom-border p-10 rounded-none overflow-hidden transition-all duration-500" 
            : ""
        }`}
        style={(!isLarge && !isMinimal) || isLarge ? { animationDelay: `${index * 0.2}s` } : {}}
      >
          <div
          className={`relative ${post.bgColor} overflow-hidden ${
            isLarge
              ? "lg:w-1/2 h-28 lg:h-44"
              : isMinimal
              ? "h-[180px] sm:h-[270px]"
              : "h-[125px] sm:h-[190px]"
          } flex items-center justify-center`}
        >
          <div className="w-full h-full relative flex items-center justify-center">
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
                  className="text-[6px] sm:text-[8px] md:text-[9px] lg:text-[11px] uppercase tracking-widest text-gray-600 mb-1 sm:mb-2"
                  >
                    COSMETICS
                  </h4>
                  <h1
                    style={{ fontFamily: "Sansation Light, sans-serif" }}
                    className="text-sm sm:text-[15px] md:text-lg lg:text-xl xl:text-2xl font-light mb-1 sm:mb-2 md:mb-3 text-gray-900 leading-tight text-center"
                  >
                    {post.title}
                  </h1>
                  <button
                    style={{ fontFamily: "Sansation Light, sans-serif" }}
                    className="bg-black text-white px-3 sm:px-6 md:px-8 text-[8px] sm:text-[9px] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-[95px] sm:w-[115px] h-[24px] sm:h-[28px] rounded cursor-pointer"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {!isLarge && !isMinimal && (
          <div className="p-3 sm:p-4 md:p-5 text-center">
            <h3
              style={{ fontFamily: "Sansation Light, sans-serif" }}
              className="text-xs sm:text-sm md:text-base font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3 tracking-wide leading-tight text-center"
            >
              {post.title}
            </h3>
            <p
              style={{ fontFamily: "Sansation Light, sans-serif" }}
              className="text-gray-600 text-[9px] sm:text-[10px] md:text-sm mb-2 sm:mb-4 md:mb-5 leading-relaxed line-clamp-2 sm:line-clamp-none text-center max-w-[78%] mx-auto"
            >
              {post.description}
            </p>
              <div className="flex justify-center">
                <button
                  style={{ fontFamily: "Sansation Light, sans-serif" }}
                  className="bg-black text-white px-5 sm:px-6 text-[9px] sm:text-[10px] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-[100px] h-[26px] rounded cursor-pointer"
                >
                  Read More
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
                  className="bg-black text-white px-4 sm:px-6 md:px-8 text-[9px] sm:text-[10px] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-[100px] sm:w-[120px] h-[26px] sm:h-[30px] rounded cursor-pointer"
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