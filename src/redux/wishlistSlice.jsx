import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('wishlist')) ?? [];

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action) {
      state.push(action.payload);
      localStorage.setItem('wishlist', JSON.stringify(state));
    },
    deleteFromWishlist(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addToWishlist, deleteFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
