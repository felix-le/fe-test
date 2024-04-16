import { ADD_BOOK } from "../actionTypes";
import { IBook } from "types";

export const addBook = (book: IBook) => {
  return {
    type: ADD_BOOK,
    payload: { data: book },
  };
};
export const updateBook = (book: IBook) => {
  return {
    type: "UPDATE_BOOK",
    payload: { data: book },
  };
};

export const deleteBook = (id: number) => {
  return {
    type: "DELETE_BOOK",
    payload: { id },
  };
};
