import React, { useEffect, useState } from 'react';
import { getProperties } from '../api/property';

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const token = localStorage.getItem('token');
        const data = await getProperties(token);
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Property Management Company</h1>
      <p className="text-lg">We offer 24/7 service to manage your properties efficiently.</p>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Properties</h2>
        <ul>
          {properties.map((property) => (
            <li key={property._id} className="mb-2">
              <h3 className="text-xl font-bold">{property.name}</h3>
              <p>{property.address}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;