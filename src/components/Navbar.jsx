import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars,faXmark } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  width: 60px;
  ${mobile({ fontSize: "12px" })}
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
        <Link to="/">
          <h1 className="logo">Bawdy</h1>
        </Link>
      </div>
      <div id="navbarSupportedContent">
        <ul>
          <li>
            <Link to="/signup" className="menu-links">
              REGISTER
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/signin" className="menu-links">
              SIGN IN
            </Link>
          </li>

          <li className="nav-link">
            <Link to="/products" className="menu-links">
              PRODUCTS
            </Link>
          </li>

          <li className="nav-link">
            <Link to="/cart" className="menu-links">
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
      {nav ? (
        <div id="navbarSupportedContentMobile">
          <ul>
            <li>
              <Link to="/signup" className="menu-links">
                REGISTER
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/signin" className="menu-links">
                SIGN IN
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/products" className="menu-links">
                PRODUCTS
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/cart" className="menu-links">
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
