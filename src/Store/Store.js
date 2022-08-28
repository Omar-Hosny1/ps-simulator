import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import GameSlice from "./GameSlice";
import MoviesSlice from "./MoviesSlice";

const Store = configureStore({
  reducer: {
    GameSlice: GameSlice.reducer,
    MoviesSlice: MoviesSlice.reducer,
    AuthSlice: AuthSlice.reducer,
  },
});
export default Store;
