'use client'

import React, { useState } from 'react';

interface FormData {
  name: string;
  age: number;
  gender: string;
  branch: string;
  profilePic: File | null;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: 18,
    gender: '',
    branch: '',
    profilePic: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, profilePic: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation (minimal)
    if (!formData.name || !formData.gender || !formData.branch) {
      alert('Please fill out all required fields.');
      return;
    }

    // Simulate form submission
    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('age', formData.age.toString());
    payload.append('gender', formData.gender);
    payload.append('branch', formData.branch);
    if (formData.profilePic) {
      payload.append('profile_pic', formData.profilePic);
    }

    // Replace this with actual POST request to backend
    console.log('Submitting form:', Object.fromEntries(payload.entries()));
    alert('Signed up successfully!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
        encType="multipart/form-data"
      >
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">🎉 Join CrushRush</h2>

        <label className="block mb-4">
          <span className="text-sm font-medium">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium">Age</span>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min={0}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium">Gender</span>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-pink-400"
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium">Branch</span>
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
          />
        </label>

        <label className="block mb-6">
          <span className="text-sm font-medium">Profile Picture</span>
          <input
            type="file"
            name="profile_pic"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-600"
          />
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-pink-600 text-white font-bold rounded-xl hover:bg-pink-700 transition"
        >
          Sign Up 🚀
        </button>
      </form>
    </div>
  );
};

export default SignUp;
