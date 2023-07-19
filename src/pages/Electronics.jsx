import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { loadCurrentItem, addToCart } from "../redux/Shopping/shopping-actions";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Electronics = ({current,addToCart}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const electron = data.filter(
    (product) => product.category === "electronics" 
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
    <div className="filt">
        <Navbar/>
        <h1><Link to="/"><span><FontAwesomeIcon icon={faArrowLeftLong} className="filt-fontawesome"/></span>Go Back</Link></h1>
        <div className="filter-div">
        <Filter/>
        </div>
      {electron.map((elec) => (
        <div key={elec.id} className="filter">
          <div>
            <img src={elec.image} alt={elec.title} />
          </div>

          <p>{elec.description}</p>

          <p className="peter">$ {elec.price}</p>

          <button onClick={() => addToCart(elec.id)} id="filter-1" className="btn btn-primary">Add To Cart</button>
        <button id="filter-2" className="btn btn-outline-dark"><Link to="/cart">View Cart</Link></button>
        </div>
      ))}
    
    </div>
  );
};



const mapStateToProps = (state) => {
    return {
      current: state.electronics.currentItem,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Electronics);
