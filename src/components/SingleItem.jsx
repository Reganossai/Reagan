import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/shopping-actions";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ current, addToCart,cartCount}) => {
  return (
    <div>
      <Navbar/> 
    <div className="product-container-singleitem" >
      <h1><Link to="/"><span><FontAwesomeIcon icon={faArrowLeftLong} className="single-item-fontawesome"/></span>Go Back</Link></h1>
      <img src={current.image} alt={current.title} />
      <div className="product-desc-singleitem">
        <p>{current.title}</p>
        <p>{current.description}</p>
        <p>$ {current.price}</p>

        <button className="btn btn-danger" onClick={() => addToCart(current.id)}>Add To Cart</button>
        <button id="vvv" className="btn btn-outline-dark"><Link to="/cart">View Cart</Link></button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
