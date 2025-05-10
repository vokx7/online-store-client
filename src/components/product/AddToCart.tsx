import { useCartContext } from "../../context/useCartContext";
import { useProductContext } from "../../context/useProductContext";
import { Button } from "../common/Button";

export const AddToCart = () => {
  const {setCartList} = useCartContext();

  const { product } = useProductContext();
  if (!product) return null;

  const handleAddToCart = () => 
    setCartList(prevCart =>  [...prevCart || [], product]);
  

  return <Button onClick={handleAddToCart}>Dodaj do koszyka</Button>;
};
