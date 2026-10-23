import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import VendorCard from "./components/VendorCard.jsx";
import MenuList from "./components/MenuList.jsx";
import Footer from "./components/Footer.jsx";
import CartPage from "./components/CartPage.jsx";
import { Loading, ErrorMessage } from "./components/Status.jsx";
import "./index.css";

function App() {
  // B2: Vendors data and loading/error states
  const URL = "/api/vendors.json";
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  // B3: Cart and selected vendor
  const [cart, setCart] = useState([]);
  const [selectedVendorId, setSelectedVendorId] = useState(null);
  const [view, setView] = useState("menu");

  // B5: Save the most recently placed order
  const [lastOrder, setLastOrder] = useState(null);

  // B2: Fetch vendors from the JSON API
  useEffect(() => {
    const controller = new AbortController();

    async function fetchVendors() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(URL, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();

        setVendors(data);
        setSelectedVendorId(data[0]?.id ?? null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchVendors();

    return () => controller.abort();
  }, [reloadKey]);

  // Find the currently selected vendor
  const selectedVendor = vendors.find(
    (vendor) => vendor.id === selectedVendorId,
  );

  // B3: Total number of items in the cart
  const cartCount = cart.reduce((total, line) => total + line.qty, 0);

  // B3: Add an item or increase its quantity
  function handleAddToCart(item) {
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

  // B3: Change an item's quantity
  function handleChangeQty(itemId, delta) {
    setCart((prevCart) =>
      prevCart
        .map((line) =>
          line.item.id === itemId ? { ...line, qty: line.qty + delta } : line,
        )
        .filter((line) => line.qty > 0),
    );
  }

  // B3: Remove an item completely
  function handleRemove(itemId) {
    setCart((prevCart) => prevCart.filter((line) => line.item.id !== itemId));
  }

  // B5: Place an order and save its total before clearing the cart
  function handlePlaceOrder(details) {
    const total = cart.reduce(
      (sum, line) => sum + line.item.price * line.qty,
      0,
    );

    setLastOrder({ ...details, total });
    setCart([]);
    setView("done");
  }

  // Decide which content to display
  let content;

  if (view === "cart") {
    content = (
      <CartPage
        cart={cart}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onPlaceOrder={handlePlaceOrder}
      />
    );
  } else if (view === "done") {
    content = (
      <section className="card">
        <h2>Order placed!</h2>

        {lastOrder && (
          <>
            <p>Name: {lastOrder.name}</p>
            <p>Mahallah: {lastOrder.mahallah}</p>
            <p>Pickup time: {lastOrder.pickupTime}</p>
            <p>Total: RM {lastOrder.total.toFixed(2)}</p>
          </>
        )}

        <button type="button" className="btn" onClick={() => setView("menu")}>
          Back to Vendors
        </button>
      </section>
    );
  } else if (loading) {
    content = <Loading />;
  } else if (error) {
    content = (
      <ErrorMessage
        message={error}
        onRetry={() => setReloadKey((key) => key + 1)}
      />
    );
  } else {
    content = (
      <>
        <section>
          <h2 className="section-title">Choose a vendor</h2>

          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                isSelected={vendor.id === selectedVendorId}
                onSelect={setSelectedVendorId}
              />
            ))}
          </div>
        </section>

        {selectedVendor && (
          <section>
            <h2 className="section-title">Menu: {selectedVendor.name}</h2>

            <MenuList items={selectedVendor.menu} onAdd={handleAddToCart} />
          </section>
        )}
      </>
    );
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onShowMenu={() => setView("menu")}
        onShowCart={() => setView("cart")}
      />

      <main className="container">{content}</main>

      <Footer />
    </>
  );
}

export default App;
