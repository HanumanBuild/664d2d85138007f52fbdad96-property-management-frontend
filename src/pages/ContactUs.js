import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">Feel free to reach out to us for any inquiries or support.</p>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="name">Name</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="message">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message"></textarea>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;