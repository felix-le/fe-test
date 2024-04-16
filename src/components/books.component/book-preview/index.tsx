import React from "react";
import { IBook } from "types";
import BookInfo from "./book-info";

const BookPreview = ({ name, price, category, thumbnail }: IBook) => {
  const _deleteBook = () => {
    console.log("Delete book");
  };

  return (
    <>
      <div className="h-full bg-white">
        <div className="font-normal block p-[25px] relative h-full ">
          <div className="group">
            <div className="flex flex-col justify-between w-full ">
              <button
                // onClick={_openModal}
                className="w-full h-[333px] cursor-pointer flex flex-col justify-center items-center my-0 mx-auto hover:opacity-80"
              >
                <img src={thumbnail} alt={name} className="h-auto" />
              </button>
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
