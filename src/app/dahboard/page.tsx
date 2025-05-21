import Stats from './components/Stats';
import OrdersTable from './components/OrdersTable';
import MenuList from './components/MenuList';

export default function Dashboard() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Restaurant Dashboard</h1>
      <Stats />
      <OrdersTable />
      <MenuList />
    </main>
  );
}
