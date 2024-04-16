// components/BookInfo.tsx
import React from "react";
import { IBook } from "types";

const BookInfo: React.FC<IBook> = ({ name, category, price, deleteFn }) => {
  return (
    <>
      <h3 className="text-sm font-bold text-blue uppercase w-full text-center font-display min-h-[36px] tracking-widest">
        {name}
      </h3>
      <ul className="flex flex-col list-disc mt-3">
        {name && (
          <li className="text-left text-sm mb-2">
            <span className="font-bold">Name: </span> {name}
          </li>
        )}
        <li className="text-left text-sm mb-2">
          <span className="font-bold">Category: </span>
          {category}
        </li>
        <li className="text-left text-sm mb-2">
          <span className="font-bold">price: </span>
          {price}
        </li>
        <li className="text-left text-sm mb-2">
          <button
            onClick={deleteFn}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      </ul>
    </>
  );
};

export default BookInfo;
