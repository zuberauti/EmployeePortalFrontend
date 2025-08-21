import React from "react";

const Calendar = ({ days }) => {
  const getStatusBadge = (status, time) => {
    switch (status) {
      case "present":
        return <span className="badge badge-success text-xs">Present {time && `: ${time}`}</span>;
      case "absent":
        return <span className="badge badge-error text-xs">Absent</span>;
      case "late":
        return <span className="badge badge-warning text-xs">Late {time && `: ${time}`}</span>;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-7 gap-3">
      {days.map((day, index) => (
        <div
          key={index}
          className="bg-base-200 rounded-lg border border-base-300 p-2 h-20 flex flex-col justify-between items-center"
        >
          <span className="font-medium">{day.day}</span>
          {day.status && getStatusBadge(day.status, day.time)}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
