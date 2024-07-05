'use client'
import { DeleteGroundData, GetGroundsData } from '@/services/GroundServices';

const AdminPanel = () => {

    const {data : grounds} = GetGroundsData()
    const deleteGround = DeleteGroundData()

    const handleDelete = (id: string) => {
        deleteGround.mutate(id);
      };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Dashboard</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Manage Grounds</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Settings</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Logout</a></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Manage Grounds</h2>

        {/* Ground List */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white p-2 rounded mb-4 w-full"
          />
          <table className="w-full bg-gray-800 rounded">
            <thead>
              <tr>
                <th className="border-b border-gray-700 p-2">Ground Name</th>
                <th className="border-b border-gray-700 p-2">City</th>
                <th className="border-b border-gray-700 p-2">State</th>
                <th className="border-b border-gray-700 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {grounds?.map(ground => (
                <tr key={ground.id}>
                  <td className="border-b border-gray-700 p-2">{ground.groundName}</td>
                  <td className="border-b border-gray-700 p-2">{ground.city}</td>
                  <td className="border-b border-gray-700 p-2">{ground.state}</td>
                  <td className="border-b border-gray-700 p-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white p-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white p-1 rounded"
                    onClick={() => handleDelete(ground.id)}

                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ground Detail / Edit Form */}
      </div>
    </div>
  );
};

export default AdminPanel;
