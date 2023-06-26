
import Home from "./pages/Home";
import Products from "./components/Products";
import Product  from "./components/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:id">
            <Product />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
