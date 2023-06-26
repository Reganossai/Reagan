import {
  AddToHomeScreen,
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useState, useCallback, useEffect } from "react";
import Cart from "../pages/Cart";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const Product = ({ item }) => {
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

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

      setProduct(await res.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <div>loading...</div>;
  };

  const ShowProduct = () => {
    return (
      <div>
        <h1>jhudhu</h1>
      </div>
    );
  };

  return (
    <div> 
      {loading? <Loading/> : <ShowProduct/>}
     
    </div>
  );
};

export default Product;
