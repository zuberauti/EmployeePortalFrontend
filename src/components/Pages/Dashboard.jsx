import React from "react";
import {  FaUserTimes, FaClock, FaMoneyCheckAlt, FaCalendarCheck, FaClipboardList,FaUmbrellaBeach  } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { HiDocumentCurrencyRupee } from "react-icons/hi2";

const Dashboard = () => {
  const stats = [
    { title: "Leave Balance", value: 18, icon: <FaUmbrellaBeach />, color: "text-success" },
    { title: "Attendance", value: 1, icon: <BsFillCalendarDateFill />, color: "text-error" },
    { title: "Upcoming payslips", value: 2, icon: <HiDocumentCurrencyRupee />, color: "text-warning" },
  ];

  const quickLinks = [
    { title: "Attendance", icon: <FaCalendarCheck />, link: "/attendance", color: "btn-primary" },
    { title: "Leave Requests", icon: <FaClipboardList />, link: "/leave-management", color: "btn-secondary" },
    { title: "Payslips", icon: <FaMoneyCheckAlt />, link: "/payslips", color: "btn-accent" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Message */}
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500 text-sm">Overview of your attendance, leave, and payslips</p>

      {/* Stats Section */}
      <div className="stats stats-vertical md:stats-horizontal shadow w-full gap-4">
        {stats.map((stat, index) => (
          <div className="stat" key={index}>
            <div className={`stat-figure ${stat.color} text-3xl`}>{stat.icon}</div>
            <div className="stat-title text-xl font-semibold">{stat.title}</div>
            <div className={`stat-value ${stat.color}`}>{stat.value}</div>
            <div className="stat-desc">This month</div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickLinks.map((item, index) => (
          <a href={item.link} key={index} className={`btn ${item.color} gap-2 text-lg justify-center h-24 text-white`}>
            {item.icon} {item.title}
          </a>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title mb-4">Recent Activity</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-10-10</td>
                  <td>Marked Present</td>
                  <td><span className="badge badge-success text-white font-semibold">Present</span></td>
                </tr>
                <tr>
                  <td>2023-10-09</td>
                  <td>Applied for Leave</td>
                  <td><span className="badge badge-warning text-white font-semibold">Pending</span></td>
                </tr>
                <tr>
                  <td>2023-10-08</td>
                  <td>Marked Absent</td>
                  <td><span className="badge badge-error text-white font-semibold">Absent</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
