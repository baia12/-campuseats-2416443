import { Link } from "react-router";

import { useCart } from "../hooks/useCart.js";
import { useVendors } from "../hooks/useVendors.js";
import { Loading, ErrorMessage } from "../components/Status.jsx";

function FavouritesPage() {
  const { favourites, toggleFavourite, addToCart } = useCart();
  const { vendors, loading, error, reload } = useVendors();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={reload} />;
  }

  const favouriteItems = vendors.flatMap((vendor) =>
    (vendor.menu || [])
      .filter((item) => favourites.includes(item.id))
      .map((item) => ({
        ...item,
        vendorId: vendor.id,
        vendorName: vendor.name,
      })),
  );

  return (
    <section>
      <h2 className="section-title">My Favourite Items</h2>

      {favouriteItems.length === 0 ? (
        <p>
          You haven't added any favourites yet.{" "}
          <Link to="/">Browse vendors</Link> to find something you like!
        </p>
      ) : (
        <div className="menu-grid">
          {favouriteItems.map((item) => (
            <article
              className="menu-item-card"
              key={`${item.vendorId}-${item.id}`}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-item-image"
                />
              )}

              <h3>{item.name}</h3>

              <p className="muted">Vendor: {item.vendorName}</p>

              <p className="price">RM {Number(item.price).toFixed(2)}</p>

              <Link to={`/vendor/${item.vendorId}`}>View Vendor Menu</Link>

              <button type="button" onClick={() => addToCart(item)}>
                Add to Cart
              </button>

              <button type="button" onClick={() => toggleFavourite(item.id)}>
                ♥ Remove Favourite
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default FavouritesPage;
