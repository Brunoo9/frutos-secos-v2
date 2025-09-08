import ProductCard from "./ProductCard";
import { products } from "../../data/db";
const ProductList = () => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center  flex-wrap ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
