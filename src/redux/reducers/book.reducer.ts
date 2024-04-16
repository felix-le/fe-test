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
        books: data.map((item) => {
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
