import { useProductContext } from "../../context/useProductContext";

export const ProductPrice = () => {
  const { product } = useProductContext();

  if (!product) return null;

  const {
    price: { main, fractional },
  } = product;

  return (
    <p>
      {main}.{fractional}$
    </p>
  );
};
