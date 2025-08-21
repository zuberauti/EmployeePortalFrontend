import React from "react";
import { FaDownload, FaFileInvoiceDollar, FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Payslips = () => {
  const payslips = [
    { id: 1, month: "October 2023", date: "2023-10-31", amount: "₹50,000", file: "#" ,email : "#"},
    { id: 2, month: "September 2023", date: "2023-09-30", amount: "₹50,000", file: "#" ,email : "#"},
    { id: 3, month: "August 2023", date: "2023-08-31", amount: "₹50,000", file: "#" ,email : "#"},
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">Payslips</h1>

      {/* Payslip Summary Card */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title mb-4">Latest Payslip</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <FaFileInvoiceDollar className="text-primary text-4xl" />
              <div>
                <p className="font-semibold">October 2023</p>
                <p className="text-sm text-gray-500">Issued on 31 Oct 2023</p>
              </div>
            </div>
            <div className="text-lg font-bold text-primary">₹50,000</div>
            <a href="#" className="btn btn-primary btn-sm gap-2">
              <FaDownload size={14} /> Download
            </a>
          </div>
        </div>
      </div>

      {/* Payslip List Table */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title mb-4">Payslip History</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Date Issued</th>
                  <th>Amount</th>
                  <th>Download</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {payslips.map((p) => (
                  <tr key={p.id}>
                    <td className="flex items-center gap-2">
                      <FaCalendarAlt /> {p.month}
                    </td>
                    <td>{p.date}</td>
                    <td>{p.amount}</td>
                    <td>
                      <a href={p.file} className="btn btn-sm btn-primary gap-2">
                        <FaDownload size={14} /> Download
                      </a>
                    </td>
                     <td>
                      <a href={p.email} className="btn btn-sm btn-primary gap-2">
                        <MdEmail size={14} /> Email
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payslips;
