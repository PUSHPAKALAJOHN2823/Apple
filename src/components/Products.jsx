import React from "react";
import { FaApple } from "react-icons/fa";

import img6 from "../assets/ipad.jpg";
import img7 from "../assets/iwatch.jpg";
import img8 from "../assets/man.jpg";
import img9 from "../assets/airpods.jpg";
import img10 from "../assets/mac.jpg";
import img11 from "../assets/iphone.jpg";

function Products() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-6">
      {/* PRODUCT GRID */}
      {[  
        {
          img: img6,
          title: "iPad Pro",
          subtitle: "Unbelievably thin. Incredibly powerful.",
        },
        {
          img: img7,
          title: "Apple Watch",
          subtitle: "Thinner. Smarter. Mightier.",
        },
        {
          img: img8,
          title: "Mac for Students",
          subtitle: "",
        },
        {
          img: img9,
          title: "AirPods 4",
          subtitle: "Thinner. Smarter. Mightier.",
        },
        {
          img: img10,
          title: "MacBook Pro",
          subtitle: "A work smart",
          gradient: "from-violet-500 to-red-500",
        },
        {
          img: img11,
          title: (
            <span className="flex items-center justify-center gap-2">
              <FaApple /> Trade In
            </span>
          ),
          subtitle: "Upgrade and save. It's that easy.",
          buttonLabel: "Get your estimate",
        },
      ].map((product, idx) => (
        <div key={idx} className="flex flex-col md:flex-row gap-4 py-4">
          {/* IMAGE */}
          <div className="relative w-full md:w-1/2 h-80 md:h-96">
            <img
              src={product.img}
              alt={typeof product.title === "string" ? product.title : "Product"}
              className="w-full h-full object-cover brightness-50 rounded-lg"
            />
            {/* OVERLAY */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 space-y-3 z-10">
              <h1 className="text-3xl sm:text-4xl font-bold">{product.title}</h1>
              {product.subtitle && (
                <h2
                  className={`text-base sm:text-lg font-medium bg-gradient-to-r ${
                    product.gradient || "from-pink-500 to-blue-500"
                  } bg-clip-text text-transparent`}
                >
                  {product.subtitle}
                </h2>
              )}
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <button className="bg-blue-600 px-4 py-2 text-sm sm:text-base border border-blue-600 rounded-full hover:bg-blue-500 transition">
                  {product.buttonLabel || "Learn More"}
                </button>
                {product.buttonLabel !== "Get your estimate" && (
                  <button className="bg-transparent text-blue-500 px-4 py-2 text-sm sm:text-base border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                    Buy
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Products;
