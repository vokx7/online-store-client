import { useCartContext } from "../../context/useCartContext";
import { calculateProductPrice } from "../../functions/calculateProductPrice";

export const TotalCartPrice = () => {
  const { cartList } = useCartContext();
  if (!cartList) return null;

  const calculateTotalPrice = () => {
    let total = 0;

    for (const id in cartList) {
      const product = cartList[id];
      total += calculateProductPrice(product);
    }

    return Math.round(total * 100) / 100;
  };

  return <p>Total cost: {calculateTotalPrice()}$</p>;
};
