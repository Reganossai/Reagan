import React, { useState, useEffect } from "react";
import {NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars,faXmark } from "@fortawesome/free-solid-svg-icons";

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;



const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  nav
  ? (document.body.style.overflow = "hidden")
  : (document.body.style.overflow = "auto");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="logo-div">
        <NavLink  to="/">
          <h1 className="logo">Bawdy</h1>
        </NavLink>
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
  };
};

export default connect(mapStateToProps)(Navbar);
