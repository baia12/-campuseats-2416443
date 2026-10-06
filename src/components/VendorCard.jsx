function VendorCard() {
  const vendor = {
    name: "Mahallah Usman",
    location: "Usman Hall",
    OpeningHours: "10:30 AM - 10:00 PM",
    IsOpen: false,
  };
  return (
    <>
      <div className="vendor-card">
        <h2>{vendor.name}</h2>
        <p>{vendor.location}</p>
        <p> {vendor.OpeningHours}</p>
        <p>{vendor.IsOpen ? "Open" : "Closed"}</p>
      </div>
    </>
  );
}
export default VendorCard;
