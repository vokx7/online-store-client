import { useCartContext } from "../../context/useCartContext";
import { useProductContext } from "../../context/useProductContext";
import type { ProductWithQuantity } from "../../types";
import { Button } from "../common/Button";

export const CartManager = () => {
  const { cartList, setCartList } = useCartContext();
  const { product } = useProductContext();

  if (!cartList) return null;

  const cartProduct = product as ProductWithQuantity;

  if (!cartProduct) return null;

  const handleAddToCart = (product: ProductWithQuantity) =>
    setCartList((prevCart) => {
      const newQuantity = (prevCart[product.id]?.quantity || 0) + 1;
      const newProduct = { ...product, quantity: newQuantity };

      return { ...prevCart, [product.id]: newProduct };
    });

  const handleRemoveSingleProduct = (productId: number) => {
    setCartList((prevCart) => {
      const newQuantity = (prevCart[productId]?.quantity || 0) - 1;

      if (!newQuantity) {
        return Object.fromEntries(
          Object.entries(prevCart).filter(([key]) => Number(key) !== productId),
        );
      }

      const newProduct = { ...prevCart[productId], quantity: newQuantity };

      return { ...prevCart, [productId]: newProduct };
    });
  };

  const handleDeleteProduct = (productId: number) => {
    setCartList((prevCart) =>
      Object.fromEntries(
        Object.entries(prevCart).filter(([key]) => Number(key) !== productId),
      ),
    );
  };

  return (
    <>
      <Button onClick={() => handleAddToCart(cartProduct)}>+</Button>
      <Button onClick={() => handleRemoveSingleProduct(cartProduct.id)}>
        -
      </Button>
      <Button onClick={() => handleDeleteProduct(cartProduct.id)}>Usuń</Button>
    </>
  );
};
