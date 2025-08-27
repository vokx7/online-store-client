import { Link } from "react-router-dom";
import { CartList } from "../components/cart/CartList";

export const Cart = () => {
  return (
    <>
      <Link to={"/"}>Back to product list</Link>
      <h1>Your cart:</h1>
      <CartList />
      <Link to={"/order-summary"}>Order Summary</Link>
    </>
  );
};
