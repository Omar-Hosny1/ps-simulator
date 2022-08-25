import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "MoviesSlice",
  initialState: { data: [] },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});
export default MoviesSlice;
export const MoviesActions = MoviesSlice.actions;
