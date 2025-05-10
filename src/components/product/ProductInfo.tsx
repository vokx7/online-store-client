import { Button } from "../common/Button";
import { ProductName } from "./ProductName";
import { ProductPrice } from "./ProductPrice";

export const ProductInfo = () => {
    return <li className="product-info">
        <ProductName/>
        <ProductPrice/>
        <Button onClick={()=> {}}>Dodaj do koszyka</Button>
    </li>
}