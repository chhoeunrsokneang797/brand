import React, { useState } from "react";
import { Link,animateScroll as scroll, scrollSpy } from 'react-scroll';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="w-screen h-[80px] bg-white z-10 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        {/* //// Header */}
        <div className="flex items-center">
          <h1 className="font-bold text-3xl mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
        <li> <Link   to="home"  smooth={true} offset={50} duration={500} >Home </Link></li> 
        <li> <Link   to="about"  smooth={true} offset={50} duration={500} >About </Link></li> 
        <li> <Link   to="support"  smooth={true} offset={50} duration={500} >Support </Link></li> 
        <li> <Link   to="pricing"  smooth={true} offset={50} duration={500} >Platforms </Link></li> 
        <li> <Link   to="plancfrom"  smooth={true} offset={50} duration={500} >Pricing </Link></li> 
            
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        {/* /// The end header */}
        {/* /// Navationg */}
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <i className="fa-solid fa-bars text-xl"></i>
          ) : (
            <i className="fa-solid fa-xmark text-xl"></i>
          )}
        </div>
      </div>
      {/* /// Navigationg into */}
      <ul className={!nav ? "hidden" : "absolute bg-white w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px- py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3 ">Sign In</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
