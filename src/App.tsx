import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import Layout from "./components/layout";
import Books from "./components/books.component/books";

import ContentBox from "./components/layout/content-box";

export default function App() {
  const { books } = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch<AppDispatch>();

  const _getBooks = async () => {
    setTimeout(() => {
      dispatch({ type: "GET_BOOKS" });
    }, 2000); // Delay dispatch by 2000 milliseconds (2 seconds) like fetching data from an API

    // If we want to fetch data from an API, we can use the following code
    // const response = await fetch("https://api.example.com/books");
    // const data = await response.json();
    // dispatch({ type: "GET_BOOKS", payload: { data } });
  };
  useEffect(() => {
    _getBooks();
  }, []);

  const _addBook = () => {
    console.log("Add book");
  };

  return (
    <Layout>
      <ContentBox>
        <div className="text-right">
          <button
            type="button"
            className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => _addBook()}
          >
            Button text
          </button>
        </div>
        <Books data={books} />
      </ContentBox>
    </Layout>
  ); // Update the type of the 'data' prop to 'IBook[]'
  // return <h1>hello</h1>;
}
