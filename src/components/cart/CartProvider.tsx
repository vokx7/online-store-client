import type { ReactNode } from "react";
import { CartContext } from "../../context/CartContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import type { GrouppedCartList } from "../../types";

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartList, setCartList] = useLocalStorage<GrouppedCartList>("cartList");

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartContext.Provider>
  );
};
