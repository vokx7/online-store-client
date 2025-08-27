import { useProductContext } from "../../context/useProductContext";
import { calculateProductPrice } from "../../functions/calculateProductPrice";
import type { ProductWithQuantity } from "../../types";

export const PartialProductPrice = () => {
  const { product } = useProductContext();
  const cartProduct = product as ProductWithQuantity;
  if (!cartProduct) return null;

  return <p>In total: {calculateProductPrice(cartProduct)}$</p>;
};
