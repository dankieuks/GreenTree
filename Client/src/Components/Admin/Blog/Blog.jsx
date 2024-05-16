import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiMessageSquareEdit } from "react-icons/bi";
import React, { useState } from "react";
import AddBlogPost from "./addBlog.jsx";

function Blog() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="p-6">
      <header>
        <h1 className="text-3xl font-bold mb-6">Quản lý bài đăng</h1>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-4" onClick={toggleForm}>
          Thêm bài viết mới
        </h2>
        {showForm && (
          <form>
            <AddBlogPost toggleForm={toggleForm} />
          </form>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Blog List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Discription
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Other
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src="https://media.istockphoto.com/id/1401126607/vi/anh/khung-c%E1%BA%A3nh-tr%C3%AAn-kh%C3%B4ng-c%E1%BB%A7a-nh%E1%BB%AFng-t%C3%B2a-nh%C3%A0-ch%E1%BB%8Dc-tr%E1%BB%9Di-tuy%E1%BB%87t-%C4%91%E1%BA%B9p-d%E1%BB%8Dc-theo-d%C3%B2ng-s%C3%B4ng-tr%C3%AAn-b%E1%BA%A7u-tr%E1%BB%9Di.jpg?s=612x612&w=0&k=20&c=tKG0XCBB-k7AuUUNvH6VrCW7DjSojIGmrxJD6rcPabE="
                    alt="Product"
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Product A</td>
                <td className="px-6 py-4 whitespace-nowrap">Hello</td>
                <td className="px-6 py-4 whitespace-nowrap">0348216852</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-indigo-600 text-2xl hover:text-indigo-900">
                    <BiMessageSquareEdit />
                  </button>
                  <button className="text-red-600 text-2xl hover:text-red-900 ml-4">
                    <RiDeleteBin6Fill />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Blog;
