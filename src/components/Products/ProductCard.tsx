import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import type { Product } from "../../types";
import { calculatePrice, formatPrice } from "../../utils/pricing";
import { useCartStore } from "../../store";
import { toast } from "sonner";
import { Tooltip } from "react-tooltip";

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
    toast.success("Se agregó el producto al carrito correctamente.");
  };

  return (
    <div
      key={product.id}
      className="bg-white rounded-2xl shadow-md  p-4 w-[300px] h-[400px] flex flex-col"
    >
      {/* Imagen */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-44  object-cover"
        />
      </div>

      {/* Contenido principal - se expande para empujar las acciones hacia abajo */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Título y cantidad */}
        <div className="flex justify-between items-start mt-3">
          <h2 className="text-lg font-semibold flex-1">{product.name}</h2>
          <div className="flex items-center gap-2 ml-2">
            <input
              type="number"
              min={1}
              max={10}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-14 border-2 border-gray-300 rounded-full px-2 py-1 text-center text-gray-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Descripción */}
        <div className="mt-1">
          <p className="text-gray-500 text-sm">{product.description}</p>
        </div>

        {/* Botones peso y precio - siempre en la parte inferior */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <button
              onClick={() => setWeight("500gr")}
              className={`px-3 py-1 rounded-lg border cursor-pointer ${
                weight === "500gr"
                  ? "bg-orange-100 border-orange-400 text-orange-500"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              500gr
            </button>
            <button
              onClick={() => setWeight("1kg")}
              className={`px-3 py-1 rounded-lg border cursor-pointer ${
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
            <Tooltip
              id={`tooltip-${product.id}`}
              place="bottom"
              offset={10}
              positionStrategy="fixed"
              noArrow={false}
              style={{
                fontSize: "12px",
                padding: "4px 8px",
                borderRadius: "6px",
                zIndex: 9999,
              }}
            />
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full cursor-pointer"
              onClick={handleAddToCart}
              data-tooltip-id={`tooltip-${product.id}`}
              data-tooltip-content="Agregar producto al carrito."
            >
              <FaShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
