import { CartProvider } from "../src/components/cart/CartProvider";
import { Confirmation } from "./components/Confirmation";

export const App = () => {
  return (
    <CartProvider>
      <Confirmation />
    </CartProvider>
  );
};
