import { CartProvider } from "../src/components/cart/CartProvider";
import { Confirmation } from "./components/Confirmation";

export const App = () => {
  return (
    <CartProvider>
      <h1>A simplified version of the online store client</h1>
      
      <Confirmation />
    </CartProvider>
  );
};
