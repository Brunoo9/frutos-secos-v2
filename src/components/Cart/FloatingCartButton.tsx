import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "../../store";
import CartModal from "./CartModal";

const FloatingCartButton = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const openModal = useCartStore((state) => state.openModal);
  const isModalOpen = useCartStore((state) => state.isModalOpen);
  const closeModal = useCartStore((state) => state.closeModal);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <button
        onClick={openModal}
        className="fixed hover:cursor-pointer bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
      >
        <FaShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-brown-custom text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      <CartModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default FloatingCartButton;
