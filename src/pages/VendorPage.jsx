import { useParams } from "react-router";

import { useVendors } from "../hooks/useVendors.js";
import { useCart } from "../hooks/useCart.js";
import { Loading, ErrorMessage } from "../components/Status.jsx";
import MenuList from "../components/MenuList.jsx";

function VendorPage() {
  const { id } = useParams();
  const { vendors, loading, error, reload } = useVendors();
  const { addToCart } = useCart();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={reload} />;
  }

  const vendor = vendors.find((vendor) => String(vendor.id) === id);

  if (!vendor) {
    return (
      <section className="card">
        <h2>Vendor not found</h2>
        <p>The vendor you are looking for does not exist.</p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="section-title">Menu: {vendor.name}</h2>

      <MenuList items={vendor.menu} onAdd={addToCart} />
    </section>
  );
}

export default VendorPage;
