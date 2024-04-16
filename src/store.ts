import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./redux/reducers/book.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  books: bookReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
