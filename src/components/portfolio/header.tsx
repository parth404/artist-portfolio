"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Header() {
  // const [nav, setNav] = useState(false);

  // const handleNav = () => {
  //   setNav(!nav);
  // };

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isStudio, setIsStudio] = useState(false);
  const path = usePathname();

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY || isStudio) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (path.includes("studio")) {
      setIsStudio(true);
    } else {
      setIsStudio(false);
    }
  }, [path]);

  return (
    <header
      className={`${
        show && "hidden"
      } z-40 font-halyard fixed top-0 flex justify-center w-screen p-2 md:p-8 mix-blend-difference`}
    >
      <div className="flex justify-between items-center h-14 w-full max-w-[1440px] mx-auto uppercase z-50 ">
        <div className=" text-white">
          <Link className="flex items-center m-4" href="/">
            <h1 className="text-lg md:text-xl w-full font-bold uppercase">
              nishant
            </h1>
          </Link>
        </div>
        <div>
          <Link
            className=" right-2 items-center m-4 flex text-white text-sm hover:underline underline-offset-4 "
            href="/about"
          >
            <h1 className="text-sm md:text-[16px]">About</h1>
          </Link>
        </div>
        {/* <div
          onClick={handleNav}
          className="block md:hidden z-50 mix-blend-difference"
        >
          {nav ? (
            <XMarkIcon className="h-6 w-6 text-white mr-2" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white mr-2" />
          )}
        </div> */}
        {/* <div
          className={
            nav
              ? "fixed flex left-0 top-0 h-full w-full z-30 border-r border-r-gray-900 ease-in-out duration-700"
              : "fixed left-[-100%] top-0 w-[60%] z-50 h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
          }
        >
          <div className="w-[60%] bg-[#0e0d0d]">
            <Link className="flex items-center m-4" href="/">
              <h1 className="text-2xl w-full font-bold text-white uppercase">
                technodelic
              </h1>
            </Link>
            <ul
              className="uppercase p-4 text-white"
              onClick={() => setNav(!nav)}
            >
              <a href="/#about">
                <li className="p-4 border-b border-gray-600">About</li>
              </a>
              <a href="/#gallery">
                <li className="p-4 border-b border-gray-600">Gallery</li>
              </a>
              <a href="/#events">
                <li className="p-4 border-b border-gray-600">Events</li>
              </a>
              <a href="/#contact">
                <li className="p-4">Contact</li>
              </a>
            </ul>
          </div>
          <div className=" w-[40%] bg-black/50 "></div>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
