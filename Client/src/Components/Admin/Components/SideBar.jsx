import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white h-screen p-4">
      <aside>
        <ul>
          <li className="mb-4">
            <Link to="/" className="text-lg hover:text-gray-400">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/users" className="text-lg hover:text-gray-400">
              Users
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/settings" className="text-lg hover:text-gray-400">
              Settings
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Sidebar;
