import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products";
import SingleItem from "./components/SingleItem";
import Login from "./pages/Login";
import Register from "./pages/Register";
import toast, { Toaster } from "react-hot-toast";

function App({ current }) {
  return (
    <>
      

      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/products" component={Products} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Register} />
            {!current ? (
              <Redirect to="/" />
            ) : (
              <Route exact path="/product/:id" component={SingleItem} />
            )}
          </Switch>
        </div>
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
