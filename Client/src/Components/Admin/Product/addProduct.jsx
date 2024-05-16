import { BsFillXCircleFill } from "react-icons/bs";
import React from "react";

function AddProduct({ toggleForm }) {
  return (
    <section className="max-w-lg mx-auto mt-10">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="discription"
            className="block text-sm font-medium text-gray-700"
          >
            Discription
          </label>
          <input
            type="text"
            id="discription"
            name="discription"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="other"
            className="block text-sm font-medium text-gray-700"
          >
            Other
          </label>
          <input
            type="text"
            id="other"
            name="other"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Thêm sản phẩm
          </button>
          <button
            className="absolute top-24 p-1 text-2xl rounded-md text-gray-500 hover:text-gray-700"
            onClick={toggleForm}
          >
            <BsFillXCircleFill className="text-red-500" />
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddProduct;
