function MenuItemCard() {
  const item = {
    name: "Pizza",
    description: "Delicious cheese pizza",
    price: 10.99, //float
    available: true,
  };
  return (
    <>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.price.toFixed(2)}</p>
      <p>{item.available ? "Available" : "Not Available"}</p>
    </>
  );
}

export default MenuItemCard;
