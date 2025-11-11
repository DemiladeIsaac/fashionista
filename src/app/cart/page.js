import React from "react";

const CartPage = () => {
  return (
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
      <section className="flex items-center justify-between mt-8">
        <div className="flex items-center w-[886px] justify-between">
          <div className="flex gap-1">
            <img src="/images/sneakers.png" className="w-24 h-24 rounded-sm" />
            <div className="flex flex-col">
              <p>Modern Attire</p>
              <p>Slim Fit Navy Blazer</p>
              <p>Size:M</p>
              <p>$120.00</p>
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
        <div></div>
      </section>
    </div>
  );
};

export default CartPage;
