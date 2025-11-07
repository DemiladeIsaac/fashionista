import React from "react";

const Footer = () => {
  const navStyle = "text-[#565D6DF] text-base font-normal";
  return (
    <div
      className="mt-8 px-8 bg-[#F3F4F6FF]"
      style={{ fontFamily: "var(--font-cormorant-garamond)" }}
    >
      <div className="flex items-center max-w-[1120px] justify-between">
        <div>
          <p className="text-sm text-[#565D6DFF] font-normal w-[296px]">
            Fashionista is your ultimate destination for stylish and trendy
            fashion. Explore our curated collections and elevate your wardrobe.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-[#171A1FF]">Shop</p>
          <p className={navStyle}>All products</p>
          <p className={navStyle}>Women</p>
          <p className={navStyle}>Men</p>
          <p className={navStyle}>Accessories</p>
        </div>
        <div className="flex flex-col gap-2 h-[156px]">
          <p className="text-lg font-semibold text-[#171A1FF]">Company</p>
          <p className={navStyle}>About Us</p>
          <p className={navStyle}>Careers</p>
          <p className={navStyle}>Blog</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-[#171A1FF]">Support</p>
          <p className={navStyle}>Contact Us</p>
          <p className={navStyle}>FAQs</p>
          <p className={navStyle}>Shipping</p>
          <p className={navStyle}>Returns</p>
        </div>
      </div>
      <p className="text-center text-sm font-normal text-[#565D6DFF] mt-4">
        © 2025 Fashionista. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
