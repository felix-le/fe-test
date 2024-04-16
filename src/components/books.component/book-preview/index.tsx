import React from "react";
import { IBook } from "types";
import BookInfo from "./book-info";
const BookPreview = ({ name, price, category, thumbnail }: IBook) => {
  const _openModal = () => {
    console.log("Open modal");
  };

  const _deleteBook = () => {
    console.log("Delete book");
  };

  return (
    <>
      <div className="h-full">
        <div className="font-normal block p-[25px] relative h-full">
          <div className="group">
            <div className="flex flex-col justify-between w-full">
              <div className="w-[280px] h-[333px] flex flex-col justify-center items-center my-0 mx-auto">
                <button onClick={_openModal} className="cursor-pointer">
                  <img src={thumbnail} alt={name} className="w-full h-auto" />
                </button>
              </div>
              <div className="mt-4">
                <BookInfo
                  name={name}
                  category={category}
                  price={price}
                  deleteFn={() => _deleteBook()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPreview;
