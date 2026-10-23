import CartItem from "./CartItem.jsx";
import CheckoutForm from "./CheckoutForm.jsx";

function CartPage({ cart, onChangeQty, onRemove, onPlaceOrder }) {
  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0);

  return (
    <section className="card">
      <h2 className="section-title">Your Cart</h2>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <p>Add some items from a vendor's menu first.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((line) => (
              <CartItem
                key={line.item.id}
                line={line}
                onChangeQty={onChangeQty}
                onRemove={onRemove}
              />
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: RM {total.toFixed(2)}</h3>
          </div>

          <hr />

          <CheckoutForm onPlaceOrder={onPlaceOrder} />
        </>
      )}
    </section>
  );
}

export default CartPage;
