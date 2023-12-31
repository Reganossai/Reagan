import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Product from "./Product";
import Loading from "./Loading";

const Products = ({ products }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const callBck = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
      console.log(res.data);
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
    <div className="pro">
     
      <div className="products-div">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div className="odu">
              {products.map((prod) => (
                <Product key={prod.id} productData={prod} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
