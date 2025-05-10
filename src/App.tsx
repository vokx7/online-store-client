import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { OrderSummary } from "./pages/OrderSummary";
import { Products } from "./pages/Products";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </BrowserRouter>
  );
};
