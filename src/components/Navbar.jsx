import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import kinkiverse from "../assets/kinkiverselogo.jpeg";
import { saveAuthToken } from "../redux/Auth/auth-actions";
import { useCallback, useMemo } from "react";

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Navbar = ({ cart, saveToken, token }) => {
  const [cartCount, setCartCount] = useState(0);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleLogout = useCallback(() => {
    saveToken("");
  }, [saveToken]);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  const isLoggedIn = useMemo(() => (token ? true : false), [token]);
  useEffect(() => {
    console.log(isLoggedIn);
  }, []);

  nav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="logo-div">
        <Link className="logo-links" to="/">
          <img src={kinkiverse} alt="kink" />
          <h1 className="logo">Kinkiverse.</h1>
        </Link>
      </div>
      <div id="navbarSupportedContent">
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/" id="menu-links">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/signup" id="menu-links">
              REGISTER
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink activeClassName="active" to="/signin" id="menu-links">
              SIGN IN
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink activeClassName="active" to="/prod" id="menu-links">
              PRODUCTS
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink activeClassName="active" to="/cart" id="menu-links">
              <div>
                <span>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="navbar-carticon"
                  />
                </span>
                Cart ({cartCount})
              </div>
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : null}
        </ul>
      </div>

      {nav ? (
        <div id="navbarSupportedContentMobile">
          <ul>
            <li>
              <Link to="/signup" id="menu-links">
                REGISTER
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/signin" id="menu-links">
                SIGN IN
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/prod" id="menu-links">
                PRODUCTS
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/cart" id="menu-links">
                <div>
                  <span>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="navbar-carticon"
                    />
                  </span>
                  Cart ({cartCount})
                </div>
              </Link>
            </li>
            <li>
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : null}

      <div onClick={handleNav} className="zaracho">
        {nav ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveToken: (token) => dispatch(saveAuthToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
