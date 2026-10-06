import React from "react";
function Header() {
  const cartCount = 2;

  return (
    <>
      <header className="header">
        <h1 className="logo">Campus Eats</h1>
      </header>
      <nav className="nav">
        <a href="#">Vendor</a>
        <a href="#">My Orders</a>
        <a href="#">
          Cart <span className="badge">{cartCount}</span>
        </a>
      </nav>
    </>
  );
}

export default Header;
