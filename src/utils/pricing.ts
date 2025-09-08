import { WEIGHT_PERCENTAGES } from "../types";

/**
 * Calcula el precio de un producto según su peso
 * @param basePrice - Precio base por 1kg
 * @param weight - Peso seleccionado
 * @returns Precio calculado redondeado
 */
export const calculatePrice = (
  basePrice: number,
  weight: keyof typeof WEIGHT_PERCENTAGES
): number => {
  const percentage = WEIGHT_PERCENTAGES[weight];
  return Math.round(basePrice * percentage);
};

/**
 * Obtiene todos los precios disponibles para un producto
 * @param basePrice - Precio base por 1kg
 * @returns Objeto con todos los precios por peso
 */
export const getAllPrices = (basePrice: number) => {
  return {
    "250gr": calculatePrice(basePrice, "250gr"),
    "500gr": calculatePrice(basePrice, "500gr"),
    "1kg": calculatePrice(basePrice, "1kg"),
    "2kg": calculatePrice(basePrice, "2kg"),
  };
};

/**
 * Formatea el precio para mostrar
 * @param price - Precio a formatear
 * @returns Precio formateado con separadores de miles
 */
export const formatPrice = (price: number): string => {
  return price.toLocaleString("es-AR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
