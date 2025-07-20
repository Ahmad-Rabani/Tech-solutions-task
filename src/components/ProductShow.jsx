import React from "react";
import Image from "next/image";
const ProductShow = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0">
        <Image
          src="/images/show1.jpg"
          alt="products"
          width={427}
          height={392}
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0">
        <Image
          src="/images/show2.jpg"
          alt="products"
          width={427}
          height={392}
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-0">
        <Image
          src="/images/show3.jpg"
          alt="products"
          width={427}
          height={392}
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ProductShow;
