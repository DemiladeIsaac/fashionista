"use client";

import Link from "next/link";
import React from "react";
import Cart from "../public/images/shopping-cart.svg";
import Profile from "../public/images/profile.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const links = [
    { text: "Home", to: "/" },
    { text: "Shop", to: "/shop" },
    { text: "Categories", to: "/categories" },
    { text: "Sale", to: "/sale" },
  ];
  return (
    <div className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center space-x-6">
        <h1
          className="text-[31px] text-[#0D59F2FF]"
          style={{ fontFamily: "var(--font-cormorant-garamond)" }}
        >
          Fashionista
        </h1>
        {links.map((link) => {
          const isActive = pathname === link.to;
          return (
            <Link
              key={link.text}
              href={link.to}
              className={`text-sm font-medium ${
                isActive ? "text-[#0D59F2FF]" : "text-[#171A1FFF]"
              }`}
            >
              {link.text}
            </Link>
          );
        })}
      </div>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-600 absolute top-3 left-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.6-5.4A7 7 0 1 1 5 5a7 7 0 0 1 13.25 6.25z"
          />
        </svg>
        <input
          placeholder="Search products..."
          className="w-[384px] h-10 pl-[34px] pr-3 text-sm bg-white border border-[#DEE1E6FF] rounded-md focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-1">
        <Image src={Cart} alt="cart" width={20} height={20} />
        <Image
          src={Profile}
          alt="profile"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
