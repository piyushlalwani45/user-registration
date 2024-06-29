'use client'
import React from 'react';
import Link from 'next/link';
import {GetUsersData , DeleteUsersData} from '@/services/matchServices';

const UserDetailsPage = () => {
  const { data: users, isLoading, error } = GetUsersData();
  const deleteUser = DeleteUsersData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;

  const handleDelete = (id: string) => {
    deleteUser.mutate(id);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">User Details</h1>
        <Link href="/register" className="text-indigo-500 hover:text-indigo-700 mb-4 inline-block">
         Register New User
        </Link>
        {users?.length ? (
          <ul className="space-y-4">
            {users.map(user => (
              <li key={user.id} className="bg-gray-100 p-4 rounded flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold">{user.firstName} {user.lastName}</h2>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-gray-600">{user.phoneNo}</p>
                </div>
                <div className="space-x-2">
                  <Link href={`/userdetails/edit/${user.id}`} className="text-blue-500 hover:text-blue-700">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserDetailsPage;
