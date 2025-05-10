import { createContext } from "react";
import type { ProductContexType } from "../types";

export const ProductContext = createContext<ProductContexType>({
    product: null
})