import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { loadCurrentItem, addToCart } from "../redux/Shopping/shopping-actions";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";

const Women = ({ current, addToCart }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const womenWears = data.filter(
    (product) => product.category === "women's clothing"
  );

  const callBck = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callBck();
  }, [callBck]);

  if (loading) {
    return <Loading />;
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <div>
      <Navbar />

      {womenWears.map((women) => (
        <div key={women.id} className="filter">
          <img src={women.image} alt={women.title} />

          <p>{women.description}</p>

          <p className="peter">$ {women.price}</p>

          <button
            onClick={() => addToCart(women.id)}
            id="filter-1"
            className="btn btn-primary"
          >
            Add To Cart
          </button>
          <button id="filter-2" className="btn btn-outline-dark">
            <Link to="/cart">View Cart</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.women.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Women);
