import React from "react";
import { IBook } from "../../types";
import BookPreview from "./book-preview";
import BookModal from "./bookModal";

interface IBooksProps {
  data?: IBook[];
}
const Books = ({ data }: IBooksProps) => {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);
  const _openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  if (!data) {
    return <div>Loading...</div>; // Display a loading message if data is empty
  }
  const _addBook = () => {
    _openModal();
  };

  return (
    // map data to BookPreview component
    <>
      <div className="text-right">
        <button
          type="button"
          className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => _addBook()}
        >
          Button text
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((book) => (
          <BookPreview
            key={book.id}
            name={book.name}
            price={book.price}
            category={book.category}
            thumbnail={book.thumbnail}
          />
        ))}
      </div>
      <BookModal
        // show={isModalOpen}
        // handleShow={closeModal}
        // className=""
        // modalTitle="Your Modal Title"

        showModal={showModal}
        setShowModal={setShowModal}
      >
        {/* <ProjectDetail projectId={projectId} /> */}
        <h1>hello book modal</h1>
      </BookModal>
    </>
  );
};

export default Books;
