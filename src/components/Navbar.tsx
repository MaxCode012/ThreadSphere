"use client";

import Link from "next/link";
import Image from "next/image";
import { CircleEllipsis, CircleHelp, Earth, Layers, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [optionsToggled, setOptionsToggled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOptionsToggled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="shadow-gray-700 shadow-sm px-10 lg:px-48 ">
      <nav className="max-w-5xl py-5 flex items-center justify-between">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex justify-center items-center space-x-1">
            <Image src={"/logo.png"} width={20} height={20} alt="logo" />
            <span className="uppercase">ThreadSphere</span>
          </Link>
        </div>
        <div className="flex justify-between items-center space-x-4">
          <Link href="/" className="flex justify-center items-center space-x-1">
            <Layers height={19} />
            <span className="text-md">Posts</span>
          </Link>
          <Link
            href="/news"
            className="flex justify-center items-center space-x-1"
          >
            <Earth height={19} />
            <span className="text-md">News</span>
          </Link>
          <Link
            href="/qa"
            className="flex justify-center items-center space-x-1"
          >
            <CircleHelp height={19} />
            <span className="text-md">How to use?</span>
          </Link>
        </div>
        <div className="relative flex items-center">
          <button
            className="lg:translate-x-14"
            onClick={() => setOptionsToggled(!optionsToggled)}
          >
            {optionsToggled ? (
              <X height={20} />
            ) : (
              <CircleEllipsis height={20} />
            )}
          </button>
          {optionsToggled && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-48 bg-container shadow-lg rounded-lg py-2 z-50"
            >
              <Link
                href="/signin"
                className="block px-4 py-2 text-white hover:bg-hover"
              >
                Sign in
              </Link>
              <button className="block w-full text-left px-4 py-2 text-white hover:bg-hover">
                Toggle Light Theme
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
