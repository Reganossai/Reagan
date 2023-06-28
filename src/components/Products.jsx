import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {Link } from "react-router-dom";
import { connect } from 'react-redux';
import Product from "./Product";
import Loading from "./Loading";

const Products = ({products}) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const callBck = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage("");
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
    return <div><Loading/></div>;
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <div className="products-div">
      
      {products.map(prod => (
        <Product key={prod.id} productData={prod}/>
      ))}
      {/* <h1 className="products-header">Products</h1>
      {data.map((item) => (
        <div className="card" key={item.id}>
            <img src={item.image} className="products-img" alt="..." />
                    <div className="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-outline">
            <Link to={`/products/${item.id}`}>
              Show Product details
            </Link>
            </button>
          </div>
        </div>
      ))} */}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
