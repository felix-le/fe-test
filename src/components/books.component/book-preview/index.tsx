import React from "react";
import { IBook } from "types";
import BookInfo from "./book-info";

interface IBookPreviewProps extends IBook {
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateBookId?: React.Dispatch<
    React.SetStateAction<number | null | undefined>
  >;
  deleteFn: (id?: number) => void;
}

const BookPreview: React.FC<IBookPreviewProps> = ({
  name,
  price,
  category,
  thumbnail,
  setShowModal,
  id,
  setUpdateBookId,
  deleteFn,
}) => {
  const _updateBook = () => {
    if (setShowModal && setUpdateBookId) {
      setShowModal(true);
      setUpdateBookId(id);
    }
  };

  return (
    <>
      <div className="h-full bg-white">
        <div className="font-normal block p-[25px] relative h-full ">
          <div className="group">
            <div className="flex flex-col justify-between w-full ">
              <button
                onClick={_updateBook}
                className="w-full h-[333px] cursor-pointer flex flex-col justify-center items-center my-0 mx-auto hover:opacity-80"
              >
                {thumbnail && (
                  <img src={thumbnail} alt={name} className="h-auto" />
                )}
              </button>
              <div className="mt-4">
                <BookInfo
                  name={name}
                  category={category}
                  price={price}
                  deleteFn={() => deleteFn(id!)} // Fix: Add the non-null assertion operator (!) to the id parameter to ensure it is of type number
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
