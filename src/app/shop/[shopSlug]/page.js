"use client";

import { useProductContext } from "@/app/context/ProductContext";
import { useEffect, useState } from "react";

export default function ProductDetailsPage() {
  const { selectedProduct, setSelectedProduct } = useProductContext();

  const [size, setSize] = useState("XS");
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (selectedProduct) {
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    }
  }, [selectedProduct]);

  useEffect(() => {
    const stored = localStorage.getItem("selectedProduct");
    if (stored) setSelectedProduct(JSON.parse(stored));
  }, []);

  if (!selectedProduct) return <p>Loading...</p>;

  let activeClass = "bg-[#0D59F2FF] text-white cursor-pointer";
  let inactiveClass =
    "bg-white border border-[#DEE1E6FF] cursor-pointer text-[#171A1FFF]";

  return (
    <div
      className="max-w-[1120px] mx-auto"
      style={{ fontFamily: "var(--font-cormorant-garamond)" }}
    >
      <div className="flex gap-6">
        <div className="flex flex-col">
          <img
            src={selectedProduct.img}
            alt={selectedProduct.text}
            className="w-[568px] h-[568px] object-cover rounded-md"
          />
          <div className="flex items-center gap-1 mt-2">
            {selectedProduct.extraImg.map((extra, index) => (
              <img
                key={index}
                src={extra}
                alt="cloth"
                className="w-[92px] h-[92px] rounded-md"
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-[#171A1FFF]">
            {selectedProduct.text}
          </h1>
          <div className="flex items-center mt-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src="/images/star.svg" alt="star" />
            ))}
          </div>
          <p className="text-3xl text-[#0D59F2FF] font-bold mt-2">
            {selectedProduct.price}
          </p>
          <p className="text-lg font-semibold text-[#171A1FFF]">Key Features</p>
          <p className="mt-2 text-base font-normal text-[#565D6DFF]">
            . 100% Pure Mulberry Silk
          </p>
          <p className="text-base font-normal text-[#565D6DFF]">
            . Breathable & Hypoallergenic
          </p>
          <p className="text-base font-normal text-[#565D6DFF]">
            . Delicate Button Cuffs
          </p>
          <div className="mt-2">
            <p className="text-lg font-semibold text-[#171A1FFF]">
              Size {size}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setSize("XS")}
                className={`${
                  size === "XS" ? activeClass : inactiveClass
                } text-sm w-[50px] h-10 font-medium px-3 rounded-md`}
              >
                XS
              </button>
              <button
                onClick={() => setSize("S")}
                className={`${
                  size === "S" ? activeClass : inactiveClass
                } text-sm w-[50px] h-10 font-medium px-3 rounded-md`}
              >
                S
              </button>
              <button
                onClick={() => setSize("M")}
                className={`${
                  size === "M" ? activeClass : inactiveClass
                } text-sm w-[50px] h-10 font-medium px-3 rounded-md`}
              >
                M
              </button>
              <button
                onClick={() => setSize("L")}
                className={`${
                  size === "L" ? activeClass : inactiveClass
                } text-sm w-[50px] h-10 font-medium px-3 rounded-md`}
              >
                L
              </button>
              <button
                onClick={() => setSize("XL")}
                className={`${
                  size === "XL" ? activeClass : inactiveClass
                } text-sm w-[50px] h-10 font-medium px-3 rounded-md`}
              >
                XL
              </button>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-lg font-semibold text-[#171A1FFF]">Quantity</p>
            <div className="flex items-center">
              <button className="w-10 h-10 px-2.5 cursor-pointer bg-white text-[#171A1FFF] border border-[#DEE1E6FF] rounded-md">
                -
              </button>
              <p className="w-16 h-10 text-center rounded-md bg-white text-2xl border border-[#DEE1E6FF] px-3">
                {count}
              </p>
              <button className="w-10 h-10 px-2.5 bg-white cursor-pointer text-[#171A1FFF] border border-[#DEE1E6FF] rounded-md">
                +
              </button>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-[#0D59F2FF] hover:bg-[#0A49C6FF] cursor-pointer w-[275px] h-10 px-3 font-medium text-white text-sm rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
