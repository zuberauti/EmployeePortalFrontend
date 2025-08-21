import React from "react";
import { FaCalendarAlt, FaPlus, FaCheck, FaTimes, FaClock } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { MdOutlineSick } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";

const LeaveManagement = () => {
  const leaveRequests = [
    { id: 1, type: "Sick Leave", from: "2023-10-05", to: "2023-10-07", status: "approved" },
    { id: 2, type: "Casual Leave", from: "2023-10-12", to: "2023-10-13", status: "pending" },
    { id: 3, type: "Annual Leave", from: "2023-10-20", to: "2023-10-25", status: "rejected" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "approved":
        return <span className="badge badge-success gap-1 text-xs"><FaCheck /> Approved</span>;
      case "pending":
        return <span className="badge badge-warning gap-1 text-xs"><FaClock /> Pending</span>;
      case "rejected":
        return <span className="badge badge-error gap-1 text-xs"><FaTimes /> Rejected</span>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">Leave Management</h1>
      {/* Leave Requests Card */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <div className="flex justify-between items-center">
          <h2 className="card-title mb-4">My Leave Requests</h2>
           <button className="btn btn-primary btn-sm gap-2" onClick={()=>document.getElementById('my_modal_3').showModal()}><FaPlus size={14} /> New Request</button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                            <form method="dialog">
                             {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                           </form>
                           <h3 className="font-bold text-lg">New Leave Request</h3>
                          <div className="flex flex-col gap-2 py-4"> 
                            <label htmlFor="" className="text-md text-gray font-semibold">Select Leave Type</label>
                            <fieldset className="fieldset">
                                  <select defaultValue="Pick a browser" className="select w-full">
                                  <option disabled={true}>Leave Type</option>
                                  <option>Sick Leave</option>
                                  <option>Annual Leave</option>
                                  <option>Emergency Leave</option>
                                  <option>Parental Leave</option>
                                  <option>Unpaid Leave</option>
                                  </select>
                            </fieldset>
                            <label htmlFor="" className="text-md text-gray font-semibold">Start Date</label>
                            <input type="date" placeholder="Type here" className="input w-full" />
                            <label htmlFor="" className="text-md text-gray font-semibold">End Date</label>
                            <input type="date" placeholder="Type here" className="input w-full" />
                            <label htmlFor="" className="text-md text-gray font-semibold">Duration</label>
                            <input type="number" placeholder="Type here" className="input w-full" />
                            <label htmlFor="" className="text-md text-gray font-semibold">Reason</label>
                            <textarea placeholder="Reason" className="textarea textarea-md w-full"></textarea>
                          </div>
                           <button className="btn btn-primary w-full mt-2">Submit Request</button>
                      </div>
                    </dialog>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((leave) => (
                  <tr key={leave.id}>
                    <td className="flex items-center gap-2"><FaCalendarAlt /> {leave.type}</td>
                    <td>{leave.from}</td>
                    <td>{leave.to}</td>
                    <td>{getStatusBadge(leave.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

       <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title mb-4">Leave Balance</h2>
                <div className="stats stats-vertical md:stats-horizontal shadow w-full">
                  {/* Present Days */}
                  <div className="stat">
                    <div className="stat-figure text-success">
                      <FaUmbrellaBeach size={22} />
                    </div>
                    <div className="stat-title">Annual LeaveAnnual Leave</div>
                    <div className="stat-value text-success">18 days</div>
                    <div className="stat-desc">Remaining this year</div>
                  </div>
      
                  {/* Absent Days */}
                  <div className="stat">
                    <div className="stat-figure text-error">
                      <MdOutlineSick size={22} />
                    </div>
                    <div className="stat-title">Sick Leave</div>
                    <div className="stat-value text-error">10 days</div>
                    <div className="stat-desc">Remaining this year</div>
                  </div>
      
                  {/* Late Arrivals */}
                  <div className="stat">
                    <div className="stat-figure text-warning">
                      <LuCalendarClock size={22} />
                    </div>
                    <div className="stat-title">Other Leave</div>
                    <div className="stat-value text-warning">2 days</div>
                    <div className="stat-desc">Remaining this year</div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
};

export default LeaveManagement;
