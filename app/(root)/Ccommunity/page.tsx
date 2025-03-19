'use client'


import React, { useState } from 'react';
import { toast } from 'sonner'; // Sonner for toast notifications
import { Button } from '@/components/ui/button';



function CreateCommunity() {
  const [communityData, setCommunityData] = useState({
    name: '',
    goal: '',
    motto: '',
    vision: '',
    mission: '',
    objective: '',
    rules: ''
  });

  // Handle input change
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setCommunityData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleCreateCommunity = () => {
    // Perform your form validation here if necessary

    // Show toast on success
    toast.success('You are now the admin');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Create Your Community</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Community Name:</label>
            <input
              type="text"
              name="name"
              value={communityData.name}
              onChange={handleChange}
              placeholder="Enter community name"
              required
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Goal:</label>
            <input
              type="text"
              name="goal"
              value={communityData.goal}
              onChange={handleChange}
              placeholder="Enter community goal"
              required
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Motto:</label>
            <input
              type="text"
              name="motto"
              value={communityData.motto}
              onChange={handleChange}
              placeholder="Enter community motto"
              required
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Vision:</label>
            <input
              type="text"
              name="vision"
              value={communityData.vision}
              onChange={handleChange}
              placeholder="Enter community vision"
              required
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Mission:</label>
            <input
              type="text"
              name="mission"
              value={communityData.mission}
              onChange={handleChange}
              placeholder="Enter community mission"
              required
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Objective:</label>
            <input
              type="text"
              name="objective"
              value={communityData.objective}
              onChange={handleChange}
              placeholder="Enter community objective"
              required
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Rules:</label>
            <textarea
              name="rules"
              value={communityData.rules}
              onChange={handleChange}
              placeholder="Enter community rules"
              required
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="text-center">
            <Button onClick={handleCreateCommunity} className="text-lg px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCommunity;
