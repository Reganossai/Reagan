# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {useDispatch } from "react-redux";
import { addCart } from '../redux/action/index';

const Product = ({ productData}) => {

  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const addProduct = () => {
    dispatch(addCart(product));
  } 

  useEffect(()=>{
    const getProduct = async () => {
      setLoading(true); 
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.data);
      setLoading(false);
    }
    getProduct();
  },[])
 


  if (loading) {
    return <div className="skel">
      <div id="first-skel" >
        <Skeleton height={350} width={400} />
      </div>
      <div id="second-skel"  >
        <Skeleton height={40} width={200}/>
        <Skeleton height={65} width={700}/>
        <Skeleton height={20} width={90}/>
        <Skeleton height={40} width={80}/>
        <Skeleton height={100} width={710}/>
        <Skeleton height={40} width={240}/> 
      </div>
    </div>
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }
  
  return (
  <div className="prod-container">
    <div> 
      {productData.image}
      {/* <img src={product.image} alt={product.title} height="400px" width="400px"/>
    </div>
    <div className="prod-text">
      <h4>{product.category}</h4>
      <h1>{product.title}</h1>
      <p>Rating {product.rating  && product.rating.rate}<span><FontAwesomeIcon icon={faStar}/></span></p>
      <h3>$ {product.price}</h3>
      <p>{product.description}</p>
      <button className="btn btn-outline-dark" onClick={addProduct}>Add to Cart</button>
      <NavLink to="/cart" className="btn btn-dark">Go to Cart</NavLink> */}

    </div>
    </div>
  );
};



export default Product;



import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {  Link,NavLink } from "react-router-dom";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { addCart } from '../redux/action/index';


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = ({addCart,}) => {
  const cart = useSelector(state => state.cart);
  const cartLength = cart.length;
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>REAGAN.</Logo>
        </Center>
        <Right>
          
        <MenuItem>
            <Link to="/products">PRODUCTS</Link>
          </MenuItem>




          <MenuItem>
            <Link to="/register">REGISTER</Link>
          </MenuItem>

          <MenuItem>
            <Link to="/login">SIGN IN</Link>
          </MenuItem>
          <MenuItem>
            <NavLink to="/cart">
              <FontAwesomeIcon icon={faShoppingCart}/> 
              Cart({cartLength})
            </NavLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};


const mapStateToProps = (state) => {
  return {
    product: state.cart.items,
  };
};

const mapDispatchToProps = {
  addCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
