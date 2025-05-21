export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">Dashboard</h2>
        <ul>
          <li><a href="/dashboard">Home</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Menu</a></li>
        </ul>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
