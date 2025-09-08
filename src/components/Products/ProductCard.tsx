import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import type { Product } from "../../types";
import { calculatePrice, formatPrice } from "../../utils/pricing";
import { useCartStore } from "../../store";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [weight, setWeight] = useState<"1kg" | "500gr">("1kg");
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const currentPrice = calculatePrice(product.basePrice, weight);

  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity,
      weight,
      price: currentPrice,
      id: product.id.toString() + weight,
    });
  };

  return (
    <div
      key={product.id}
      className="bg-white rounded-2xl shadow p-4 w-[300px] h-[350px] gap-2 flex flex-col"
    >
      {/* Imagen */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-44 object-cover"
        />
      </div>

      {/* Título */}
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-14 border-2 border-gray-300 rounded-full px-2 py-1 text-center text-gray-600 focus:outline-none"
          />
        </div>
      </div>

      {/* Botones peso y precio */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          <button
            onClick={() => setWeight("500gr")}
            className={`px-3 py-1 rounded-lg border ${
              weight === "500gr"
                ? "bg-orange-100 border-orange-400 text-orange-500"
                : "border-gray-300 text-gray-500"
            }`}
          >
            500gr
          </button>
          <button
            onClick={() => setWeight("1kg")}
            className={`px-3 py-1 rounded-lg border ${
              weight === "1kg"
                ? "bg-orange-100 border-orange-400 text-orange-500"
                : "border-gray-300 text-gray-500"
            }`}
          >
            1kg
          </button>
        </div>
        <span className="font-semibold">${formatPrice(currentPrice)}</span>
        <div className="flex justify-end">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full cursor-pointer"
            onClick={handleAddToCart}
          >
            <FaShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
