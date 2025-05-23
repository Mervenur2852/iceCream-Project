import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const found = state.cart.find(
        (item) =>
          item.id === payload.item.id && item.type === payload.selectedType
      );

      if (found) {
        found.amount++;
      } else {
        state.cart.push({
          ...payload.item,
          type: payload.selectedType,
          amount: 1,
        });
      }
    },

    deleteFromCart: (state, { payload }) => {
      const index = state.cart.findIndex(
        (item) => item.id === payload.id && item.type === payload.type
      );

      if (state.cart[index].amount > 1) {
        state.cart[index].amount--;
      } else {
        state.cart.splice(index, 1);
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
