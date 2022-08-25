import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "./GameSlice";
import MoviesSlice from "./MoviesSlice";

const Store = configureStore({
  reducer: { GameSlice: GameSlice.reducer, MoviesSlice: MoviesSlice.reducer },
});
export default Store;
