import { Link } from "react-router";
import { useCart } from "../hooks/useCart.js";

function OrdersPage() {
  const { orders } = useCart();

  return (
    <section>
      <h2 className="section-title">My Orders</h2>

      {orders.length === 0 ? (
        <div>
          <p>You have not placed any orders yet.</p>
          <Link to="/">Browse vendors</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders
            .slice()
            .reverse()
            .map((order) => (
              <article className="order-card" key={order.id}>
                <h3>Order #{order.id}</h3>

                <p>
                  <strong>Name:</strong> {order.name}
                </p>

                <p>
                  <strong>Mahallah:</strong> {order.mahallah}
                </p>

                <p>
                  <strong>Pickup time:</strong> {order.pickupTime}
                </p>

                <h4>Items</h4>

                <ul>
                  {order.items.map((line) => (
                    <li key={line.item.id}>
                      {line.item.name} × {line.qty}
                    </li>
                  ))}
                </ul>

                <p>
                  <strong>Total:</strong> RM {order.total.toFixed(2)}
                </p>
              </article>
            ))}
        </div>
      )}
    </section>
  );
}

export default OrdersPage;
