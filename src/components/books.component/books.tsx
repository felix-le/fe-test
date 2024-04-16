import React from "react";
import { IBook } from "../../types";
import BookPreview from "./book-preview";
import BookModal from "./bookModal";
import BookForm from "./book-form";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import {
  addBook,
  updateBook,
  deleteBook,
} from "../../redux/actions/book.actions";
interface IBooksProps {
  data?: IBook[];
}
const Books = ({ data }: IBooksProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [updateBookId, setUpdateBookId] = React.useState<
    number | null | undefined
  >(null);

  const selectedBook = data?.find((book) => book.id === updateBookId);

  if (!data) {
    return <div>Loading...</div>; // Display a loading message if data is empty
  }
  const _addBook = () => {
    setShowModal(true);
  };

  const _handleAddBook = (data: IBook) => {
    setUpdateBookId(null);
    dispatch(addBook(data));
    setShowModal(false);
  };

  const _handleUpdateBook = (data: IBook) => {
    setUpdateBookId(null);
    const newObj = {
      ...data,
      id: updateBookId || undefined,
    };
    dispatch(updateBook(newObj));
    setShowModal(false);
  };
  const _deleteBook = (id: number) => {
    dispatch(deleteBook(id));
  };

  return (
    // map data to BookPreview component
    <>
      <div className="text-right mb-6">
        <button
          type="button"
          className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => _addBook()}
        >
          Add A Book
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((book) => (
          <BookPreview
            id={book.id}
            key={book.id}
            name={book.name}
            price={book.price}
            category={book.category}
            thumbnail={book.thumbnail}
            setShowModal={setShowModal}
            setUpdateBookId={setUpdateBookId}
            deleteFn={() => _deleteBook(book.id!)}
          />
        ))}
      </div>
      <BookModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalTitle={`${!!updateBookId ? "Update A Book" : "Add A Book"}`}
      >
        <BookForm
          onSubmit={!!updateBookId ? _handleUpdateBook : _handleAddBook}
          setShowModal={setShowModal}
          setUpdateBookId={setUpdateBookId}
          selectedBook={selectedBook}
        />
      </BookModal>
    </>
  );
};

export default Books;
