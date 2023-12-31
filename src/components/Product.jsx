import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../redux/Shopping/shopping-actions";

const Product = ({ productData, product, addToCart, loadCurrentItem, }) => {



  return (
    <div className="product-container">
      <div>
       <img src={productData.image} alt={productData.title} />
       </div>
     
       <Link to={`/product/${productData.id}`}>
          <button
          id="prod-but"
            className="btn btn-outline-dark"
            onClick={() => loadCurrentItem(productData)}
          >
            View Item
          </button>
        </Link>
      
        <p className="peter">$ {productData.price}</p>

        {/* <div className="product-btns"> 
        <Link to={`/product/${productData.id}`}>
          <button
          id="prod-but"
            className="btn btn-outline-dark"
            onClick={() => loadCurrentItem(productData)}
          >
            View Item
          </button>
        </Link>
        <button id="add-to-cart-btn"
          className="btn btn-primary"
          onClick={() => addToCart(productData.id)}
        >
          Add To Cart
        </button>
      </div> */}

     
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
