"use client";

import Link from "next/link";
import Image from "next/image";
import { CircleEllipsis, CircleHelp, Earth, Layers, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [optionsToggled, setOptionsToggled] = useState(false);

  return (
    <header className="shadow-white shadow-sm">
      <nav className="max-w-5xl py-5 relative flex items-center  justify-between">
        <div className=" flex justify-between items-center">
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
            <span className="text-md">How to use ?</span>
          </Link>
        </div>
        <div className="flex items-center">
          <button onClick={() => setOptionsToggled(!optionsToggled)}>
            {optionsToggled ? (
              <CircleEllipsis height={20} />
            ) : (
              <X height={20} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
