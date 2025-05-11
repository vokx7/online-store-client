import { PartialProductPrice } from "../../src/components/cart/PartialProductPrice";
import { ProductQuantity } from "../../src/components/cart/ProductQuantity";
import { TotalCartPrice } from "../../src/components/cart/TotalCartPrice";
import { ProductInfo } from "../../src/components/product/ProductInfo";
import { ProductsList } from "../../src/components/product/ProductsList";
import { useCartContext } from "../../src/context/useCartContext";

export const Confirmation = () => {
  const { cartList, setCartList } = useCartContext();

  if (!cartList) return null;

  const resetCart = () => {
    setCartList({});
  };

  return (
    <div>
      <h1 className="h1-confirmation">Zamówienie złożone pomyślnie!</h1>
      <h2>Twoje podsumowanie:</h2>
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
      <a href="/online-store-client/" onClick={resetCart}>
        Złóż nowe zamówienie
      </a>
    </div>
  );
};
