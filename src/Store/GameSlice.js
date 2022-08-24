import { createSlice } from "@reduxjs/toolkit";
import Background from "../components/Images/Background.png";
const initialState = {
  gameData: {
    image: Background,
    title: "Astro's Playroom",
    desc: "SONY",
    poster: Background,
  },
};
const GameSlice = createSlice({
  name: "GameSlice",
  initialState,
  reducers: {
    updateData(state, action) {
      state.gameData = action.payload;
    },
  },
});

export const GameActions = GameSlice.actions;
export default GameSlice;
