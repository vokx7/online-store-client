import { ProductContext } from "../../context/ProductContext";
import type { ProductWithQuantity, SingleProduct } from "../../types";
import type { ReactNode } from "react";

export type ProductsListProps = {
  products: SingleProduct[] | ProductWithQuantity[];
  productInfo: ReactNode;
};

export const ProductsList = ({ products, productInfo }: ProductsListProps) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductContext.Provider value={{ product }} key={product.id}>
          <li className="product-info">{productInfo}</li>
        </ProductContext.Provider>
      ))}
    </ul>
  );
};
