import React from "react";
import { FaCheck, FaTimes, FaClock, FaPlus } from "react-icons/fa";

const Attendance = () => {
  const days = [
    { day: 1, status: null },
    { day: 2, status: "present", time: "7h 45m" },
    { day: 3, status: "present", time: "8h 30m" },
    { day: 4, status: "absent" },
    { day: 5, status: "late", time: "9:15 AM" },
    { day: 6, status: "present", time: "8h 00m" },
    { day: 7, status: null },
    { day: 8, status: null },
    { day: 9, status: "present", time: "8h 15m" },
    { day: 10, status: "present", time: "7h 30m" },
    { day: 11, status: null },
    { day: 12, status: null },
    { day: 13, status: null },
    { day: 14, status: null },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "present":
        return "badge badge-success gap-1 text-xs text-white font-semibold";
      case "absent":
        return "badge badge-error gap-1 text-xs text-white font-semibold";
      case "late":
        return "badge badge-warning gap-1 text-xs text-white font-semibold";
      default:
        return "";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">Attendance Tracking</h1>

      {/* Calendar Card */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          {/* Month Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="card-title">October 2023</h2>
            <button className="btn btn-primary btn-sm gap-2">
              <FaPlus size={14} /> Log Time
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-3">
            {days.map((day, index) => (
              <div
                key={index}
                className="border rounded-lg p-2 h-20 flex flex-col justify-between items-center bg-base-200"
              >
                <span className="font-medium">{day.day}</span>
                {day.status && (
                  <span className={getStatusClass(day.status)}>
                    {day.status === "present" && `Present: ${day.time}`}
                    {day.status === "absent" && "Absent"}
                    {day.status === "late" && `Late: ${day.time}`}
                  </span>
                )}
              </div>
            ))}
            
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title mb-4">Attendance Summary</h2>
          <div className="stats stats-vertical md:stats-horizontal shadow w-full">
            {/* Present Days */}
            <div className="stat">
              <div className="stat-figure text-success">
                <FaCheck size={22} />
              </div>
              <div className="stat-title">Present Days</div>
              <div className="stat-value text-success">18</div>
              <div className="stat-desc">This month</div>
            </div>

            {/* Absent Days */}
            <div className="stat">
              <div className="stat-figure text-error">
                <FaTimes size={22} />
              </div>
              <div className="stat-title">Absent Days</div>
              <div className="stat-value text-error">1</div>
              <div className="stat-desc">This month</div>
            </div>

            {/* Late Arrivals */}
            <div className="stat">
              <div className="stat-figure text-warning">
                <FaClock size={22} />
              </div>
              <div className="stat-title">Late Arrivals</div>
              <div className="stat-value text-warning">2</div>
              <div className="stat-desc">This month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
