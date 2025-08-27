import { useProducts } from "../hooks/useProducts";
import { ProductsList } from "../components/product/ProductsList";
import { Link } from "react-router-dom";
import { AddToCart } from "../components/product/AddToCart";
import { ProductInfo } from "../components/product/ProductInfo";

export const Products = () => {
  const { getProducts } = useProducts();

  const products = getProducts();

  return (
    <>
      <Link to={"/cart"}>Shopping cart</Link>
      <h3>Product list:</h3>
      <ProductsList
        products={products}
        productInfo={
          <>
            <ProductInfo />
            <AddToCart />
          </>
        }
      />
    </>
  );
};
