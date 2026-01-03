import React from "react";
import Appeal from "../public/images/women-appeal.png";
import MensWear from "../public/images/mens-wear.png";
import Jewellry from "../public/images/jewellry.png";
import Footwear from "../public/images/footwear.png";
import Accessory from "../public/images/accessories.png";
import Outerwear from "../public/images/outerwear.png";
import Image from "next/image";

const Category = () => {
  const categories = [
    {
      img: Appeal,
      text: "Women's Apparel",
    },
    {
      img: MensWear,
      text: "Men's Wear",
    },
    {
      img: Jewellry,
      text: "Jewelry",
    },
    {
      img: Footwear,
      text: "Footwear",
    },
    {
      img: Accessory,
      text: "Accessories",
    },
    {
      img: Outerwear,
      text: "Outerwear",
    },
  ];
  return (
    <div className="mt-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-[#171A1FFF] font-bold">
          Shop by Category
        </h1>
        <div className="w-24 border border-[#0D59F2FF] mt-2"></div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative w-full aspect-187/159 rounded-lg overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={category.img}
              alt={category.text}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

            {/* Centered text */}
            <div className="relative h-full flex items-end justify-center pb-4 text-white text-sm font-semibold">
              {category.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
