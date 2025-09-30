import React from "react";
import "./ProductStyles.css";
import Image from "next/image";

const Products = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`custom-border p-10 rounded-none transition-all duration-500 group bg-transparent shadow-none`}
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <div className=" flex items-center justify-center relative overflow-hidden">
            <div>
              <Image
                src={product.image}
                alt="products"
                width={304}
                height={283}
                className="object-cover !h-[150px] sm:!h-[165px] md:!h-[175px] lg:!h-[185px] mx-auto"
              />{" "}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-4 md:p-5 text-center gap-2">
            <div className="flex items-center justify-between mb-2">
              <h3
                className={`abhaya-heading font-extrabold text-[18px] sm:text-[20px] text-gray-800 text-center`}
              >
                {product.title}
              </h3>
              <style jsx>{`
                @import url("https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@800&display=swap");
                .abhaya-heading {
                  font-family: "Abhaya Libre", serif;
                  font-weight: 800;
                }
              `}</style>
            </div>
            <p className="style={{ fontFamily: 'Sansation Light, sans-serif' }} text-gray-700 text-center pt-[6px] text-[10px] sm:text-[11px] mb-2 leading-snug max-w-[80%] mx-auto">
              {product.description}
            </p>

            <button className="style={{ fontFamily: 'Sansation Light, sans-serif' }} bg-black text-white px-5 sm:px-6 text-[9px] sm:text-[10px] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-[100px] h-[26px] sm:w-auto cursor-pointer">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
