import React, { useState } from "react";
import { IBook } from "types";
interface BookFormProps {
  onSubmit: (formData: BookFormData) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateBookId?: React.Dispatch<number | null | undefined>;
  selectedBook?: IBook | null | undefined;
}

interface BookFormData {
  name?: string;
  price?: number;
  description?: string;
  category?: string;
  thumbnail?: string;
}

const initialFormData: BookFormData = {
  name: "",
  price: 0,
  description: "",
  category: "",
  thumbnail: "",
};

const BookForm: React.FC<BookFormProps> = ({
  onSubmit,
  setShowModal,
  setUpdateBookId,
  selectedBook,
}) => {
  const [formData, setFormData] = useState<BookFormData>(
    selectedBook || initialFormData
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData);
  };

  const _handleCloseModal = () => {
    setShowModal(false);
    if (setUpdateBookId) {
      setUpdateBookId(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="name"
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        Name:
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          // value={formData.name}
          onChange={handleChange}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          defaultValue={formData.name}
        />
      </label>
      <br />

      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        Price:
        <input
          type="number"
          name="price"
          id="price"
          autoComplete="price"
          value={formData.price}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        />
      </label>
      <br />

      <label
        htmlFor="description"
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        Description:
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        />
      </label>
      <br />

      <label
        htmlFor="category"
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        Category:
        <input
          type="text"
          name="category"
          id="category"
          autoComplete="category"
          value={formData.category}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        />
      </label>
      <br />

      <label
        htmlFor="thumbnail"
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        Thumbnail:
        <input
          type="text"
          id="thumbnail"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        />
      </label>
      <br />
      {/*footer*/}
      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => _handleCloseModal()}
        >
          Close
        </button>
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default BookForm;
