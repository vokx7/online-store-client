export type SingleProduct = {
    id: number,
    name: string,
    price: {
        main: number,
        fractional: number,
    }
}

export type ProductContexType = {
    product: SingleProduct | null;
}