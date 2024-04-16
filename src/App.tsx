import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";

export default function App() {
  const books = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch<AppDispatch>();

  const _getBooks = () => {
    dispatch({ type: "GET_BOOKS" });
  };
  useEffect(() => {
    _getBooks();
  }, []);
  console.log(books);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
