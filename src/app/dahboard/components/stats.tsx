'use client';

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard label="Total Orders" value="1,203" />
      <StatCard label="Revenue" value="$12,500" />
      <StatCard label="New Customers" value="97" />
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}
