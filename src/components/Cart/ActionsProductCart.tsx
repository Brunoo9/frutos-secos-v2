import { formatPrice } from "../../utils/pricing";
import { useCartStore } from "../../store";
import type { CartItem } from "../../types";

const ActionsProductCart = ({ item }: { item: CartItem }) => {
  const updateItem = useCartStore((state) => state.updateItem);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="flex items-center justify-around gap-6 mt-2 bg-gray-100 rounded-lg p-2">
      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            updateItem(item.id.toString(), Math.max(1, item.quantity - 1))
          }
          className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        </button>
        <span className="w-8 text-center text-sm font-medium">
          {item.quantity}
        </span>
        <button
          onClick={() => updateItem(item.id.toString(), item.quantity + 1)}
          className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="font-semibold text-black text-sm">
          ${formatPrice(item.price * item.quantity)}
        </p>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => removeItem(item)}
        className="p-1 hover:bg-red-50 rounded-full transition-colors hover:cursor-pointer"
      >
        <svg
          className="w-4 h-4 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default ActionsProductCart;
