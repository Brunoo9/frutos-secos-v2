import { create } from "zustand";
import type { CartItem } from "./types";

type CartState = {
  cartItems: CartItem[];
  isModalOpen: boolean;
  addItem: (item: CartItem) => void;
  updateItem: (id: string, quantity: number) => void;
  removeItem: (item: CartItem) => void;
  openModal: () => void;
  closeModal: () => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  isModalOpen: false,
  addItem: (item) => {
    set((state) => {
      const isItemInCart = state.cartItems.some(
        (i) => i.id === item.id && i.weight === item.weight
      );
      if (isItemInCart) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id && i.weight === item.weight
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    });
  },
  updateItem: (id, quantity) => {
    set((state) => {
      return {
        cartItems: state.cartItems.map((i) =>
          i.id === id ? { ...i, quantity: quantity } : i
        ),
      };
    });
  },
  removeItem: (item) => {
    console.log(item);
    set((state) => ({
      cartItems: state.cartItems.filter((i) => i.id !== item.id),
    }));
  },
  clearCart: () => {
    set({ cartItems: [] });
  },
  openModal: () => {
    set({ isModalOpen: true });
  },
  closeModal: () => {
    set({ isModalOpen: false });
  },
}));
