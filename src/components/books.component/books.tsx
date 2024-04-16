import React from "react";
import { IBook } from "../../types";

interface IBooksProps {
  data?: IBook[];
}

const Books = ({ data }: IBooksProps) => {
  console.log(data);
  if (!data) {
    return <div>Loading...</div>; // Display a loading message if data is empty
  }

  return <div>Books</div>;
};

export default Books;
