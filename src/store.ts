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

// Función para guardar en localStorage
const saveToLocalStorage = (cartItems: CartItem[]) => {
  try {
    localStorage.setItem("frutos-secos-cart", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

// Función para cargar desde localStorage
const loadFromLocalStorage = (): CartItem[] => {
  try {
    const saved = localStorage.getItem("frutos-secos-cart");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

export const useCartStore = create<CartState>((set) => ({
  cartItems: loadFromLocalStorage(),
  isModalOpen: false,
  addItem: (item) => {
    set((state) => {
      const isItemInCart = state.cartItems.some(
        (i) => i.id === item.id && i.weight === item.weight
      );
      let newCartItems;
      if (isItemInCart) {
        newCartItems = state.cartItems.map((i) =>
          i.id === item.id && i.weight === item.weight
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        newCartItems = [...state.cartItems, item];
      }
      // Guardar en localStorage
      saveToLocalStorage(newCartItems);
      return { cartItems: newCartItems };
    });
  },
  updateItem: (id, quantity) => {
    set((state) => {
      const newCartItems = state.cartItems.map((i) =>
        i.id === id ? { ...i, quantity: quantity } : i
      );
      // Guardar en localStorage
      saveToLocalStorage(newCartItems);
      return { cartItems: newCartItems };
    });
  },
  removeItem: (item) => {
    set((state) => {
      const newCartItems = state.cartItems.filter((i) => i.id !== item.id);
      // Guardar en localStorage
      saveToLocalStorage(newCartItems);
      return { cartItems: newCartItems };
    });
  },
  clearCart: () => {
    set({ cartItems: [] });
    // Limpiar localStorage
    localStorage.removeItem("frutos-secos-cart");
  },
  openModal: () => {
    set({ isModalOpen: true });
  },
  closeModal: () => {
    set({ isModalOpen: false });
  },
}));
