import { products } from "../../data/db";
import ProductCard from "../Products/ProductCard";

const SectionMostChosen = () => {
  return (
    <div className="mt-16 md:mt-20 lg:mt-24 flex flex-col items-center justify-center px-4">
      {/* Título con más separación */}
      <div className="w-full max-w-6xl flex justify-start mb-4">
        <h2 className="relative text-2xl md:text-3xl font-semibold text-gray-800">
          Los más elegidos
          <div className="absolute bottom-0 left-0 w-12 md:w-14 lg:w-16 h-1 bg-orange-custom rounded-full"></div>
        </h2>
      </div>

      {/* Fondo naranja con tarjetas en la parte superior - solo visible desde 1000px */}
      <div className="relative w-full top-30 max-w-6xl h-[350px] hidden lg:flex items-start justify-center pt-16 bg-orange-custom-light rounded-[90px]">
        <div className="flex absolute -top-25 flex-col sm:flex-row gap-8 sm:gap-14 justify-center items-center">
          <ProductCard product={products[5]} />
          <ProductCard product={products[1]} />
          <ProductCard product={products[2]} />
        </div>
      </div>

      {/* Versión mobile/tablet sin fondo naranja - hasta 1000px */}
      <div className="flex lg:hidden flex-wrap gap-6 justify-center items-center w-full px-4 max-w-4xl mx-auto">
        <ProductCard product={products[5]} />
        <ProductCard product={products[1]} />
        <ProductCard product={products[2]} />
      </div>
    </div>
  );
};

export default SectionMostChosen;
