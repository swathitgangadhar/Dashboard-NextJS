'use client';

import { useState } from 'react';

type Dish = {
  id: number;
  name: string;
  price: string;
  category: string;
};

const initialMenu: Dish[] = [
  { id: 1, name: 'Margherita Pizza', price: '$12.00', category: 'Pizza' },
  { id: 2, name: 'Caesar Salad', price: '$8.50', category: 'Salad' },
  { id: 3, name: 'Spaghetti Bolognese', price: '$14.00', category: 'Pasta' },
];

export default function MenuList() {
  const [menu, setMenu] = useState<Dish[]>(initialMenu);

  const handleEdit = (id: number) => {
    alert(`Edit dish with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    const confirmed = confirm('Are you sure you want to delete this dish?');
    if (confirmed) {
      setMenu(menu.filter(dish => dish.id !== id));
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Menu Management</h2>
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="p-2">Dish</th>
            <th className="p-2">Price</th>
            <th className="p-2">Category</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {menu.map(dish => (
            <tr key={dish.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{dish.name}</td>
              <td className="p-2">{dish.price}</td>
              <td className="p-2">{dish.category}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => handleEdit(dish.id)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(dish.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {menu.length === 0 && (
            <tr>
              <td colSpan={4} className="p-4 text-center text-gray-400">
                No dishes available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
