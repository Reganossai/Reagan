import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { loadCurrentItem, addToCart } from "../redux/Shopping/shopping-actions";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";

const Men = ({ current, addToCart }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const menWears = data.filter(
    (product) => product.category === "men's clothing"
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

      {menWears.map((men) => (
        <div key={men.id} className="filter">
          <div>
            <img src={men.image} alt={men.title} />
          </div>

          <p>{men.description}</p>

          <p className="peter">$ {men.price}</p>

          <button onClick={() => addToCart(men.id)} id="filter-1" className="btn btn-primary">
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
    current: state.men.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Men);
