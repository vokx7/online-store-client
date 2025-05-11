import { Link } from "react-router-dom";
import { useCartContext } from "../context/useCartContext";
import { ProductInfo } from "../components/product/ProductInfo";
import { ProductsList } from "../components/product/ProductsList";
import { PartialProductPrice } from "../components/cart/PartialProductPrice";
import { ProductQuantity } from "../components/cart/ProductQuantity";
import { TotalCartPrice } from "../components/cart/TotalCartPrice";

export const OrderSummary = () => {
  const { cartList } = useCartContext();

  if (!cartList) return null;

  return (
    <>
      <Link to={"/cart"}>Powrót do koszyka</Link>
      <h1>Twoje podsumowanie:</h1>
      <ProductsList
        products={Object.values(cartList)}
        productInfo={
          <>
            <ProductInfo />
            <ProductQuantity />
            <PartialProductPrice />
          </>
        }
      />
      <TotalCartPrice />
      <a href="order-confirmation/index.html">Złóż zamowienie</a>
    </>
  );
};
