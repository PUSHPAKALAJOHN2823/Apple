import React from "react";
import { FaApple } from "react-icons/fa";

import img6 from "../assets/ipad.jpg";
import img7 from "../assets/iwatch.jpg";
import img8 from "../assets/man.jpg";
import img9 from "../assets/airpods.jpg";
import img10 from "../assets/mac.jpg";
import img11 from "../assets/iphone.jpg";

const products = [
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
    subtitle: "Power and value for learners.",
  },
  {
    img: img9,
    title: "AirPods 4",
    subtitle: "Immersive sound. Wireless freedom.",
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
];

function Products() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-6">
      <div className="grid  md:grid md:grid-cols-2 gap-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden"
          >
            <img
              src={product.img}
              alt={typeof product.title === "string" ? product.title : "Product"}
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />
            {/* TEXT OVERLAY */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
              <h1 className="text-3xl sm:text-4xl font-bold">{product.title}</h1>
              {product.subtitle && (
                <p
                  className={`mt-2 text-base sm:text-lg font-medium bg-gradient-to-r ${
                    product.gradient || "from-pink-500 to-blue-500"
                  } bg-clip-text text-transparent`}
                >
                  {product.subtitle}
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <button className="bg-blue-600 px-5 py-2 text-sm sm:text-base border border-blue-600 rounded-full hover:bg-blue-500 transition">
                  {product.buttonLabel || "Learn More"}
                </button>
                {product.buttonLabel !== "Get your estimate" && (
                  <button className="bg-transparent text-blue-500 px-5 py-2 text-sm sm:text-base border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                    Buy
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
