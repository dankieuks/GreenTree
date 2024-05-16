import { BsFillXCircleFill } from "react-icons/bs";
import React from "react";

function AddBlogPost({ toggleForm }) {
  return (
    <section className="max-w-lg mx-auto mt-10">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="5"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Blog Post
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

export default AddBlogPost;
