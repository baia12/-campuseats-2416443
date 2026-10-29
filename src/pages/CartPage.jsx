import { useNavigate } from "react-router";

import { useCart } from "../hooks/useCart.js";
import CartItem from "../components/CartItem.jsx";
import CheckoutForm from "../components/CheckoutForm.jsx";

function CartPage() {
  const { cart, total, changeQty, removeFromCart, placeOrder } = useCart();

  const navigate = useNavigate();

  function handleCheckout(details) {
    if (cart.length === 0) {
      return;
    }

    placeOrder(details);
    navigate("/orders");
  }

  if (cart.length === 0) {
    return (
      <section>
        <h2 className="section-title">Your Cart</h2>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="section-title">Your Cart</h2>

      <div className="cart-list">
        {cart.map((line) => (
          <CartItem
            key={line.item.id}
            line={line}
            onChangeQty={changeQty}
            onRemove={removeFromCart}
          />
        ))}
      </div>

      <h3>Total: RM {total.toFixed(2)}</h3>

      <CheckoutForm onSubmit={handleCheckout} />
    </section>
  );
}

export default CartPage;
