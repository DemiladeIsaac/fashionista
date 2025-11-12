import React from "react";
import Footer from "../../../components/Footer";

const CartPage = () => {
  const items = [
    {
      text: "Urban Kicks",
      name: "Design White Sneakers",
      size: "40",
      price: "95.00",
      img: "/images/sneakers.png",
    },
    {
      text: "Modern Attire",
      name: "Slim Fit Navy Blazer",
      size: "M",
      price: "120.00",
      img: "/images/monochrome-top.png",
    },
  ];
  return (
    <>
      <div
        className="max-w-[1300px] mx-auto"
        style={{ fontFamily: "var(--font-cormorant-garamond)" }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-[#171A1FFF]">
            Your Shopping bag
          </h1>
          <p className="text-[#0D59F2FF] text-sm font-medium">
            Continue Shopping
          </p>
        </div>
        <div className="flex items-center gap-0.5 mt-8">
          <img src="/images/info.svg" className="w-4 h-4" />
          <p>
            Import duties are included. Estimated delivery in 5-7 business days.
          </p>
        </div>
        <section className="flex items-center justify-between gap-2 mt-8">
          <div className="flex flex-col gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center w-[880px] justify-between"
              >
                <div className="flex gap-2">
                  <img src={item.img} className="w-24 h-24 rounded-sm" />
                  <div className="flex flex-col">
                    <p className="text-[#565D6DFF] text-sm font-medium">
                      {item.text}
                    </p>
                    <p className="font-semibold text-lg text-[#171A1FFF]">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#565D6DFF]">Size:{item.size}</p>
                    <p className="text-lg text-[#171A1FFF] font-bold">
                      ${item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-1">
                    <button className="text-[#171A1FFF] flex items-center justify-center text-2xl px-2.5 w-8 h-8 rounded-md bg-white border border-[#DEE1E6FF]">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      </span>
                    </button>
                    <p className="px-3 w-16 h-10 text-2xl text-center bg-white border border-[#DEE1E6FF] text-[#171A1FFF]">
                      1
                    </p>
                    <button className="text-[#171A1FFF] flex justify-center items-center text-2xl px-2.5 w-8 h-8 rounded-md bg-white border border-[#DEE1E6FF]">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 5v14M5 12h14"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <button className="text-3xl text-[#565D6DFF]">
                    <span>
                      <img src="/images/x.svg" className="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-[#DEE1E6FF] shadow-md rounded-md w-[427px] p-4">
            <p className="text-xl font-bold text-[#171A1FFF]">Order Summary</p>
            <div>
              <div className="flex items-center justify-between">
                <p>Subtotal:</p>
                <p>$365.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Shipping:</p>
                <p>$10.00</p>
              </div>
              <div className="flex items-center justify-between border-t border-[#DEE1E6FF]">
                <p className="text-lg font-bold text-[#171A1FFF]">Total</p>
                <p className="text-lg font-bold text-[#171A1FFF]">$375.00</p>
              </div>
            </div>
            <div className="mt-2">
              <button className="text-white text-base font-medium bg-[#0D59F2FF] rounded-md px-3 w-[393px] h-11 hover:text-white hover:bg-[#0A49C6FF] cursor-pointer">
                Proceed to Checkout
              </button>
              <button className="text-[#171A1FFF] text-base font-medium border border-[#DEE1E6FF] hover:bg-[#FFFFFFFF] hover:text-[#171A1FFF] rounded-md px-3 w-[393px] h-11 cursor-pointer">
                Continue Shopping
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
