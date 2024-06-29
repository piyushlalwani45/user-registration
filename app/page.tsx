'use client'
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to User Management</h1>
        <div className="space-y-4">
          <Link href="/register" className="w-full inline-block bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add User
           
          </Link>
          <Link href="/userdetails"  className="w-full inline-block bg-green-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              User Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
