import { useState } from "react";
import { useCart } from "../hooks/useCart.js";

function MenuList({ items = [] }) {
  const { addToCart, favourites, toggleFavourite } = useCart();

  const [favouritesOnly, setFavouritesOnly] = useState(false);

  const displayedItems = favouritesOnly
    ? items.filter((item) => favourites.includes(item.id))
    : items;

  if (items.length === 0) {
    return <p>No menu items available for this vendor.</p>;
  }

  return (
    <section>
      <label>
        <input
          type="checkbox"
          checked={favouritesOnly}
          onChange={(event) => setFavouritesOnly(event.target.checked)}
        />{" "}
        Show favourites only
      </label>

      {displayedItems.length === 0 ? (
        <p>No favourite items found in this menu.</p>
      ) : (
        <div className="menu-grid">
          {displayedItems.map((item) => {
            const isFavourite = favourites.includes(item.id);

            return (
              <article className="menu-item-card" key={item.id}>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-item-image"
                  />
                )}

                <h3>{item.name}</h3>

                <p className="price">RM {Number(item.price).toFixed(2)}</p>

                <button type="button" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>

                <button
                  type="button"
                  onClick={() => toggleFavourite(item.id)}
                  aria-pressed={isFavourite}
                >
                  {isFavourite ? "♥ Remove Favourite" : "♡ Add Favourite"}
                </button>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default MenuList;
