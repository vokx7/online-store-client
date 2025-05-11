export type SingleProduct = {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
};

export type CartList = SingleProduct[] | null;

export type ProductWithQuantity = SingleProduct & { quantity: number };

export type ProductContexType = {
  product: SingleProduct | ProductWithQuantity | null;
};

export type GrouppedCartList = {
  [key: number]: ProductWithQuantity;
};

export type CartContextType = {
  cartList: GrouppedCartList | null;
  setCartList: React.Dispatch<React.SetStateAction<GrouppedCartList>>;
};
