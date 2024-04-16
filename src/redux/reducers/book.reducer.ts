import { GET_BOOKS, ADD_BOOK } from "../actionTypes";

import { IBook } from "../../types/book-type";
import data from "../../data";

interface IAction {
  type: string;
  payload: {
    data: IBook[];
  };
}

const initialEventState = {
  books: [],
};

const bookReducer = (state = initialEventState, action: IAction) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        // instead of returning the data directly, we can use fetch data from an API
        // example of fetching data from an API
        // books: action.payload.data
        books: data.map((item) => {
          // modify the data here
          const newObj = {
            ...item,
          };
          return newObj;
        }),
      };
    case ADD_BOOK:
      const newBook = {
        id: state.books.length + 1,
        ...action.payload.data,
      };
      return {
        ...state,
        // instead of returning the data directly, we can use fetch data from an API
        // example of fetching data from an API
        // books: action.payload.data
        books: [...state.books, newBook],
      };
    default:
      return state;
  }
};

export default bookReducer;
