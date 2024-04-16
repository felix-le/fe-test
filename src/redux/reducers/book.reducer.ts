// import { GET_BOOKS } from "../actionTypes";
import { GET_BOOKS } from "../actionTypes";

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
    default:
      return state;
  }
};

export default bookReducer;
