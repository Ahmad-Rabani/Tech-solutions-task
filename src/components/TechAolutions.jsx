"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Products from "./common components/Products";
import ProductShow from "./ProductShow";
import LatestBlogLayout from "./Latestproducts";
import Footer from "./Footer";

export default function BeautyLandingPage() {
  const products = [
    {
      id: 1,
      title: "HOME MADE SCRUBS",
      subtitle: "ORGANIC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/p1.jpg",
      color: "bg-pink-50",
      price: "$29.99",
    },
    {
      id: 2,
      title: "HOME MADE SCRUBS",
      subtitle: "ORGANIC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/p2.jpg",
      color: "bg-amber-50",
      price: "$34.99",
    },
    {
      id: 3,
      title: "FacElixir",
      subtitle: "PREMIUM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/p3.jpg",
      color: "bg-pink-100",
      price: "$49.99",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100">
      <div className="bg-gray-100">
        <div className="bg-gradient-to-r from-purple-300 via-pink-200 to-purple-200 rounded-lg px-6 py-4 shadow-lg">
          <p className="text-gray-700 text-sm text-center font-light">
            Whooo! dreams come true!
          </p>
        </div>
      </div>
      <Navbar />
      <HeroSection />

      {/* Popular Posts Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2
            className="section-heading text-3xl md:text-4xl text-center mb-12 text-black"
          >
            POPULAR POSTS
          </h2>

          <Products products={products} />
        </div>
      </section>

      <ProductShow />
      <section id="latest" className="scroll-mt-24">
        <LatestBlogLayout />
      </section>

      {/* Blog Sections */}
      <section id="beauty-tips" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2
            className="section-heading text-3xl md:text-4xl text-center mb-12 text-black"
          >
            BEAUTY TIPS
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0">
              <Image src="/images/right1.jpg" alt="Beauty Tips 1" width={427} height={392} className="object-cover w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px]" />
            </div>
            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0">
              <Image src="/images/right2.jpg" alt="Beauty Tips 2" width={427} height={392} className="object-cover w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px]" />
            </div>
            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0">
              <Image src="/images/right3.jpg" alt="Beauty Tips 3" width={427} height={392} className="object-cover w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px]" />
            </div>
          </div>
        </div>
      </section>

      <section id="skincare-guide" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2
            className="section-heading text-3xl md:text-4xl text-center mb-12 text-black"
          >
            SKINCARE GUIDE
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0">
              <Image src="/images/left1.jpg" alt="Skincare 1" width={427} height={392} className="object-cover w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px]" />
            </div>
            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0">
              <Image src="/images/left2.jpg" alt="Skincare 2" width={427} height={392} className="object-cover w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px]" />
            </div>
            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0">
              <Image src="/images/p1.jpg" alt="Skincare 3" width={427} height={392} className="object-cover w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px]" />
            </div>
          </div>
        </div>
      </section>

      <section id="makeup-trends" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2
            className="section-heading text-3xl md:text-4xl text-center mb-12 text-black"
          >
            MAKEUP TRENDS
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0">
              <Image src="/images/show1.jpg" alt="Makeup 1" width={427} height={392} className="object-cover w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px]" />
            </div>
            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0">
              <Image src="/images/show2.jpg" alt="Makeup 2" width={427} height={392} className="object-cover w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px]" />
            </div>
            <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0">
              <Image src="/images/show3.jpg" alt="Makeup 3" width={427} height={392} className="object-cover w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
