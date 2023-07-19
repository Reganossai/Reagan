import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Maincart from "./pages/Maincart";
import Products from "./components/Products";
import SingleItem from "./components/SingleItem";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Prod from "./components/Prod";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registrationsuccessful from "./components/Registrationsuccessful";
import Contact from "./pages/Contact";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";

function App({ current }) {
  return (
    <>
      <ToastContainer />

      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Maincart} />
            <Route path="/products" component={Products} />
            <Route path="/prod" component={Prod} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="/men" component={Men} />
            <Route path="/women" component={Women} />
            <Route exact path="/jewelery" component={Jewelery} />
            <Route exact path="/electronics" component={Electronics} />
            <Route
              path="/registrationsuccess"
              component={Registrationsuccessful}
            />
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
