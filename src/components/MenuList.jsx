import MenuItemCard from "./MenuItemCard";

function MenuList({ items, onAdd }) {
  return (
    <div className="menu-list">
      {items.length === 0 ? (
        <p>No items on this menu yet.</p>
      ) : (
        items.map((item) => (
          <MenuItemCard key={item.id} item={item} onAdd={onAdd} />
        ))
      )}
    </div>
  );
}

export default MenuList;
