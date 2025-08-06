import React, { useState } from "react";
import {
  FaApple,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  {
    name: "Store",
    href: "/store",
  },
  {
    name: "Mac",
    href: "/mac",
  },
  {
    name: "iPad",
    href: "/ipad",
  },
  {
    name: "iPhone",
    href: "/iphone",
  },
  {
    name: "Watch",
    href: "/watch",
  },
  {
    name: "AirPods",
    href: "/airpods",
  },
  {
    name: "TV&Homes",
    href: "/tvhomes",
  },
  {
    name: "Accessories",
    href: "/accessories",
  },
  {
    name: "Support",
    href: "/support",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="top-0 sticky z-50">
      <div className="flex justify-around items-center bg-gray-400 p-2 text-xl">
        <h1 className="text-4xl">
          <FaApple />
        </h1>
        <ul className="hidden md:flex justify-between gap-5 text-xl ">
          {navLinks.map((links, index) => (
            <li key={index} className="hover:bg-slate-200 p-1 rounded-lg">
              <a href={links.href}>{links.name}</a>
            </li>
          ))}

        </ul>

        <div className="flex justify-between gap-5 text-2xl">
          <h1>
            <FaSearch />
          </h1>
          <h1>
            <FaShoppingBag />
          </h1>
          <div className="md:hidden cursor-pointer" onClick={() =>setShowMenu(true)}>
            <FaBars />
          </div>
        </div>
        {showMenu && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-300 p-4 shadow-lg z-40 transition-all duration-300 ease-in-out">
            <div className="flex justify-end mb-2">
              <FaTimes
                onClick={() => setShowMenu(false)}
                className="text-2xl cursor-pointer"
              />
            </div>
            <ul className="flex flex-col gap-3 text-lg">
              {navLinks.map((link, index) => (
                <li key={index} className="hover:bg-slate-200 p-2 rounded-md">
                  <a href={link.href} onClick={() => setShowMenu(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" p-2 text-center shadow-xl sticky bg-white z-10 top-0">
        <h1>
          Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant
          cashback‡ on selected products with eligible cards
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
