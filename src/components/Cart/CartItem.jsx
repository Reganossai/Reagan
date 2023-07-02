import React, { useState } from "react";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../redux/Shopping/shopping-actions";
import Navbar from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div>
    <div className="product-container-singleitem">
      <img
        src={item.image}
        alt={item.title}
      />
      <div className="product-desc-singleitem">
        <p>{item.title}</p>
        <p >{item.description}</p>
        <p>$ {item.price}</p>
      </div>
      <div >
        <div >
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          id="minussign"
          className="btn btn-outline-dark"
        >
       <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
    </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);