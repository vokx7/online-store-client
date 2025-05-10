import { ProductContext } from "../../context/ProductContext";
import { useCartContext } from "../../context/useCartContext";
import type { ProductWithQuantity } from "../../types";
import { Button } from "../common/Button";
import { ProductInfo } from "../product/ProductInfo";

export const CartList = () => {
  const { cartList, setCartList } = useCartContext();

  if (!cartList) return null;

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

  const calculateProductPrice = (product: ProductWithQuantity) => {
    const priceValue = product.price.main + product.price.fractional / 100;
    return priceValue * product.quantity;
  };

  const calculateTotalPrice = () => {
    let total = 0;

    for (const id in cartList) {
      const product = cartList[id];
      total += calculateProductPrice(product);
    }

    return total;
  };

  return (
    <>
      <ul className="product-list">
        {Object.values(cartList).map((product) => (
          <ProductContext.Provider value={{ product }} key={product.id}>
            <li className="product-info">
              <ProductInfo />
              <p>ilość: {product.quantity}</p>
              <p>suma: {calculateProductPrice(product)}$</p>
              <Button onClick={() => handleAddToCart(product)}>+</Button>
              <Button onClick={() => handleRemoveSingleProduct(product.id)}>
                -
              </Button>
              <Button onClick={() => handleDeleteProduct(product.id)}>
                Usuń
              </Button>
            </li>
          </ProductContext.Provider>
        ))}
      </ul>
      <p>Łączny koszt: {calculateTotalPrice()}$</p>
    </>
  );
};
