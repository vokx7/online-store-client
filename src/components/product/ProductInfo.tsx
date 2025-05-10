import { AddToCart } from "./AddToCart";
import { ProductName } from "./ProductName";
import { ProductPrice } from "./ProductPrice";

export const ProductInfo = () => {
    return <li className="product-info">
        <ProductName/>
        <ProductPrice/>
        <AddToCart/>
    </li>
}