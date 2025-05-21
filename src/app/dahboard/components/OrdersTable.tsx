'use client';

const orders = [
  { id: '001', customer: 'John Doe', total: '$45.00', status: 'Completed' },
  { id: '002', customer: 'Jane Smith', total: '$75.00', status: 'Pending' },
];

export default function OrdersTable() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-semibold mb-2">Recent Orders</h2>
      <table className="w-full text-sm text-left">
        <thead>
          <tr>
            <th>ID</th><th>Customer</th><th>Total</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.total}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
