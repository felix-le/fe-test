// components/BookInfo.tsx
import React from "react";
import { IBook } from "types";

const BookInfo: React.FC<IBook> = ({ name, category, price, deleteFn }) => {
  return (
    <>
      <h3 className="text-sm font-bold text-blue uppercase w-full text-center font-display min-h-[36px] tracking-widest">
        {name}
      </h3>
      <ul className="flex flex-col mt-3 justify-center">
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
        <li className="text-center text-sm mt-4">
          <button
            onClick={deleteFn}
            className=" text-center rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Delete
          </button>
        </li>
      </ul>
    </>
  );
};

export default BookInfo;
