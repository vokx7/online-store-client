import { Link } from "react-router-dom";
import { CartList } from "../components/cart/CartList";

export const Cart = () => {
  return (
    <>
      <Link to={"/"}>Powrót do listy produktów</Link>
      <h1>Twój koszyk:</h1>
      <CartList />
      <Link to={"/order-summary"}>Podsumowanie zamówienia</Link>
    </>
  );
};
