import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { OrderSummary } from "./pages/OrderSummary";
import { Products } from "./pages/Products";
import { CartProvider } from "./components/cart/CartProvider";

export const App = () => {
  return (
    <CartProvider>
      <h1>Weronika_Pawlak_Web_Wrocław</h1>
      <h2>Zadanie: Uproszczona wersja klienta sklepu internetowego</h2>
      <BrowserRouter basename="/online-store-client/">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-summary" element={<OrderSummary />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};
