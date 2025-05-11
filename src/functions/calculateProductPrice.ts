import type { ProductWithQuantity } from "../types";

export const calculateProductPrice = (product: ProductWithQuantity) => {
  const priceValue = product.price.main + product.price.fractional / 100;
  const total = priceValue * product.quantity;
  return Math.round(total * 100) / 100;
};
