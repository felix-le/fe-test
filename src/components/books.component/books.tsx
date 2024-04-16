import React from "react";
import { IBook } from "../../types";
import BookPreview from "./book-preview";
interface IBooksProps {
  data?: IBook[];
}
const Books = ({ data }: IBooksProps) => {
  console.log(data);
  if (!data) {
    return <div>Loading...</div>; // Display a loading message if data is empty
  }

  return (
    // map data to BookPreview component
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
  );
};

export default Books;
