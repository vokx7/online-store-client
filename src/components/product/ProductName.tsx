import { useProductContext } from "../../context/useProductContext"

export const ProductName = () => {
    const {product} = useProductContext();

    if(!product) return null;

    const {name} = product;

    return <h2>{name}</h2>
}