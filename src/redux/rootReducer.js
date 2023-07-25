import { combineReducers } from "redux";
import shoppingReducer from "./Shopping/shopping-reducer";
import jeweleryReducer from "./Shopping/jewelery-reducer";
import electronicsReducer from "./Shopping/electronics-reducer";
import menReducer from "./Shopping/men-reducer";
import womenReducer from "./Shopping/women-reducer";
import { authReducer } from "./Auth/auth.reducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
  jewelery: jeweleryReducer,
  electronics: electronicsReducer,
  men: menReducer,
  women: womenReducer,
  auth: authReducer
});

export default rootReducer;