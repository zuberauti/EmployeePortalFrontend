import { FaDownload, FaPaperPlane } from "react-icons/fa";

export default function PayslipCard({ payslip }) {
  return (
    <div className="border border-light-gray rounded-lg p-4 hover:border-primary hover:shadow-md transition">
      <div className="flex justify-between items-center border-b pb-3 mb-3">
        <div className="font-semibold">{payslip.title}</div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <div className="text-xs text-gray">Pay Period</div>
          <div className="font-medium">{payslip.period}</div>
        </div>
        <div>
          <div className="text-xs text-gray">Pay Date</div>
          <div className="font-medium">{payslip.payDate}</div>
        </div>
        <div>
          <div className="text-xs text-gray">Status</div>
          <div className="font-medium">{payslip.status}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 p-2 rounded-md bg-blue-50 text-primary flex items-center justify-center gap-2">
          <FaDownload /> Download
        </button>
        <button className="flex-1 p-2 rounded-md bg-green-50 text-success flex items-center justify-center gap-2">
          <FaPaperPlane /> Email
        </button>
      </div>
    </div>
  );
}
