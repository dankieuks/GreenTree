import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Components/SideBar.jsx";
import { Outlet } from "react-router-dom";
function Admin() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <Sidebar className="col-span-1" />
      <div className="col-span-4 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
