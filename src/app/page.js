import Image from "next/image";
import Category from "../../components/Category";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <div
        className="max-w-[1120px] mx-auto px-8"
        style={{ fontFamily: "var(--font-cormorant-garamond)" }}
      >
        <div className="flex flex-col items-center">
          <h1
            className="text-4xl mt-2 font-extrabold text-[#171A1FFF]"
            style={{ fontFamily: "var(--font-cormorant-garamond)" }}
          >
            Elevate Your Style
          </h1>
          <p className="text-lg mt-2 font-nomal text-[#565D6DFF]">
            Discover the latest trends and timeless pieces for every occasion.
          </p>
        </div>
        <div className="flex items-center space-x-6 mt-2">
          <div className="relative bg-[url('/images/summer.png')] bg-cover bg-center text-white w-[656px] h-[369px] flex items-center justify-center rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative text-center px-6">
              <p className="text-4xl font-bold">Summer Breeze Collection</p>
              <p className="mt-2 mb-4 text-[20px] w-md">
                Discover our latest arrivals designed for effortless elegance
                and comfort.
              </p>
              <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                Shop New Arrivals
              </button>
            </div>
          </div>
          <div className="relative bg-[url('/images/bag.png')] bg-cover bg-center text-white w-[656px] h-[369px] flex items-center justify-center rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative text-center px-6">
              <p className="text-4xl font-bold">Up to 50% Off Select Styles </p>
              <p className="mt-2 mb-4 text-[20px] w-md">
                Upgrade your wardrobe with our limited-time seasonal sale. Don't
                miss out!
              </p>
              <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                Explore Sale Items
              </button>
            </div>
          </div>
        </div>
        <Category />
      </div>
      <Footer />
    </>
  );
}
