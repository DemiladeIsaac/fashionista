"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProductContext } from "../context/ProductContext";

const Shop = () => {
  const [min, setMin] = useState(20);
  const [max, setMax] = useState(300);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const router = useRouter();
  const { setSelectedProduct } = useProductContext();

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const getPriceNumber = (price) => Number(price.replace("$", ""));

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setMin(20);
    setMax(300);
  };

  useEffect(() => {
    const minPercent = ((min - 20) / 280) * 100;
    const maxPercent = ((max - 20) / 280) * 100;
    const track = document.getElementById("slider-track");
    if (track) {
      track.style.left = `${minPercent}%`;
      track.style.right = `${100 - maxPercent}%`;
    }
  }, [min, max]);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), max - 10);
    setMin(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), min + 10);
    setMax(value);
  };

  const handleClick = (product) => {
    setSelectedProduct(product);
    router.push(`/shop/${product.text}`);
  };

  const filterOptions = [
    { text: "Dresses" },
    { text: "Tops" },
    { text: "Blouses" },
    { text: "Skirts" },
    { text: "Jeans" },
    { text: "Bags" },
    { text: "Coats" },
    { text: "Shoes" },
    { text: "Glasses" },
    { text: "Hoodie" },
  ];

  const brandOptions = [
    { text: "Zara" },
    { text: "H & M" },
    { text: "Nike" },
    { text: "Chanel" },
    { text: "Prada" },
  ];

  const products = [
    {
      text: "Elegant Silk Blouse",
      price: "$89.99",
      img: "/images/blouse.png",
      extraImg: [
        "/images/blouse-one.png",
        "/images/blouse-two.png",
        "/images/blouse.png",
      ],
      type: "Blouses",
      brand: "Zara",
    },
    {
      text: "High-Waisted Skinny Jeans",
      price: "$75.00",
      img: "/images/skinnyjeans.png",
      extraImg: [
        "/images/blouse-one.png",
        "/images/blouse-two.png",
        "/images/skinnyjeans.png",
      ],
      type: "Jeans",
      brand: "Chanel",
    },
    {
      text: "Leather Crossbody Bag",
      price: "$120.50",
      img: "/images/crossbody.png",
      extraImg: [
        "/images/blouse-one.png",
        "/images/blouse-two.png",
        "/images/crossbody.png",
      ],
      type: "Bags",
      brand: "Prada",
    },
    {
      text: "Classic Trench Coat",
      price: "$249.99",
      img: "/images/trench-coat.png",
      extraImg: [
        "/images/blouse-one.png",
        "/images/blouse-two.png",
        "/images/trench-coat.png",
      ],
      type: "Coats",
      brand: "H & M",
    },
    {
      text: "Printed Maxi Dress",
      price: "$110.00",
      img: "/images/maxi-dress.png",
      extraImg: [
        "/images/blouse-one.png",
        "/images/blouse-two.png",
        "/images/maxi-dress.png",
      ],
      type: "Dresses",
      brand: "Zara",
    },
    {
      text: "Comfortable Knit Sweater",
      price: "$65.00",
      img: "/images/sweater.png",
      type: "Tops",
      brand: "Zara",
    },
    {
      text: "Ankle Boots with Block Heel",
      price: "$135.00",
      img: "/images/ankleboots.png",
      extraImg: ["/images/blouse-one.png", "/images/ankleboots.png"],
      type: "Shoes",
      brand: "Zara",
    },
    {
      text: "Stylish Sunglasses",
      price: "$45.00",
      img: "/images/glasses.png",
      extraImg: ["/images/blouse-one.png", "/images/glasses.png"],
      type: "Glasses",
      brand: "H & M",
    },
    {
      text: "Sporty Cropped Hoodie",
      price: "$59.99",
      img: "/images/hoodie.png",
      extraImg: ["/images/blouse-one.png", "/images/hoodie.png"],
      type: "Hoodie",
      brand: "Nike",
    },
    {
      text: "Elegant Pleated Skirt",
      price: "$70.00",
      img: "/images/skirt.png",
      extraImg: ["/images/blouse-one.png", "/images/skirt.png"],
      type: "Skirts",
      brand: "H & M",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const price = getPriceNumber(product.price);

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.type);

    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    const matchesPrice = price >= min && price <= max;

    return matchesCategory && matchesBrand && matchesPrice;
  });

  return (
    <>
      <div
        className="max-w-[1120px] mx-12"
        style={{ fontFamily: "var(--font-cormorant-garamond)" }}
      >
        <div className="flex justify-between">
          <div className="flex flex-col w-[30%]">
            <div className="flex items-center gap-2">
              <Image
                src="/images/filter.svg"
                width={20}
                height={20}
                alt="filter"
              />
              <p className="text-lg text-[#171A1FF] font-semibold">Filters</p>
            </div>
            <div className="mt-4">
              <p>Categories</p>
              {filterOptions.map((filter, index) => (
                <label
                  key={index}
                  className="mt-2 flex items-center space-x-2 text-gray-600 text-sm font-normal cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(filter.text)}
                    onChange={() => handleCategoryChange(filter.text)}
                    className="w-4 h-4 border border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 focus:ring-1"
                  />
                  <span>{filter.text}</span>
                </label>
              ))}
            </div>
            <div className="mt-4">
              <div className="w-80 space-y-3">
                {/* Label */}
                <div className="flex items-center justify-between text-sm font-medium text-gray-700">
                  <span>Price Range</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m6 9 6 6 6-6"
                    />
                  </svg>
                </div>

                {/* Range Slider */}
                <div className="relative mt-2">
                  <div
                    className="range-slider relative bg-gray-300"
                    id="slider"
                  >
                    <div
                      id="slider-track"
                      className="slider-track absolute"
                    ></div>

                    <input
                      type="range"
                      min="20"
                      max="300"
                      value={min}
                      onChange={handleMinChange}
                      className="absolute w-full h-0.5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto"
                    />
                    <input
                      type="range"
                      min="20"
                      max="300"
                      value={max}
                      onChange={handleMaxChange}
                      className="absolute w-full h-0.5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto"
                    />
                  </div>
                </div>

                {/* Values */}
                <div className="flex justify-between text-sm text-gray-500 font-medium">
                  <span>${min.toFixed(2)}</span>
                  <span>${max.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p>Brands</p>
              {brandOptions.map((brand, index) => (
                <label
                  key={index}
                  className="mt-2 flex items-center space-x-2 text-gray-600 text-sm font-normal cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand.text)}
                    onChange={() => handleBrandChange(brand.text)}
                    className="w-4 h-4 border border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 focus:ring-1"
                  />
                  <span>{brand.text}</span>
                </label>
              ))}
            </div>
            <div className="flex flex-col mt-4">
              {/* <button className="w-70 h-10 px-3 text-white bg-[#0D59F2FF] rounded-md font-medium text-sm cursor-pointer">
                Apply Filters
              </button> */}
              <button
                onClick={clearFilters}
                className="mt-2 w-70 h-10 border border-[#DEE1E6FF] px-3 font-medium text-sm rounded-md text-[#171A1FFF] bg-white cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          </div>
          <div className="w-[70%]">
            <h2 className="text-2xl font-bold text-[#171A1FFF]">
              All Products
            </h2>
            <div className="grid grid-cols-4 gap-4 mt-2">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="cursor-pointer flex flex-col gap-2 hover:scale-105 transition"
                  onClick={() => handleClick(product)}
                >
                  <img
                    src={product.img}
                    alt={product.text}
                    className="w-[200px] h-60 rounded-md"
                  />
                  <p className="text-base text-[#171A1FFF] font-medium">
                    {product.text}
                  </p>
                  <p className="text-[#0D59F2FF] text-lg font-semibold">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
