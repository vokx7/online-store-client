import { useProductContext } from "../../context/useProductContext";
import type { ProductWithQuantity } from "../../types";

export const ProductQuantity = () => {
  const { product } = useProductContext();
  const cartProduct = product as ProductWithQuantity;

  if (!cartProduct) return null;

  const { quantity } = cartProduct;

  return <p>Quantity: {quantity}</p>;
};
