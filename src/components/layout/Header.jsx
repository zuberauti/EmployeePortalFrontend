import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-6 sticky top-0 z-50">
      <div className="flex-1">
        <h1 className="text-lg font-bold flex gap-2 items-center">  <FaUserCircle className="text-2xl" /> Employee Portal</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="btn btn-ghost btn-circle">
          <FaBell className="text-xl" />
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <FaUserCircle className="text-3xl" />
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/logout" className="btn btn-soft btn-error">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
