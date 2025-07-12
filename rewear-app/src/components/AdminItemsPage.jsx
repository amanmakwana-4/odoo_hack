import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const itemsData = [
  {
    id: 1,
    item: "Floral Summer Dress",
    user: "Sophia Clark",
    status: "Pending",
    image: "https://i.imgur.com/9XG6yWX.png",
  },
  {
    id: 2,
    item: "Leather Biker Jacket",
    user: "Ethan Miller",
    status: "Approved",
    image: "https://i.imgur.com/8zFJ4Vv.jpeg",
  },
  {
    id: 3,
    item: "Ankle Boots",
    user: "Olivia Davis",
    status: "Rejected",
    image: "https://i.imgur.com/tC3yEq1.jpeg",
  },
  {
    id: 13,
    item: "Ankle Boots",
    user: "Olivia Davis",
    status: "Rejected",
    image: "https://i.imgur.com/tC3yEq1.jpeg",
  },
  {
    id: 4,
    item: "Denim Shirt",
    user: "Noah Wilson",
    status: "Pending",
    image: "https://i.imgur.com/kFq7UzG.jpeg",
  },
  {
    id: 5,
    item: "Canvas Sneakers",
    user: "Isabella Taylor",
    status: "Approved",
    image: "https://i.imgur.com/YpH9JaT.jpeg",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Approved: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
};

const AdminItemsPage = () => {
  const { user } = useAuth0();
  const [selectedItem, setSelectedItem] = useState(null);

  if (selectedItem) {
    return (
      <div className="min-h-screen bg-[#fefcf8] text-[#333] flex flex-col items-center justify-center px-4 py-10">
        <button
          className="mb-6 text-sm font-medium text-indigo-600 underline"
          onClick={() => setSelectedItem(null)}
        >
          ← Back to Items List
        </button>
        <img
          src={selectedItem.image}
          alt={selectedItem.item}
          className="w-full max-w-xs sm:max-w-md h-auto rounded shadow-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-center">{selectedItem.item}</h2>
        <p className="text-sm text-gray-600 mb-1 text-center">
          Uploaded by: {selectedItem.user}
        </p>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[selectedItem.status]}`}
        >
          {selectedItem.status}
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefcf8] text-[#333]">
      {/* Top Navbar */}
      <header className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 border-b bg-white gap-4 sm:gap-0">
        <h1 className="text-xl font-bold">ReWear</h1>
        <nav className="flex items-center flex-wrap gap-4">
          <a href="/dashboard" className="text-sm font-medium text-gray-700 hover:underline">
            Dashboard
          </a>
          <a href="/items" className="text-sm font-medium text-gray-700 hover:underline">
            Items
          </a>
          <a href="/users" className="text-sm font-medium text-gray-700 hover:underline">
            Users
          </a>
          <a href="/reports" className="text-sm font-medium text-gray-700 hover:underline">
            Reports
          </a>
          {user && (
            <img
              src={user.picture}
              alt={user.name}
              title={user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
        </nav>
      </header>

      {/* Page Title */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">Items</h2>

        {/* Table - Make Scrollable on Small Screens */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg text-left text-sm">
            <thead className="bg-[#fdfaf5] border-b">
              <tr>
                <th className="p-4 font-medium text-gray-600">Item</th>
                <th className="p-4 font-medium text-gray-600">User</th>
                <th className="p-4 font-medium text-gray-600">Status</th>
                <th className="p-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {itemsData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.item}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span>{item.item}</span>
                  </td>
                  <td className="p-4">{item.user}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td
                    onClick={() => setSelectedItem(item)}
                    className="p-4 text-indigo-600 font-medium hover:underline cursor-pointer"
                  >
                    View
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminItemsPage;
