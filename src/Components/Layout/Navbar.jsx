import React from "react";
import logo from "../../assets/logo.svg"
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {


  return (
    <nav className="navbar bg-base-100 shadow-sm container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><NavLink to="/" className={({ isActive }) =>isActive ? "text-green-500 font-bold" : "text-black"}>Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) =>isActive ? "text-green-500 font-bold" : "text-black"}>About</NavLink></li>
              <li><NavLink to="/services" className={({ isActive }) =>isActive ? "text-green-500 font-bold" : "text-black"}>Services</NavLink></li>
              <li><NavLink to="/blog" className={({ isActive }) =>isActive ? "text-green-500 font-bold" : "text-black"}>Blog</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) =>isActive ? "text-green-500 font-bold" : "text-black"}>Contact</NavLink></li>
               <a className="btn md:py-7 md:px-9 border border-[#FF3811] text-[#FF3811] text-[18px] font-bold">Appointment</a>
            </ul>
          </div>
          <a className="cursor-pointer">
            <img className="w-[50px] md:w-[100px]" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[18px] font-bold"><NavLink to="/" className={({ isActive }) =>isActive ? "text-green-500 font-bold hover:bg-white" : "text-black hover:bg-white"}>Home</NavLink></li>
            <li className="text-[18px] font-bold"><NavLink to="/about" className={({ isActive }) =>isActive ? "text-green-500 font-bold hover:bg-white" : "text-black hover:bg-white"}>About</NavLink></li>
            <li className="text-[18px] font-bold"><NavLink to="/services" className={({ isActive }) =>isActive ? "text-green-500 font-bold hover:bg-white" : "text-black hover:bg-white"}>Services</NavLink></li>
            <li className="text-[18px] font-bold"><NavLink to="/blog" className={({ isActive }) =>isActive ? "text-green-500 font-bold hover:bg-white" : "text-black hover:bg-white"}>Blog</NavLink></li>
            <li className="text-[18px] font-bold"><NavLink to="/contact" className={({ isActive }) =>isActive ? "text-green-500 font-bold hover:bg-white" : "text-black hover:bg-white"}>Contact</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="text-[30px] mr-6"><FaSearch  /></button>
          <button className="text-[30px] mr-6"><FaShoppingBag /></button>
          <a className="btn hidden md:block px-10 pt-3 border border-[#FF3811] text-[#FF3811] text-[18px] font-bold ">Appointment</a>
        </div>
      </nav>
  );
};


export default Navbar;
