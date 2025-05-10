import { ProductInfo } from "./ProductInfo";
import { ProductContext } from "../../context/ProductContext";
import type { SingleProduct } from "../../types";

export type ProductsListProps = {
    products: SingleProduct[];
}

export const ProductsList = ({products}: ProductsListProps) => {
    return <ul className="product-list">
        {products.map(product => (
            <ProductContext.Provider value={{product}} key={product.id}>
                 <ProductInfo/>
            </ProductContext.Provider>
        ))}
    </ul>
}