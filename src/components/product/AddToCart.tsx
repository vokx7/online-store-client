import { useCartContext } from "../../context/useCartContext";
import { useProductContext } from "../../context/useProductContext";
import { Button } from "../common/Button";

export const AddToCart = () => {
  const { setCartList } = useCartContext();

  const { product } = useProductContext();
  if (!product) return null;

  const handleAddToCart = () =>
    setCartList((prevCart) => {
      const newQuantity = (prevCart[product.id]?.quantity || 0) + 1;
      const newProduct = { ...product, quantity: newQuantity };

      return { ...prevCart, [product.id]: newProduct };
    });

  return <Button onClick={handleAddToCart}>Add to cart</Button>;
};
