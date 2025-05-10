import { useContext } from "react"
import { ProductContext } from "./ProductContext"

export const useProductContext = () => {
    const context = useContext(ProductContext);

    if(!context) throw new Error('You need to provide ProductContext.Provider to use useProductProvider!');

    return context;
}