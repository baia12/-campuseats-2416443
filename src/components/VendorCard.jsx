import { Link } from "react-router";

function VendorCard({ vendor }) {
  return (
    <article className="vendor-card">
      <Link to={`/vendor/${vendor.id}`} className="vendor-link">
        {vendor.image ? (
          <img
            className="vendor-image"
            src={vendor.image}
            alt={vendor.name}
            loading="lazy"
          />
        ) : (
          <div className="thumb" aria-hidden="true">
            {vendor.name.charAt(0)}
          </div>
        )}

        <h3>{vendor.name}</h3>
      </Link>

      <p>{vendor.location}</p>

      <p>
        Status: <strong>{vendor.isOpen ? "Open" : "Closed"}</strong>
      </p>

      <Link to={`/vendor/${vendor.id}`} className="vendor-menu-link">
        View Menu
      </Link>
    </article>
  );
}

export default VendorCard;
