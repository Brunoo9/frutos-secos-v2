// import { products } from "../../data/db";
// import ProductCard from "../Products/ProductCard";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="bg-cream p-4 h-auto w-full">
        <Navbar />

        <section className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 px-4 lg:px-0">
          <div className="flex flex-col gap-4 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Disfrutá de los
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              mejores <span className="text-orange-custom">frutos secos</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-700 max-w-md lg:max-w-none">
              Nutrí tu cuerpo y eleva tu energía con los frutos secos más
              frescos y deliciosos
            </p>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute top-4 md:top-6 lg:top-9 -left-16 md:-left-18 lg:-left-21 w-[200px] md:w-[240px] lg:w-[283px] h-[50px] md:h-[60px] lg:h-[69px] rounded-full bg-white/60 backdrop-blur z-10"></div>

            {/* Cartel principal */}
            <div className="absolute top-5 md:top-7 lg:top-10 -left-15 md:-left-17 lg:-left-20 w-[200px] md:w-[240px] lg:w-[271px] h-[40px] md:h-[50px] lg:h-[57px] rounded-full bg-white flex items-center justify-center z-20">
              <span className="text-brown-custom text-lg md:text-xl lg:text-[24px] font-semibold">
                Especial
              </span>
            </div>

            <div className="rounded-full bg-brown-custom w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[416px] lg:h-[416px] flex items-center justify-center relative">
              <img
                src="../frutos-secos-main.png"
                className="z-20 w-60 md:w-78 lg:w-70 lg:w-auto"
              />
            </div>
          </div>
        </section>

        <div className=" ml-12 mt-16 md:mt-20 lg:mt-24 flex flex-col items-center justify-center px-4">
          <h2 className="relative text-2xl md:text-3xl mb-6 font-semibold text-gray-800 ">
            Los más elegidos
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 md:w-14 lg:w-16 h-1 bg-orange-custom rounded-full"></div>
          </h2>

          {/* <div className="relative w-[70%] h-[250px] bg-orange-500 rounded-4xl flex items-center justify-center">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center flex-wrap">
              <ProductCard product={products[3]} />
              <ProductCard product={products[1]} />
              <ProductCard product={products[5]} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
