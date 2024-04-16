// export const GET_EVENT_DAILY = 'GET_EVENT_DAILY';
import { IBook } from "../../types/book-type";
import { GET_BOOKS } from "../actionTypes";

export const getBooksFn = (data: IBook[]) => ({
  type: GET_BOOKS,
  payload: {
    data,
  },
});
