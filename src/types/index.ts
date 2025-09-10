export type CartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  weight: "1kg" | "500gr" | "250gr" | "2kg";
  image: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  basePrice: number; // Precio base por 1kg
  image: string;
  detail: string;
};

// Configuración de porcentajes por tamaño (personalizable)
export const WEIGHT_PERCENTAGES = {
  "250gr": 0.3, // 30% del precio base (descuento del 70%)
  "500gr": 0.55, // 55% del precio base (descuento del 45%)
  "1kg": 1.0, // 100% del precio base (precio completo)
  "2kg": 1.8, // 180% del precio base (recargo del 80%)
};

export type PaidMethod = {
  id: string;
  name: "Transferencia" | "Efectivo";
};
