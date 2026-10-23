import MenuItemCard from "./MenuItemCard.jsx";

function MenuList({
  items,
  onAdd,
  favourites,
  onToggleFavourite,
  favouritesOnly,
}) {
  const displayedItems = favouritesOnly
    ? items.filter((item) => favourites.includes(item.id))
    : items;

  if (displayedItems.length === 0) {
    return (
      <p className="muted">
        {favouritesOnly
          ? "No favourite items on this menu yet."
          : "No items on this menu yet."}
      </p>
    );
  }

  return (
    <div className="grid">
      {displayedItems.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          onAdd={onAdd}
          isFavourite={favourites.includes(item.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  );
}

export default MenuList;
