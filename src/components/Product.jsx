import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../redux/Shopping/shopping-actions";

const Product = ({ productData, product, addToCart, loadCurrentItem }) => {
  return (
    <div>
      <img src={productData.image} alt={productData.title} />

      <div>
        <p>{productData.title}</p>
        <p>{productData.description}</p>
        <p>$ {productData.price}</p>
      </div>

      <div>
        <Link to={`/product/${productData.id}`}>
          <button
            className="btn btn-outline-dark"
            onClick={() => loadCurrentItem(productData)}
          >
            View Item
          </button>
        </Link>
        <button
          className="btn btn-primary"
          onClick={() => addToCart(productData.id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
