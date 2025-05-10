import { Link } from "react-router-dom";
import { useCartContext } from "../context/useCartContext";
import { ProductContext } from "../context/ProductContext";
import { ProductInfo } from "../components/product/ProductInfo";
import type { ProductWithQuantity } from "../types";

export const OrderSummary = () => {
  const { cartList } = useCartContext();

  if (!cartList) return null;

  const calculateProductPrice = (product: ProductWithQuantity) => {
    const priceValue = product.price.main + product.price.fractional / 100;
    return priceValue * product.quantity;
  };

  const calculateTotalPrice = () => {
    let total = 0;

    for (const id in cartList) {
      const product = cartList[id];
      total += calculateProductPrice(product);
    }

    return total;
  };

  return (
    <>
      <Link to={"/cart"}>Powrót do koszyka</Link>
      <h1>Twoje podsumowanie:</h1>
      <ul className="product-list">
        {Object.values(cartList).map((product) => (
          <ProductContext.Provider value={{ product }} key={product.id}>
            <li className="product-info">
              <ProductInfo />
              <p>ilość: {product.quantity}</p>
              <p>suma: {calculateProductPrice(product)}$</p>
            </li>
          </ProductContext.Provider>
        ))}
      </ul>
      <p>Łączny koszt: {calculateTotalPrice()}$</p>
      <a>Złóż zamowienie</a>
    </>
  );
};
