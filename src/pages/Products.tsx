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
      <Link to={"/cart"}>Koszyk zakupów</Link>
      <h3>Lista produktów:</h3>
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
