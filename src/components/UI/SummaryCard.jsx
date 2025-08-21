export default function SummaryCard({ icon, label, value, color }) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow border">
      <div className={`p-3 rounded-full ${color} text-white text-xl mr-4`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-xs text-gray-400">This month</p>
      </div>
    </div>
  );
}
