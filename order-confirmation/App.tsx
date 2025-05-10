import { CartProvider } from "../src/components/cart/CartProvider";
import { ProductInfo } from "../src/components/product/ProductInfo";
import { ProductContext } from "../src/context/ProductContext";
import { useCartContext } from "../src/context/useCartContext";
import type { ProductWithQuantity } from "../src/types";

export const App = () => {
    const { cartList } = useCartContext();
    console.log(cartList)
    if (!cartList) return null;
  
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
    <CartProvider>
      <div>
        <h1>Zamówienie złożone pomyślnie!</h1>
         <h1>Twoje podsumowanie:</h1>
              <ul className="product-list">
                {Object.values(cartList).map((product) => (
                  <ProductContext.Provider value={{ product }} key={product.id}>
                    <li className="product-info">
                      <ProductInfo />
                      <p>ilość: {product.quantity}</p>
                      <p>suma: {calculateProductPrice(product)}$</p>
                    </li>
                  </ProductContext.Provider>
                ))}
              </ul>
              <p>Łączny koszt: {calculateTotalPrice()}$</p>
              <a href="/">Powrót do listy produktów</a>
      </div>
    </CartProvider>
  );
};
