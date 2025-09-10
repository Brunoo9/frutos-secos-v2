import type { PaidMethod, Product } from "../types";

export const products: Product[] = [
  // MIX FRUTOS SECOS
  {
    id: 1,
    name: "Mix Nativo",
    image: "/images/mix-nativo.jpeg",
    basePrice: 13865, // Precio por 1kg
    description:
      "Nueces, almendras, pasas rubias, pasas morenas, maní y cubos de ananá.",
    detail: "",
  },
  {
    id: 2,
    name: "Mix Energético",
    image: "/images/mix-energetico.jpeg",
    basePrice: 14400, // Precio por 1kg
    description:
      "Nueces, almendras, pasas rubias, pasas morenas, maní, banana y cubos de ananá.",
    detail: "",
  },
  {
    id: 3,
    name: "Mix Ideal",
    image: "/images/mix-ideal.jpeg",
    basePrice: 12385, // Precio por 1kg
    description: "Nueces, almendras, pasas rubias, pasas morenas y maní.",
    detail: "",
  },
  {
    id: 4,
    name: "Mix Especial",
    image: "/images/mix-especial.jpeg",
    basePrice: 16900, // Precio por 1kg
    description: "Nueces, almendras, castañas y maní.",
    detail: "",
  },
  {
    id: 5,
    name: "Mix Fit",
    image: "/images/mix-fit.jpeg",
    basePrice: 13565, // Precio por 1kg
    description: "Nueces, almendras, pasas morenas, maní y banana.",
    detail: "",
  },
  {
    id: 6,
    name: "Mix Full",
    image: "/images/mix-full.jpeg",
    basePrice: 14150, // Precio por 1kg
    description:
      "Nueces, almendras, pasas de uva morenas y rubias, castañas, maní, banana, arándanos y cubos de ananá.",
    detail: "",
  },
  {
    id: 7,
    name: "Mix Cuyano",
    image: "/images/mix-cuyano.jpeg",
    basePrice: 17550, // Precio por 1kg
    description: "Durazno, pera, higos y damasco deshidratados.",
    detail: "",
  },
  {
    id: 8,
    name: "Almendras Peladas Enteras",
    image: "/images/almendras.jpeg",
    basePrice: 20550, // Precio por 1kg
    description: "Fruto seco entero sin cáscara.",
    detail: "",
  },
  {
    id: 9,
    name: "Castañas de Cajú SK1",
    image: "/images/castanias.jpeg",
    basePrice: 19500, // Precio por 1kg
    description: "Castañas de cajú seleccionadas.",
    detail: "",
  },
  {
    id: 10,
    name: "Maní Repelado Sin Sal",
    image: "/images/mani-sin-sal.jpeg",
    basePrice: 3855, // Precio por 1kg
    description: "Maní sin sal y sin piel.",
    detail: "",
  },
  {
    id: 11,
    name: "Granola Original",
    image: "/images/granola.jpeg",
    basePrice: 13785, // Precio por 1kg
    description: "Copos de maíz con frutos secos, semillas y miel.",
    detail: "",
  },
  {
    id: 12,
    name: "Higos Tiernizados",
    image: "/images/higos.jpeg",
    basePrice: 9135, // Precio por 1kg
    description: "Higos deshidratados suavizados.",
    detail: "",
  },
  {
    id: 13,
    name: "Chips de Banana Deshidratada",
    image: "/images/banana.jpeg",
    basePrice: 10755, // Precio por 1kg
    description: "Rodajas de banana crocantes y deshidratadas.",
    detail: "",
  },
  {
    id: 14,
    name: "Durazno Deshidratado",
    image: "/images/durazno.jpeg",
    basePrice: 14085, // Precio por 1kg
    description: "Durazno sin carozo, deshidratado.",
    detail: "",
  },
  {
    id: 15,
    name: "Peras en Mitades Deshidratada",
    image: "/images/peras.jpeg",
    basePrice: 13785, // Precio por 1kg
    description: "Mitades de pera deshidratada.",
    detail: "",
  },
  {
    id: 16,
    name: "Damasco Deshidratado",
    image: "/images/damasco.jpeg",
    basePrice: 15945, // Precio por 1kg
    description: "Fruta dulce deshidratada sin carozo.",
    detail: "",
  },
  {
    id: 17,
    name: "Ciruela Desecada sin Carozo",
    image: "/images/ciruela.jpeg",
    basePrice: 7585, // Precio por 1kg
    description: "Ciruela negra sin carozo.",
    detail: "",
  },
  {
    id: 18,
    name: "Ananá en Cubo Natural",
    image: "/images/anana-cubos.jpeg",
    basePrice: 27375, // Precio por 1kg
    description: "Cubo de ananá deshidratado naturalmente.",
    detail: "",
  },
  {
    id: 19,
    name: "Dátiles con Carozo Egipcio",
    image: "/images/datiles.jpeg",
    basePrice: 12845, // Precio por 1kg
    description: "Dátiles con carozo de origen egipcio.",
    detail: "",
  },
  {
    id: 20,
    name: "Pasas de Uva Morenas sin Semillas",
    image: "/images/pasas-morenas.jpeg",
    basePrice: 5570, // Precio por 1kg
    description: "Pasas de uva oscuras sin semillas.",
    detail: "",
  },
  {
    id: 21,
    name: "Pasas de Uva Rubias sin Semillas",
    image: "/images/pasas-rubias.jpeg",
    basePrice: 8900, // Precio por 1kg
    description: "Pasas claras sin semillas.",
    detail: "",
  },
  {
    id: 22,
    name: "Tomate Deshidratado",
    image: "/images/tomate.jpeg",
    basePrice: 20900, // Precio por 1kg
    description: "Tomate seco listo para cocinar.",
    detail: "",
  },
  {
    id: 23,
    name: "Arándanos Deshidratados",
    image: "/images/arandanos.jpeg",
    basePrice: 16250, // Precio por 1kg
    description: "Arándanos dulces deshidratados.",
    detail: "",
  },
  {
    id: 24,
    name: "Coco en Escama",
    image: "/images/coco-escamas.jpeg",
    basePrice: 34630, // Precio por 1kg
    description: "Escamas de coco natural.",
    detail: "",
  },
  {
    id: 25,
    name: "Pistachos Salados",
    image: "/images/pistachos.jpeg",
    basePrice: 36125, // Precio por 1kg
    description: "Pistachos con sal, ideales para snack.",
    detail: "",
  },
];

export const paidMethods: PaidMethod[] = [
  {
    id: "Transferencia",
    name: "Transferencia",
  },
  {
    id: "Efectivo",
    name: "Efectivo",
  },
];
