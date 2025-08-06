import React from "react";
import headImg from "../assets/head.jpg";

const Header = () => {
  return (
    <div className="w-full h-screen relative bg-slate-500 ">
      <div className="absolute top-20 text-center left-1/3 z-10 text-2xl font-bold text-black opacity-80 ">
        <h2 className="p-5 bg-sky-200 rounded-xl shadow-2xl w-80 mb-5 hover:scale-105 transition duration-300 ease-in-out">
          MacBook for Education
        </h2>
        <p className="p-5 bg-sky-200 rounded-xl shadow-2xl w-80 mb-5 hover:scale-105 transition duration-300 ease-in-out">
          MacBook helps you create, code, and collaborate like never before.
        </p>
        <button className="bg-white rounded-lg p-2 hover:bg-slate-300 transition duration-300 ease-in-out">Shop Now</button>         
      </div>
       <img
          className="w-full object-cover h-1/2 md:h-[600px] brightness-50"
          src={headImg}
        />
    </div>
  );
};

export default Header;
