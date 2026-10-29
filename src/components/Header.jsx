import { NavLink } from "react-router";
import { useCart } from "../hooks/useCart.js";

function Header() {
  const { count, favourites } = useCart();

  return (
    <header className="site-header">
      <div className="container header-content">
        <NavLink to="/" end className="brand">
          CampusEats
        </NavLink>

        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/cart">Cart ({count})</NavLink>

          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/favourites">Favourites ({favourites.length})</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
