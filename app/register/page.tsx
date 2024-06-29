'use client'
import React from 'react';
import { useForm } from '@felte/react';
import { AddUser as AddUserType } from '@/types/AddUser';
import { AddUser } from '@/services/matchServices';
import { validator } from '@felte/validator-zod';
import { UserSchema } from '@/schema/UserSchema';

const RegisterPage = () => {
    const addUser = AddUser();
    const { form, errors } = useForm<AddUserType>({
        onSubmit: async (values) => {
            console.log(values);
            try {
                await (await addUser).mutateAsync(values);
            } catch (error) {
                console.error('Error adding user:', error);
            }
        },
        extend: validator({ schema: UserSchema })
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Register User</h1>
                <form ref={form} className="space-y-4">
                    <label className="block">
                        <span className="text-gray-700">First Name</span>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className={`mt-1 block w-full px-3 py-2 bg-white border ${errors().firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors().firstName && <p className="text-red-500 text-sm mt-1">{errors().firstName}</p>}
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Last Name</span>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className={`mt-1 block w-full px-3 py-2 bg-white border ${errors().lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors().lastName && <p className="text-red-500 text-sm mt-1">{errors().lastName}</p>}
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={`mt-1 block w-full px-3 py-2 bg-white border ${errors().email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors().email && <p className="text-red-500 text-sm mt-1">{errors().email}</p>}
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Phone No</span>
                        <input
                            type="text"
                            name="phoneNo"
                            placeholder="Phone No"
                            className={`mt-1 block w-full px-3 py-2 bg-white border ${errors().phoneNo ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors().phoneNo && <p className="text-red-500 text-sm mt-1">{errors().phoneNo}</p>}
                    </label>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
