"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "./Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-100 p-4 relative">
      <Container>
        <div className="flex items-center justify-between">
          <div className="md:hidden" onClick={toggleMenu}>
            <button className="text-gray-700 focus:outline-none">
              {isOpen ? "✖️" : "☰"}
            </button>
          </div>
          <div className="text-lg font-bold">Shafi</div>
          <ul className={`hidden md:flex md:items-center md:space-x-4`}>
            <li className="py-2">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2">
              <Link href="/">About</Link>
            </li>
            <li className="py-2">
              <Link href="/">Services</Link>
            </li>
            <li className="py-2">
              <Link href="/">Contact</Link>
            </li>
            <li className="py-2">
              <Link href="/">Blog</Link>
            </li>
            <li className="py-2">
              <Link href="/">Gallery</Link>
            </li>
          </ul>
          <div className="md:visible invisible">
            <button className="focus:outline-none py-2 px-4 rounded-full bg-blue-600 text-white">
              Login
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu}
      >
        <div
          className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the drawer
        >
          <div className="flex justify-end p-4">
            <button className="text-gray-700" onClick={closeMenu}>
              ✖️
            </button>
          </div>
          <ul className="flex flex-col items-start p-4 space-y-4">
            <li>
              <Link href="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link href="/" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link href="/" onClick={closeMenu}>Services</Link>
            </li>
            <li>
              <Link href="/" onClick={closeMenu}>Contact</Link>
            </li>
            <li>
              <Link href="/" onClick={closeMenu}>Blog</Link>
            </li>
            <li>
              <Link href="/" onClick={closeMenu}>Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
