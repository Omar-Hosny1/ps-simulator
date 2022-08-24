import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "./GameSlice";

const Store = configureStore({ reducer: { GameSlice: GameSlice.reducer } });
export default Store;
