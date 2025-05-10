import products from "../constants/products.json"
import type { SingleProduct } from "../types"

export const useProducts = () => {
    const getProducts = (): SingleProduct[] => products
    
    return {
        getProducts
    }
}