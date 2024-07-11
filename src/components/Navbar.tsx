// components/Navbar.js

"use client";

import Link from "next/link";
import { CircleEllipsis, CircleHelp, Earth, Layers, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { BsCircleFill } from "react-icons/bs";
import OptionsContainer from "./OptionsContainer";

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
    <header className="dark:shadow-gray-700 shadow-sm px-10 lg:px-48 ">
      <nav className="max-w-5xl py-5 flex items-center justify-between">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex justify-center items-center space-x-1">
            <BsCircleFill width={20} />
            <span className="uppercase">ThreadSphere</span>
          </Link>
        </div>
        <div className="justify-between items-center space-x-4 hidden md:flex lg:flex">
          <Link href="/" className="flex justify-center items-center space-x-1">
            <Layers height={19} />
            <span className="text-md">Feed</span>
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
          {optionsToggled && <OptionsContainer dropdownRef={dropdownRef} />}
        </div>
      </nav>
    </header>
  );
}
