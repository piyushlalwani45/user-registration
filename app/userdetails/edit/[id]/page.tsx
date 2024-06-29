'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from '@felte/react';
import { EditUsersData, GetUsersData } from '@/services/matchServices';
import { AddUser as AddUserType } from '@/types/AddUser';

const EditUserPage = ({ params }: { params: { id: string } }) => {
  const { data: users } = GetUsersData();
  const editUser = EditUsersData();
  const router = useRouter();
  const user = users?.find((u) => u.id === params.id);
  
  const { form, reset, isDirty } = useForm<AddUserType>({
    onSubmit: async (values) => {
      try {
        await editUser.mutateAsync({ id: params.id, data: values });
        router.push('/userdetails');
      } catch (error) {
        console.error('Error editing user:', error);
      }
    },
    initialValues : {
        firstName : user?.firstName,
        lastName : user?.lastName,
        email : user?.email,
        phoneNo : user?.phoneNo
    }
  });

  if (!user) return <div>User not found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit User</h1>
        <form ref={form} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">First Name</span>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Last Name</span>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Phone No</span>
            <input
              type="text"
              name="phoneNo"
              placeholder="Phone No"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={!isDirty()}
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserPage;
