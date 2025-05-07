import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Header() {
  const numberOfItems = useSelector((state) => state.cartItems.numberOfItems);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand ms-5" to="/">
          My Products
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item me-4 ">
              <Link className="nav-Link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-Link " to="#">
                About Us
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-Link " to="/cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </Link>
              {numberOfItems > 0 && (
                <span
                  className="badge rounded-pill bg-danger mb-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  {numberOfItems}
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;