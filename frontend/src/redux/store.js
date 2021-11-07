import { configureStore } from "@reduxjs/toolkit";

import dataReducer from "./dataSlice";
import singleDataReducer from "./singleDataSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
    singleData: singleDataReducer,
    cart: cartReducer,
  },
});
