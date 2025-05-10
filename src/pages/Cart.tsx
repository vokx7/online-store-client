import { Link } from "react-router-dom"

export const Cart = () => {
    return <>
    <Link to={"/"}>Powrót do listy produktów</Link>
        <h1>Twój koszyk:</h1>
    <Link to={"/order-summary"}>Podsumowanie zamówienia</Link>
    </>
}