import React, { useContext } from "react";
import "./NavBar.scss";
import CartIcon from "../CartIcon/CartIcon";
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext";

function NavBar(props) {
  const context = useContext(AppContext);

  return (
    <nav className="navbar">
      <Link to="/">
        <div>
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gaming-store-logo-design-template-ef24e121fb242980af182dc27a0c49e3_screen.jpg?ts=1580352983"
            alt="logo"
          />
        </div>
      </Link>
      <div>
        <ul className="nav-items">
          <li>
            <Link to="/">Productos</Link>
          </li>
          <li>
            <Link to="/">Sobre Nosotros </Link>
          </li>
          <li onClick={props.toggleCart}>
            <Link>
              <CartIcon />
              Check Point{" "}
              <div>
                <strong>{context.updated}</strong>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
