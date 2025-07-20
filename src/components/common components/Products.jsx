import React from "react";
import "./ProductStyles.css";
import Image from "next/image";

const Products = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`border-2 border-dashed border-purple-200 p-[18px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group`}
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <div className=" flex justify-center relative overflow-hidden">
            <div>
              <Image
                src={product.image}
                alt="products"
                width={304}
                height={283}
                className="object-cover !h-[283px]"
              />{" "}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6">
            <div className="flex items-center justify-between mb-2">
              <h3
                className={`abhaya-heading font-extrabold text-[24px] text-gray-800`}
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
            <p className="style={{ fontFamily: 'Sansation Light, sans-serif' }} text-gray-700 text-center pt-[17px] text-[12px] mb-4 line-clamp-2 leading-tight">
              {product.description}
            </p>

            <button className="style={{ fontFamily: 'Sansation Light, sans-serif' }} bg-black text-white px-6 sm:px-8 text-[10px] sm:text-[10px] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-[120px] h-[30px] sm:w-auto">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
