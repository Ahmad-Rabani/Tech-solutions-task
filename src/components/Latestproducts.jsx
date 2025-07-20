import React from "react";
import ProductCard from "./common components/ProductCard";

export default function LatestBlogLayout() {
  const leftTopPosts = [
    {
      id: 1,
      title: "HOME-MADE SCRUBS ORGANIC",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eos ipsum malesuada non tempor pretium at.",
      image: "/images/p1.jpg",
    },
    {
      id: 2,
      title: "HOME-MADE SCRUBS ORGANIC",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eos ipsum malesuada non tempor pretium at.",
      image: "/images/left1.jpg",
    },
  ];

  const leftBottomPost = {
    id: 3,
    title: "DOES PERFUME REALLY DESTROY YOUR SKIN?",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eos ipsum malesuada non tempor pretium at. Lorem ipsum dolor sit amet consectetur.",
    image: "/images/left2.jpg",
  };

  const rightPosts = [
    {
      id: 4,
      title: "LOREM IPSUM",
      image: "/images/right1.jpg",
    },
    {
      id: 5,
      title: "LOREM IPSUM",
      image: "/images/right2.jpg",
    },
    {
      id: 6,
      title: "LOREM IPSUM",
      image: "/images/right3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className=" text-3xl md:text-4xl font-bold text-center mb-12 text-black"
            style={{
              fontFamily: "Sansation",
              fontSize: "32px",
              fontWeight: 700,
            }}>
            LATEST
          </h1>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - 2fr */}
          <div className="lg:col-span-2">
            {/* Top Row - 2 products */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {leftTopPosts.map((post) => (
                <ProductCard key={post.id} post={post} />
              ))}
            </div>

            {/* Bottom Row - 1 full-width product */}
            <div className="w-full">
              <ProductCard post={leftBottomPost} isLarge={true} />
            </div>
          </div>

          {/* Right Side - 1fr */}
          <div className="lg:col-span-1">
            {/* 3 products in column */}
            <div className="flex flex-col gap-6">
              {rightPosts.map((post) => (
                <ProductCard key={post.id} post={post} isMinimal={true} />
              ))}
            </div>
          </div>
        </div>
        

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="border border-gray-900 text-gray-900 font-medium tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{
              width: "162px",
              height: "30px",
            }}
          >
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
}
