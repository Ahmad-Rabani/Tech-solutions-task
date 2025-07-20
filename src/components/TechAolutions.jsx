"use client";

import React, { useState, useEffect } from "react";
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className=" text-3xl md:text-4xl font-bold text-center mb-12 text-black"
            style={{
              fontFamily: "Sansation",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            POPULAR POSTS
          </h2>

          <Products products={products} />
        </div>
      </section>

      <ProductShow />
      <LatestBlogLayout />

      {/* Footer */}
      <Footer />
    </div>
  );
}
