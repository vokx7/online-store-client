import { ProductInfo } from "./ProductInfo";
import { ProductContext } from "../../context/ProductContext";
import type { SingleProduct } from "../../types";
import { AddToCart } from "./AddToCart";

export type ProductsListProps = {
  products: SingleProduct[];
};

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductContext.Provider value={{ product }} key={product.id}>
          <li className="product-info">
            <ProductInfo />
            <AddToCart />
          </li>
        </ProductContext.Provider>
      ))}
    </ul>
  );
};
