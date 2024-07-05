'use client';
import React, { useState } from 'react';
import { useForm } from '@felte/react';
import { AddGroundType } from '@/types/AddGroundType';
import { AddGround } from '@/services/GroundServices';
import { validator } from '@felte/validator-zod';

const GroundForm: React.FC = () => {
    const addGround = AddGround();
    const { form, errors } = useForm<AddGroundType>({
        onSubmit: async (values) => {
            // Convert comma-separated strings to arrays
            values.phoneNo = (values.phoneNo as unknown as string).split(',').map(phone => phone.trim());
            values.imageUrl = (values.imageUrl as unknown as string).split(',').map(url => url.trim());
            values.dateOfRegistration = "2024-07-06T14:30:00Z"
            
            console.log(values);
            try {
                await (await addGround).mutateAsync(values);
            } catch (error) {
                console.error('Error adding ground:', error);
            }
        },
        // extend: validator({ schema: GroundSchema })
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Register Ground</h1>
                <form ref={form} className="space-y-6">
                    <div>
                        <label className="block mb-2">
                            <span className="text-gray-400">Ground Name</span>
                            <input
                                type="text"
                                name="groundName"
                                placeholder="Ground Name"
                                className={`mt-1 block w-full px-3 py-2 bg-gray-700 border ${errors().groundName ? 'border-red-500' : 'border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                        </label>
                        {errors().groundName && <p className="text-red-500 text-sm mt-1">{errors().groundName}</p>}
                    </div>
                    {/* <div>
                        <label className="block mb-2">
                            <span className="text-gray-400">Date of Registration</span>
                            <input
                                type="datetime-local"
                                name="dateOfRegistration"
                                className={`mt-1 block w-full px-3 py-2 bg-gray-700 border ${errors().dateOfRegistration ? 'border-red-500' : 'border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                        </label>
                        {errors().dateOfRegistration && <p className="text-red-500 text-sm mt-1">{errors().dateOfRegistration}</p>}
                    </div> */}
                    <div>
                        <label className="block mb-2">
                            <span className="text-gray-400">Phone Numbers</span>
                            <input
                                type="text"
                                name="phoneNo"
                                placeholder="Comma-separated phone numbers"
                                className={`mt-1 block w-full px-3 py-2 bg-gray-700 border ${errors().phoneNo ? 'border-red-500' : 'border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                        </label>
                        {errors().phoneNo && <p className="text-red-500 text-sm mt-1">{errors().phoneNo}</p>}
                    </div>
                    <div>
                        <label className="block mb-2">
                            <span className="text-gray-400">Image URLs</span>
                            <input
                                type="text"
                                name="imageUrl"
                                placeholder="Comma-separated image URLs"
                                className={`mt-1 block w-full px-3 py-2 bg-gray-700 border ${errors().imageUrl ? 'border-red-500' : 'border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                        </label>
                        {errors().imageUrl && <p className="text-red-500 text-sm mt-1">{errors().imageUrl}</p>}
                    </div>
                    <div>
                        <label className="block mb-2">
                            <span className="text-gray-400">Address</span>
                            <input
                                type="text"
                                name="addressLine"
                                placeholder="Address Line"
                                className={`mt-1 block w-full px-3 py-2 bg-gray-700 border ${errors().addressLine ? 'border-red-500' : 'border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                        </label>
                        {errors().addressLine && <p className="text-red-500 text-sm mt-1">{errors().addressLine}</p>}
                    </div>
                    <div>
                        <label className="block mb-2">
                            <span className="text-gray-400">Pin Code</span>
                            <input
                                type="text"
                                name="pinCode"
                                placeholder="Pin Code"
                                className={`mt-1 block w-full px-3 py-2 bg-gray-700 border ${errors().pinCode ? 'border-red-500' : 'border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                        </label>
                        {errors().pinCode && <p className="text-red-500 text-sm mt-1">{errors().pinCode}</p>}
                    </div>
                    <div>
                        <label className="block mb-2">
                            <span className="text-gray-400">City</span>
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                className={`mt-1 block w-full px-3 py-2 bg-gray-700 border ${errors().city ? 'border-red-500' : 'border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                        </label>
                        {errors().city && <p className="text-red-500 text-sm mt-1">{errors().city}</p>}
                    </div>
                    <div>
                        <label className="block mb-2">
                            <span className="text-gray-400">State</span>
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                className={`mt-1 block w-full px-3 py-2 bg-gray-700 border ${errors().state ? 'border-red-500' : 'border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                        </label>
                        {errors().state && <p className="text-red-500 text-sm mt-1">{errors().state}</p>}
                    </div>
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

export default GroundForm;
