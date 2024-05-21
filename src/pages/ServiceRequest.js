import React, { useState } from 'react';
import axios from 'axios';

// Define the ServiceRequest component
const ServiceRequest = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_PROPERTY_MANAGEMENT_BACKEND_URL}/api/service-requests`, formData);
      console.log('Service request submitted:', response.data);
    } catch (error) {
      console.error('Error submitting service request:', error);
    }
  };

  // Render the form
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">24/7 Service Request</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="name">Name</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="issue">Issue</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" id="issue" name="issue" value={formData.issue} onChange={handleChange}></textarea>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">Submit</button>
      </form>
    </div>
  );
};

// Export the component
export default ServiceRequest;