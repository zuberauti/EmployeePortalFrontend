import React from "react";

const Table = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead className="bg-base-200">
          <tr>
            {headers.map((h, idx) => (
              <th key={idx} className="font-semibold text-gray-700">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
