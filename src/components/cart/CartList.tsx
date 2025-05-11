import { useCartContext } from "../../context/useCartContext";
import { ProductInfo } from "../product/ProductInfo";
import { ProductsList } from "../product/ProductsList";
import { CartManager } from "./CartManager";
import { PartialProductPrice } from "./PartialProductPrice";
import { ProductQuantity } from "./ProductQuantity";
import { TotalCartPrice } from "./TotalCartPrice";

export const CartList = () => {
  const { cartList } = useCartContext();

  if (!cartList) return null;

  return (
    <>
      <ProductsList
        products={Object.values(cartList)}
        productInfo={
          <>
            <ProductInfo />
            <ProductQuantity />
            <PartialProductPrice />
            <CartManager />
          </>
        }
      />
      <TotalCartPrice />
    </>
  );
};
