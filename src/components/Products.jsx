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
    <section className="mx-5">
      {/* ROW 1 */}
      <div className="flex flex-col md:flex-row gap-2 py-4 h-96">
        {/* iPad Pro */}
        <div className="relative w-full md:w-1/2">
          <img src={img6} className="w-full h-full object-cover brightness-50" alt="iPad Pro" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold space-y-3 z-10 text-center">
            <h1 className="text-4xl">iPad Pro</h1>
            <h2 className="text-xl bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Unbelievably thin. Incredibly powerful.
            </h2>
            <div className="flex space-x-4 mt-2">
              <button className="bg-blue-600 px-4 py-2 border border-blue-600 rounded-full hover:bg-blue-500 transition">
                Learn More
              </button>
              <button className="bg-transparent text-blue-500 px-4 py-2 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                Buy
              </button>
            </div>
          </div>
        </div>

        {/* Apple Watch */}
        <div className="relative w-full md:w-1/2">
          <img src={img7} className="w-full h-full object-cover brightness-50" alt="Apple Watch" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold space-y-3 z-10 text-center">
            <h1 className="text-4xl">Apple Watch</h1>
            <h2 className="text-xl bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Thinner. Smarter. Mightier.
            </h2>
            <div className="flex space-x-4 mt-2">
              <button className="bg-blue-600 px-4 py-2 border border-blue-600 rounded-full hover:bg-blue-500 transition">
                Learn More
              </button>
              <button className="bg-transparent text-blue-500 px-4 py-2 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="flex flex-col md:flex-row gap-2 py-4 h-96">
        {/* Mac for Students */}
        <div className="relative w-full md:w-1/2">
          <img src={img8} className="w-full h-full object-cover brightness-50" alt="Mac Students" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-center space-y-3 z-10">
            <h1 className="text-5xl">Mac for Students</h1>
            <button className="bg-blue-600 px-4 py-2 border border-blue-600 rounded-full hover:bg-blue-500 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* AirPods */}
        <div className="relative w-full md:w-1/2">
          <img src={img9} className="w-full h-full object-cover brightness-50" alt="AirPods" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-center space-y-3 z-10">
            <h1 className="text-4xl">AirPods 4</h1>
            <h2 className="text-xl bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Thinner. Smarter. Mightier.
            </h2>
            <div className="flex space-x-4 mt-2">
              <button className="bg-blue-600 px-4 py-2 border border-blue-600 rounded-full hover:bg-blue-500 transition">
                Learn More
              </button>
              <button className="bg-transparent text-blue-500 px-4 py-2 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="flex flex-col md:flex-row gap-2 py-4 h-96">
        {/* MacBook Pro */}
        <div className="relative w-full md:w-1/2">
          <img src={img10} className="w-full h-full object-cover brightness-50" alt="MacBook Pro" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-center space-y-3 z-10">
            <h1 className="text-4xl">MacBook Pro</h1>
            <h2 className="text-xl bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent">
              A work smart
            </h2>
            <div className="flex space-x-4 mt-2">
              <button className="bg-blue-600 px-4 py-2 border border-blue-600 rounded-full hover:bg-blue-500 transition">
                Learn More
              </button>
              <button className="bg-transparent text-blue-500 px-4 py-2 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                Buy
              </button>
            </div>
          </div>
        </div>

        {/* Trade In */}
        <div className="relative w-full md:w-1/2">
          <img src={img11} className="w-full h-full object-cover brightness-50" alt="Trade In" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-center space-y-3 z-10">
            <h1 className="text-4xl flex items-center gap-2"><FaApple /> Trade In</h1>
            <h2 className="text-xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Upgrade and save. It's that easy.
            </h2>
            <button className="bg-blue-600 px-4 py-2 border border-blue-600 rounded-full hover:bg-blue-500 transition">
              Get your estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
