import { useContext } from "react"
import { CartContext } from "./CartContext"

export const useCartContext = () => {
    const context = useContext(CartContext);

    if(!context) throw new Error('You need to provide CartContext.Provider to use useCartContext!');

    return context;
}