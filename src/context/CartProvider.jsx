import { CartContext } from "./cart-context.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export default function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("campuseats-cart", []);
  const [orders, setOrders] = useLocalStorage("campuseats-orders", []);
  const [favourites, setFavourites] = useLocalStorage(
    "campuseats-favourites",
    [],
  );

  // Add an item or increase its quantity
  function addToCart(item) {
    setCart((prevCart) => {
      const existingLine = prevCart.find((line) => line.item.id === item.id);

      if (existingLine) {
        return prevCart.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line,
        );
      }

      return [...prevCart, { item, qty: 1 }];
    });
  }

  // Change an item's quantity
  function changeQty(itemId, delta) {
    setCart((prevCart) =>
      prevCart
        .map((line) =>
          line.item.id === itemId ? { ...line, qty: line.qty + delta } : line,
        )
        .filter((line) => line.qty > 0),
    );
  }

  // Remove an item completely
  function removeFromCart(itemId) {
    setCart((prevCart) => prevCart.filter((line) => line.item.id !== itemId));
  }

  // Save the order and clear the cart
  function placeOrder(details) {
    const total = cart.reduce(
      (sum, line) => sum + line.item.price * line.qty,
      0,
    );

    const order = {
      ...details,
      items: cart,
      total,
      id: Date.now(),
    };

    setOrders((prevOrders) => [...prevOrders, order]);
    setCart([]);

    return order;
  }

  // Calculate total item count
  const count = cart.reduce((sum, line) => sum + line.qty, 0);

  // Calculate total price
  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0);

  function toggleFavourite(itemId) {
    setFavourites((previous) =>
      previous.includes(itemId)
        ? previous.filter((id) => id !== itemId)
        : [...previous, itemId],
    );
  }

  function isFavourite(itemId) {
    return favourites.includes(itemId);
  }

  // Share cart data and functions with other components
  const value = {
    cart,
    orders,
    count,
    total,
    addToCart,
    changeQty,
    removeFromCart,
    placeOrder,
    favourites,
    toggleFavourite,
    isFavourite,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
