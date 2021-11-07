import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
    delivery: 20,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const findIndex = state.cart.findIndex((ele) => ele.id === payload.id);
      console.log(findIndex);
      if (findIndex === -1) {
        state.cart.push(payload);
        let total = 0;
        state.cart.map((ele) => (total += ele.price));
        state.total = total;
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
      let total = 0;
      state.cart.map((ele) => (total += ele.price));
      state.total = total;
    },
    confirmOrder: (state, action) => {
      state.cart = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, confirmOrder } = cart.actions;

export default cart.reducer;
