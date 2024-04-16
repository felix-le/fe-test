import { GET_BOOKS, ADD_BOOK, UPDATE_BOOK } from "../actionTypes";
import { IBook } from "../../types/book-type";
import data from "../../data";

interface IState {
  books: IBook[];
}

interface IAction {
  type: string;
  payload: {
    id: any;
    data: IBook;
  };
}

const initialEventState: IState = {
  books: [],
};

const bookReducer = (
  state: IState = initialEventState,
  action: IAction
): IState => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: data.map((item: IBook) => ({ ...item })),
      };
    case ADD_BOOK:
      const newBook = {
        id: state.books.length + 1,
        ...action.payload.data,
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };
    case UPDATE_BOOK:
      const updatedBook = action.payload.data;
      const updatedBooks = state.books.map((book: IBook) => {
        if (book.id === updatedBook.id) {
          return updatedBook;
        }
        return book;
      });
      return {
        ...state,
        books: updatedBooks,
      };
    case "DELETE_BOOK":
      const id = action.payload.id;
      const filteredBooks = state.books.filter((book: IBook) => book.id !== id);
      return {
        ...state,
        books: filteredBooks,
      };
    default:
      return state;
  }
};

export default bookReducer;
