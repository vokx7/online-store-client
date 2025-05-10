export type SingleProduct = {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
};

export type ProductContexType = {
  product: SingleProduct | null;
};

export type CartList = SingleProduct[] | null;

export type CartContextType = {
  cartList: CartList, 
  setCartList: React.Dispatch<React.SetStateAction<CartList>>
}
