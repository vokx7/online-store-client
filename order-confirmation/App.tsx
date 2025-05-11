import { CartProvider } from "../src/components/cart/CartProvider";
import { Confirmation } from "./components/Confirmation";

export const App = () => {
  return (
    <CartProvider>
      <h1>Weronika_Pawlak_Web_Wrocław</h1>
      <h2>Zadanie: Uproszczona wersja klienta sklepu internetowego</h2>
      <Confirmation />
    </CartProvider>
  );
};
