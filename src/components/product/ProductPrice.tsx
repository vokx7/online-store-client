import { useProductContext } from "../../context/useProductContext";

export const ProductPrice = () => {
    const {product} = useProductContext();

    if(!product) return null;

    const {price: {main, fractional}} = product;

    return <h2>{main}.{fractional}</h2>
}