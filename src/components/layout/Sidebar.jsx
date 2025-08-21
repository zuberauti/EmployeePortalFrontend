import React from "react";
import { FaTachometerAlt, FaCalendarCheck, FaClipboardList, FaFileInvoiceDollar, FaUser, FaCog } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { title: "Dashboard", icon: <FaTachometerAlt />, link: "/" },
    { title: "Attendance", icon: <FaCalendarCheck />, link: "/attendance" },
    { title: "Leave Management", icon: <FaClipboardList />, link: "/leave-management" },
    { title: "Payslips", icon: <FaFileInvoiceDollar />, link: "/payslips" },
    { title: "Profile", icon: <FaUser />, link: "/profile" },
    { title: "Settings", icon: <FaCog />, link: "/settings" },
  ];

  return (
    <div className="w-64 bg-primary h-screen shadow-lg fixed left-0 top-0">
      <div className="p-4 font-bold text-xl border-b">Employee Portal</div>
      <ul className="menu p-4 space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className={`flex items-center text-white gap-2 ${location.pathname === item.link ? "active bg-secondary text-white rounded-lg" : ""}`}
            >
              {item.icon} {item.title}
            </Link>
          </li>
        ))}
        <li><Link to="/logout" className="btn btn-soft btn-error"><FaSignOutAlt /> Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
