
import { useState, useCallback, useEffect } from "react";
import Cart from "../pages/Cart";
import axios from "axios";
import { useParams } from "react-router-dom";


const Product = () => {
  // const [cart, setCart] = useState([]);
  // const [cartCount, setCartCount] = useState(0);

  // const addToCart = (item) => {
  //   const exist = cart.find((x) => x.id === item.id);
  //   if (exist) {
  //     setCart(
  //       cart.map((x) =>
  //         x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...item, qty: 1 }]);
  //   }

  //   console.log(cart);
  //   console.log(cartCount);
  // };

  // const onRemove = (item) => {
  //   const exist = cart.find((x) => x.id === item.id);
  //   if (exist.qty === 1) {
  //     setCart(cart.filter((x) => x.id !== item.id));
  //   } else {
  //     setCart(
  //       cart.map((x) =>
  //         x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };

  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");

  useEffect(()=>{
    const getProduct = async () => {
      setLoading(true); 
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    }
    getProduct();
  },[])
 


  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }
  
  return (
    <div> 
<h1>{product.title}</h1>
    </div>
  );
};

export default Product;
